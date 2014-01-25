private static var hp:int = 10;
private var oldHp:int = hp;

function Awake () {
    //ßDontDestroyOnLoad (this);//次のシーンを読み込むときに、自分自身を破壊しない。
    this.gameObject.guiText.text = "HP : " + hp;
}

function Update() {
	if (oldHp != hp) {
		this.gameObject.guiText.text = "HP : " + hp;
		oldHp = hp;
	}
}

static function SetDamage(val:int) {
	hp -= val;
}

static function HealHp(val:int) {
	hp += val;
}

static function GetHp() {
	return hp;
}

static function Reset() {
	hp = 10;
}