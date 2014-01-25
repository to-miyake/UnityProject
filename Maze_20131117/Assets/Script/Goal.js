var player : GameObject;
var yukaObj : GameObject;
var fire : GameObject;

private var rangeX : int;
private var rangeZ : int;
private var yukaPos : Vector3;

function Start() {
	rangeX = this.yukaObj.transform.localScale.x / 2;
	rangeZ = this.yukaObj.transform.localScale.z / 2;
	yukaPos = this.yukaObj.transform.position;
}

function OnCollisionEnter (collInfo : Collision) {
	var obj = collInfo.gameObject;
	
	if (obj.tag == "Player") {
		var posX = Random.Range(yukaPos.x - rangeX, yukaPos.z + rangeX);
		
		var posZ = Random.Range(yukaPos.z - rangeZ, yukaPos.z + rangeZ); 
		
		var position : Vector3 = Vector3(posX, this.fire.transform.position.y, posZ);
		
		Instantiate(fire, position, Quaternion.identity);
		
		Destroy(obj);
		
		Instantiate(player, player.transform.position, Quaternion.identity);
	}
}