//Created by
//Tiago Damasceno, Doug Kinnison and Joe Bianco
//P15 Studios, LLC
//2013 Global Game Jam submission 
//Must be run in Unity 4

#pragma strict

var heart : GameObject;
var button : GameObject;
var buttonPosition : float;

function Start(){
	this.buttonPosition = this.button.transform.localPosition.x;	
}

function OnTriggerEnter (){
	var heartPosition = gameObject.Find("H3").transform.position.x;
	if(heartPosition > 0.5){
		gameObject.Find("PointSystem").SendMessage("Player2Fail");
	}else if(heartPosition < 0.5){
		gameObject.Find("PointSystem").SendMessage("Player1Fail");
	}
	this.heart.GetComponent(HeartMove).heartLive = false;
	this.heart.GetComponent(HeartMove).heartSpeed = 1.0;
	this.heart.GetComponent(HeartMove).startPos = this.buttonPosition;
	yield WaitForSeconds(.75);
	this.heart.transform.localPosition.x = this.buttonPosition;
	GameObject.Find("TotalScore").SendMessage("FailCounter");	
	GameObject.Find("Sounds").SendMessage("FailSound");
}