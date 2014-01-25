private var itemFlg = false;
private var clearFlg = false;

function OnControllerColliderHit(hit : ControllerColliderHit) {
	var obj = hit.gameObject;
	
	var player = hit.controller.gameObject;
	
	if (obj.name == "RefreshArea") {
		Application.LoadLevel("JumpMan_01");
	}
	
	if (obj.name == "FirePlug" && itemFlg == true) {
		var objWater = gameObject.Find("Water Fountain");
		
		var compPartRend = objWater.GetComponent(ParticleRenderer);
		
		compPartRend.enabled = false;
		
		clearFlg = true;
		
		obj.audio.Stop();
	}
	
	if (obj.name == "Item") {
		itemFlg = true;
		
		Destroy(obj);
		
		var objWrench = player.Find("wrench");
		
		var compMeshRend = objWrench.GetComponent(MeshRenderer);
		
		compMeshRend.enabled = true;
	}
	
	if (obj.name == "Start" && clearFlg == true) {
		Application.LoadLevel("JumpMan_Clear");
	}
}