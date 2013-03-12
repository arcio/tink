//Created by
//Tiago Damasceno, Doug Kinnison and Joe Bianco
//P15 Studios, LLC
//2013 Global Game Jam submission 
//Must be run in Unity 4

#pragma strict

var heartSpeed : float = 0.0;
var direction : String;
var heartLive : boolean = false;

var startPos : float;
var startTime : int;

function Start() {
	startPos = gameObject.transform.localPosition.x;
	startTime = Time.time;
	this.heartSpeed = 0.0;
	
	if (this.startPos > 0) {
		this.heartSpeed = -1;
	} else if(this.startPos < 0){
		this.heartSpeed = 1;
	}
}
  
function Update (){

	if (this.heartLive == true && this.heartSpeed < 3){
		if (Time.time - this.startTime > 45) {
			this.heartSpeed *= 1.003;
		} else if (Time.time - this.startTime > 30){
			this.heartSpeed *= 1.002;
		} else if (Time.time - this.startTime > 15) {
			this.heartSpeed *= 1.001;
		}
	}
	
	if(this.heartLive == true){
			transform.Translate(Vector3(1,0,0) * this.heartSpeed * Time.deltaTime);
	}
}

function SendRightPerfect() {
	if (this.heartSpeed < 0) {
		this.heartSpeed *= -1;
	}
}

function SendRight() {
	if (this.heartSpeed < 0) {
		this.heartSpeed *= -1;
	}
}

function SendLeftPerfect() {
	if (this.heartSpeed > 0) {
		this.heartSpeed *= -1;
	}
}

function SendLeft() {
	if (this.heartSpeed > 0) {
		this.heartSpeed *= -1;
	}
}

