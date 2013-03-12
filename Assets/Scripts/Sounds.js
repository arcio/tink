//Created by
//Tiago Damasceno, Doug Kinnison and Joe Bianco
//P15 Studios, LLC
//2013 Global Game Jam submission 
//Must be run in Unity 4

#pragma strict

var failSound : AudioClip;
var perfectSound : AudioClip;
var suckSound : AudioClip;
var heartBeat : AudioClip;
var selectSound : AudioClip;
var pointSound : AudioClip;


function FailSound (){
	audio.PlayOneShot(this.failSound);
}

function PerfectSound () {
	audio.PlayOneShot(this.perfectSound);
}

function SuckSound () {
	audio.PlayOneShot(this.suckSound);
}

function HeartBeat () {
	audio.PlayOneShot(this.heartBeat);
}

function SelectSound () {
	audio.PlayOneShot(this.selectSound);
}

function PointSound () {
	audio.PlayOneShot(this.pointSound);
}