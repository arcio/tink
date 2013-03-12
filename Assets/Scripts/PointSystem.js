//Created by
//Tiago Damasceno, Doug Kinnison and Joe Bianco
//P15 Studios, LLC
//2013 Global Game Jam submission 
//Must be run in Unity 4

#pragma strict

var p1PointsGUI : GUIStyle;
var p2PointsGUI : GUIStyle;
var player1PointTally : int = 0;
var player2PointTally : int = 0;
var teamPointTally : int = 0;
var scores : GameObject;

////////////////////////////////////
//Add Points                      //
////////////////////////////////////
function Player1Suck () {
	scores.GetComponent(Scores).bluePoints += 1000;
}

function Player2Suck () {
	scores.GetComponent(Scores).redPoints += 1000;
}

function Player1Perfect () {
	scores.GetComponent(Scores).bluePoints += 10000;
}

function Player2Perfect () {
	scores.GetComponent(Scores).redPoints += 10000;
}

////////////////////////////////////
//Remove Points                   //
////////////////////////////////////
function Player1Fail () {
	scores.GetComponent(Scores).bluePoints -= 5000;
}

function Player2Fail () {
	scores.GetComponent(Scores).redPoints -= 5000;
}


