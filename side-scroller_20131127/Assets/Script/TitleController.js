private var pointController : PointController;
private var levelController : LevelController;
private var hpController : HpController;

function Awake() {
	pointController = gameObject.GetComponent("PointController");
	levelController = gameObject.GetComponent("LevelController");
	hpController = gameObject.GetComponent("HpController");
}

function Update () {
	
	if (Input.GetKeyDown("a")) {
		pointController.Reset();
		levelController.Reset();
		hpController.Reset();
		Application.LoadLevel("level1");
	}
	
	if (Input.touchCount > 0) {
		pointController.Reset();
		levelController.Reset();
		hpController.Reset();
		Application.LoadLevel("level1");
	}
}