//Created by
//Tiago Damasceno, Doug Kinnison and Joe Bianco
//P15 Studios, LLC
//2013 Global Game Jam submission 
//Must be run in Unity 4

#pragma strict

var totalScoreObject : GameObject;
var redScore : int;
var blueScore : int;
var totalScore : int;
var redScoreGUI : GUIStyle;
var blueScoreGUI : GUIStyle;
var totalScoreGUI : GUIStyle;

function GetPoints (){
	this.redScore = totalScoreObject.GetComponent(Scores).redPoints;
	this.blueScore = totalScoreObject.GetComponent(Scores).bluePoints;
	this.totalScore = totalScoreObject.GetComponent(Scores).totalPoints;
}

function OnGUI () {
	GUI.Box(Rect(20,80,100,100), "PINK PLAYER " +this.redScore, this.redScoreGUI);
	GUI.Box(Rect(20,220,100,100), "BLUE PLAYER " +this.blueScore, this.blueScoreGUI);
	this.totalScore = this.redScore + this.blueScore;
	GUI.Box(Rect(20,360,100,100), "TEAM TOTAL " +this.totalScore, this.totalScoreGUI);
	if(GUI.Button(Rect(20,500,Screen.width,100), "MAIN MENU ", this.redScoreGUI)){
		Application.LoadLevel(Application.loadedLevel);
	}
}