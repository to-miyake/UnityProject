 var keyInputText  : GUIText;
 var waitTime : float = 1.0;
 
 private var blinkFlg : boolean = false;
 private var text : String;
 
 function Start() {
 	text = keyInputText.text;
 }
 
 function Update() {
 	if (Input.GetKeyDown("a")) {
 		Application.LoadLevel(1);
 	}
 	
 	if (!blinkFlg) {
 		brinkKeyInput();
 	}
 	
 	if (Input.touchCount > 0) {
 		Application.LoadLevel(1);
 	}
 }
 
 function brinkKeyInput() {
 	blinkFlg = true;
 	
 	keyInputText.text = text;
 	
 	yield WaitForSeconds(waitTime);
 	
 	keyInputText.text = "";
 	
 	yield WaitForSeconds(waitTime / 2);
 	
 	blinkFlg = false;
 }