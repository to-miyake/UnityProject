var explosion:GameObject;
var damage:int = 3;
private var nowPosition:Vector3;
private var levelController : LevelController;
private var hpController : HpController;

function Awake() {
	nowPosition = transform.position;
	levelController = gameObject.GetComponent("LevelController");
	hpController = gameObject.GetComponent("HpController");
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
		
		hpController.SetDamage(damage);
		
		if (hpController.GetHp() <= 0) {
			var clones = GameObject.FindGameObjectsWithTag ("Collect");
			for (var clone in clones){
			    Destroy(clone);
			}
			
			Application.LoadLevel("Title");
		}
	}
}

function OnBecameInvisible() {
	Destroy(gameObject);
}