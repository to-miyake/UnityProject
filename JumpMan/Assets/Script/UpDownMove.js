private var nowPosition : Vector3;

function Awake() {
	nowPosition = transform.position;
}

function Update() {
	var offs = Vector3(0, Mathf.Sin(Time.time), 0);
	
	transform.position = nowPosition + offs;
}