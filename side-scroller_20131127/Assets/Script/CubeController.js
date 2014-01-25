var normalCollect:GameObject;
var redCollect:GameObject;
private var pointController : PointController;
private var levelController : LevelController;
private var floor_position:Vector3;
private var collect_position:Vector3;
private static var gameLevel:int = 0;

function Awake() {
	pointController = gameObject.GetComponent("PointController");
	levelController = gameObject.GetComponent("LevelController");
}

function OnBecameInvisible() {
	floor_position = this.transform.position;
	floor_position.x += this.transform.localScale.x * 2;
	this.transform.position = floor_position;
	
	gameLevel = (pointController.GetPoint() / 100) + 1;
	
	levelController.SetLevel(gameLevel);
	
	var i:int = 0;
	var count:int = 1;
	
	if (gameLevel >= 5) {
		count = 5;
	}
	
	for (i = 0; i < count; i++ ) {
		collect_position = this.transform.position;
		collect_position.x = collect_position.x + Random.Range(0, this.transform.localScale.x);
		collect_position.y = Random.Range(1,5);
	
		if (Random.Range(1,5) != 1) {
			Instantiate(normalCollect, collect_position, transform.rotation);
		} else {
			Instantiate(redCollect, collect_position, redCollect.transform.rotation);
		}
	}
}