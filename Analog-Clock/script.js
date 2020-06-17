const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let hrPosition = 1, minPosition = 180, secPosition = 180*180;

hrPosition = hr*360/12 +  ((min*360/60) + (sec*360/60)/60)/12 ;
minPosition = (min*360/60) + (sec*360/60)/60;
secPosition = (sec*360/60);


var move = function() {
	
	hrPosition += (6/360);
	minPosition += (6/60) 
	secPosition += 6; //1 second layback sorted 	
	
	HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
	MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
	SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

setInterval(move, 1000);
