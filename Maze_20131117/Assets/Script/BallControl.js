var speed = 20;
var force:float = 2.0;
var phoneFlg:boolean = false;

function Start() {
	Screen.orientation = ScreenOrientation.Landscape;
}

function FixedUpdate() {
	if (!this.phoneFlg) {
		if (Input.GetKeyDown(KeyCode.UpArrow)) {
			rigidbody.AddForce(0,0,speed);
		} 
		if (Input.GetKeyDown(KeyCode.DownArrow)) {
			rigidbody.AddForce(0,0,-speed);
		}
		if (Input.GetKeyDown(KeyCode.RightArrow)) {
			rigidbody.AddForce(speed,0,0);
		}
		if (Input.GetKeyDown(KeyCode.LeftArrow)) {
			rigidbody.AddForce(-speed,0,0);
		}
	}
	else {
		var dir:Vector3 = Vector3.zero;
		dir.x = Input.acceleration.x;
		dir.z = Input.acceleration.y;
		rigidbody.AddForce(dir * this.force);
	}
}