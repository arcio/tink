//Created by
//Tiago Damasceno, Doug Kinnison and Joe Bianco
//P15 Studios, LLC
//2013 Global Game Jam submission 
//Must be run in Unity 4

#pragma strict

function OnClick (){
	GameObject.Find("Sounds").SendMessage("SuckSound");
	Application.LoadLevel(Application.loadedLevel);
	Time.timeScale = 1;
}
