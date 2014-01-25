var explosion:GameObject;

private var nowPosition:Vector3;
private var pointController : PointController;
private var levelController : LevelController;

function Awake() {
	nowPosition = transform.position;
	levelController =  gameObject.GetComponent("LevelController");
}

function Update() {
	if (levelController.GetLevel() > 3) {
		var offs = Vector3(0, Mathf.Sin(Time.time), 0);
		transform.position = nowPosition + offs;
	}
}

function OnTriggerEnter(theObject:Collider) {	

	if (theObject.gameObject.name == "MainChar") {
		Instantiate(explosion, transform.position, transform.rotation);
		
		pointController.AddPoint(10);
		
		Destroy(gameObject);
	}
	
}

function OnBecameInvisible() {
	Destroy(gameObject);
}