//Created by
//Tiago Damasceno, Doug Kinnison and Joe Bianco
//P15 Studios, LLC
//2013 Global Game Jam submission 
//Must be run in Unity 4

#pragma strict

var sendButton : GameObject;

function OnTriggerEnter (other:Collider) {
	if (other.gameObject.tag == "heart"){
		sendButton.GetComponent(SendButton).collisionSuck = true;
	}
}

function OnTriggerExit (other:Collider) {
	if (other.gameObject.tag == "heart"){
		sendButton.GetComponent(SendButton).collisionSuck = false;
	}
}