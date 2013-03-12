//Created by
//Tiago Damasceno, Doug Kinnison and Joe Bianco
//P15 Studios, LLC
//2013 Global Game Jam submission 
//Must be run in Unity 4

#pragma strict

var mainMenuView : GameObject;
var game3View : GameObject;
var game4View : GameObject;
var pauseGame : GameObject;

function OnClick (){
	GameObject.Find("Sounds").SendMessage("PerfectSound");
	pauseGame.active = true;
	Time.timeScale = 0;
}