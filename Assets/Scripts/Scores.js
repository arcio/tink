//Created by
//Tiago Damasceno, Doug Kinnison and Joe Bianco
//P15 Studios, LLC
//2013 Global Game Jam submission 
//Must be run in Unity 4

#pragma strict

var redPoints : int = 0;
var bluePoints : int = 0;
var totalPoints : int = 0;
var failTally : int = 0;
var game3View : GameObject;
var game4View : GameObject;
var game5View : GameObject;
var showScore : GameObject;

function Start () {
	yield WaitForSeconds(1);
	this.totalPoints = bluePoints + redPoints;
}

function FailCounter (){
	failTally --;
	if (this.failTally <= 0){
		game3View.active = false;
		game4View.active = false;
		game5View.active = false;
		showScore.active = true;
		GameObject.Find("ShowScore").SendMessage("GetPoints");
	}
}
