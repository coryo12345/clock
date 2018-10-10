var can = document.getElementById("canvas");
var cx = can.getContext("2d");

const width = can.width;
const height = can.height;

console.log({width, height});

var xc = width / 2; //x center
var yc = height / 2;//y center

var seconds = {
    x: 0,
    y: 0,
    length: xc*.75
};

var minutes = {
    x: 0,
    y: 0,
    length: xc*.75
};

var hours = {
    x: 0,
    y: 0,
    length: xc*.5
};

setInterval(main, 1000);

function main(){
    phys();
    draw();
}

function phys(){
    var d = new Date();
    
    //seconds
    var s = d.getSeconds();
    var rad = toRadian(s*6);
    tmpx = Math.round(seconds.length * Math.sin(rad));
    tmpy = -1 * Math.round(seconds.length * Math.cos(rad));
    seconds.x = tmpx + xc;
    seconds.y = tmpy + yc;

    //minutes
    var m = d.getMinutes();
    var rad = toRadian(m*6);
    tmpx = Math.round(minutes.length * Math.sin(rad));
    tmpy = -1 * Math.round(minutes.length * Math.cos(rad));
    minutes.x = tmpx + xc;
    minutes.y = tmpy + yc;

    //hours
    var h = d.getHours();
    var rad = toRadian(h*6);
    tmpx = Math.round(hours.length * Math.sin(rad));
    tmpy = -1 * Math.round(hours.length * Math.cos(rad));
    hours.x = tmpx + xc;
    hours.y = tmpy + yc;
}

function draw(){
    //background
    cx.fillStyle = "black";
    cx.fillRect(0, 0, width, height);

    //points
    cx.strokeStyle = "white";
    cx.fillStyle = "white";
    cx.lineWidth = 5;
    for(i = 0; i < 12; i++){
        angle = i * (Math.PI / 6); 
        cx.beginPath();
        cx.moveTo(xc + ((xc * .8) * Math.cos(angle)), yc +((yc * .8) * Math.sin(angle)));
        cx.lineTo(xc + ((xc * .85) * Math.cos(angle)), yc +((yc * .85) * Math.sin(angle)));
        cx.stroke();
    }

    //hours
    cx.lineWidth = 4;
    cx.beginPath();
    cx.moveTo(xc, yc);
    cx.lineTo(hours.x, hours.y);
    cx.stroke();

    //minutes
    cx.lineWidth = 3;
    cx.beginPath();
    cx.moveTo(xc, yc);
    cx.lineTo(minutes.x, minutes.y);
    cx.stroke();

    //seconds
    cx.strokeStyle = "red";
    cx.lineWidth = 2;
    cx.beginPath();
    cx.moveTo(xc, yc);
    cx.lineTo(seconds.x, seconds.y);
    cx.stroke();
    
}

function toRadian(value){
    return value * (Math.PI / 180);
}