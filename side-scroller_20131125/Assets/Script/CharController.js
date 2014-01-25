var normalSpeed:float = 4.0;
private var speed:float = normalSpeed;
var runSpeed:float = 12.0;
private var jumpSpeed:float = speed * 3.0;
var gravity:float = 20.0;

static var grounded:boolean = false;

private var walkTime:int = 0;
private var moveDirection:Vector3 = Vector3.zero;
private var controller:CharacterController;
private var flags:CollisionFlags;
private var tr:int = 90;
private var levelController : LevelController;

function Awake() {
	levelController = gameObject.GetComponent("LevelController");
}

function Start() {
	animation.wrapMode = WrapMode.Loop;
	animation["run"].layer = -1;
	animation["walk"].layer = -1;
	animation["idle"].layer = -1;
	animation.SyncLayer(-1);
	
	animation["jump"].layer = 10;
	animation["jump"].wrapMode = WrapMode.Once;
	animation.SyncLayer(10);
	
	animation.Stop();
	animation.Play("idle");
	
	animation.CrossFade("run");
	speed = runSpeed;
}

function FixedUpdate() {
	if (grounded) {
		moveDirection = new Vector3(2, 0, 0);
		//moveDirection = new Vector3(Input.GetAxis("Horizontal"), 0, 0);
		//moveDirection = new Vector3(joystick.position.x, 0, 0);

		moveDirection *= (speed + levelController.GetLevel());
		
		if (Input.GetButton("Jump")) {
			moveDirection.y = jumpSpeed;
			animation.CrossFade("jump");
		} else {
			for (var touch : Touch in Input.touches) {
				if (touch.position.x > Screen.width / 2 && touch.position.y < Screen.height / 2) {
					moveDirection.y = jumpSpeed;
					animation.CrossFade("jump");
				}  
			}
		}
	} else {
		moveDirection = new Vector3(2, moveDirection.y / speed, 0);
		//moveDirection = new Vector3(Input.GetAxis("Horizontal"), moveDirection.y / speed, 0);
		//moveDirection = new Vector3(joystick.position.x, moveDirection.y / speed, 0);
		moveDirection *= speed;
	}
	
	moveDirection.y -= gravity * Time.deltaTime;
	
	controller = GetComponent(CharacterController);
	flags = controller.Move(moveDirection * Time.deltaTime);
	
	grounded  = (flags & CollisionFlags.CollidedBelow) != 0;
	
	if (moveDirection.x > 0){
		tr = 90;
	} else if (moveDirection.x < 0){
		tr = 270;
	}
	
	transform.eulerAngles.y -= (transform.eulerAngles.y - tr) / 5;

/*
	if (Input.GetAxis("Horizontal") >.2 || Input.GetAxis("Horizontal") < -.2) {
		//if (joystick.position.x >.2 || joystick.position.x < -.2) {
		if (walkTime > 40) {
			animation.CrossFade("run");
			speed = runSpeed;
		} else {
			walkTime++;
			animation.CrossFade("walk");
			speed = normalSpeed;
		}
		
		jumpSpeed = speed * 1.7;
			
	} else {
		walkTime = 0;
		animation.CrossFade("idle");
	}
*/
}

@script RequireComponent(CharacterController)