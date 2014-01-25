static var point:int = 0;
private static var oldPoint:int = point;

private var hpController : HpController;

function Awake () {
    DontDestroyOnLoad (this);//次のシーンを読み込むときに、自分自身を破壊しない。
	hpController =  gameObject.GetComponent("HpController");
}

function Update() {
	this.gameObject.guiText.text = "" + point;
	
	if (oldPoint != point) {
		oldPoint = point;
		
		if ( (this.point / 100 > 0) && (this.point % 100 == 0) ) {
			hpController.HealHp(1);
		}
	}
}

static function AddPoint(val:int) {
	this.point += val;
}

static function GetPoint() {
	return this.point;
}

static function Reset() {
	this.point = 0;
	this.oldPoint = 0;
}