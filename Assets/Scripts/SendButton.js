//Created by
//Tiago Damasceno, Doug Kinnison and Joe Bianco
//P15 Studios, LLC
//2013 Global Game Jam submission 
//Must be run in Unity 4

#pragma strict

var collisionPerfect : boolean = false;
var collisionSuck : boolean = false;
var heart : GameObject;

function OnPress () {
	var heartPosition = heart.transform.localPosition.x;		
	
	if(heart.GetComponent(HeartMove).heartLive == false && (collisionPerfect == true || collisionSuck == true)){
		heart.GetComponent(HeartMove).heartLive = true;
		print("Y oh y?");
	}
	
	if(this.collisionSuck == true && this.collisionPerfect == false){
		if (heartPosition > 0.5){
			heart.SendMessage("SendLeft");
			gameObject.Find("PointSystem").SendMessage("Player2Suck");
		}else if (heartPosition < 0.5) {
			heart.SendMessage("SendRight");
			gameObject.Find("PointSystem").SendMessage("Player1Suck");			
		}
	}else if (this.collisionPerfect == true){
		if (heartPosition > 0.5){
			heart.GetComponent(HeartMove).heartLive = false;
			gameObject.Find("PointSystem").SendMessage("Player2Perfect");
			yield WaitForSeconds(.5);
			heart.GetComponent(HeartMove).heartLive = true;
			heart.SendMessage("SendLeftPerfect");
		}else if (heartPosition < 0.5) {
			heart.GetComponent(HeartMove).heartLive = false;
			gameObject.Find("PointSystem").SendMessage("Player1Perfect");
			yield WaitForSeconds(.5);
			heart.GetComponent(HeartMove).heartLive = true;
			heart.SendMessage("SendRightPerfect");
		}
	}
}