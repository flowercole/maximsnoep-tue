var lt, usert, rt;
var time,timeSite;
var leave,away;
var d = new Date();

function FollowBackground(){
	lt = 40;
	usert = +localStorage.getItem('timeSite')/1000;
	if (localStorage.getItem('rt') == null ){
		offset = 0;
	} else {
		offset = +localStorage.getItem('rt');
	}
	rt = -usert + offset;
	localStorage.setItem('rt',rt);
	localStorage.setItem('offset',offset);
	localStorage.setItem('usert',usert);
	document.getElementById("body").style.WebkitAnimation = "colorPulse 40s "+rt+"s infinite alternate";
}

window.onbeforeunload=function(){
	leave = d.getTime();
        timeSite=new Date()-time;
        localStorage.setItem('timeSite',timeSite);
	window.localStorage['leave']=leave;
}		

function loadfunction(){
	time=new Date();
	away = d.getTime() - localStorage.getItem('leave') - localStorage.getItem('timeSite');
	FollowBackground()		
}

$( document ).ready(function() {
  loadfunction();
});
