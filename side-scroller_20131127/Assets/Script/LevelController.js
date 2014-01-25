static var level:int = 1;
private var oldLevel:int = level;

function Awake () {
    //ßDontDestroyOnLoad (this);//次のシーンを読み込むときに、自分自身を破壊しない。
    this.gameObject.guiText.text = "Level : " + level;
}

function Update() {
	if (oldLevel != level) {
		this.gameObject.guiText.text = "Level : " + level;
		oldLevel = level;
	}
}

static function SetLevel(val:int) {
	this.level = val;
}

static function GetLevel() {
	return this.level;
}

static function Reset() {
	this.level = 1;
}