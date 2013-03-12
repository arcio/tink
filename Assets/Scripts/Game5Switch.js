//Created by
//Tiago Damasceno, Doug Kinnison and Joe Bianco
//P15 Studios, LLC
//2013 Global Game Jam submission 
//Must be run in Unity 4

#pragma strict

var mainMenuView : GameObject;
var game3View : GameObject;
var game4View : GameObject;
var game5View : GameObject;

function OnClick (){
	mainMenuView.active = false;
	game3View.active = false;
	game4View.active = false;
	game5View.active = true;
	GameObject.Find("TotalScore").GetComponent(Scores).failTally = 16;
}