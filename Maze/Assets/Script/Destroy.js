var particle : ParticleEmitter;

function OnCollisionEnter (collInfo : Collision) {
	var obj = collInfo.gameObject;
	
	if (obj.tag == "Player") {
		obj.rigidbody.velocity = Vector3.zero;
		
		Instantiate(particle, obj.transform.position, obj.transform.rotation);
		
		yield WaitForSeconds(2);
		
		Application.LoadLevel(0);
	}
}