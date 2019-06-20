var computervalue = 0;
var totaluser = 0;
var red = 0;
var blue = 0;
var yellow = 0;
var green = 0;
var winscore = 0;
var losescore = 0;



function start() {
    computervalue = Math.floor(Math.random() * (120 - 19 + 19)) + 19;
    red = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    blue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    yellow = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    green = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    totaluser = 0;
    console.log(computervalue);
    document.getElementById("randomnum").innerHTML = computervalue;
    document.getElementById("user").innerHTML = totaluser;
    document.getElementById("wins").innerHTML = winscore;
    document.getElementById("losses").innerHTML = losescore;
}

function win() {
    document.getElementById("result").innerHTML = "You Won!!";
    winscore++
    document.getElementById("wins").innerHTML = winscore;
    start();
}

function lose() {
    document.getElementById("result").innerHTML = "You Lost!!";
    losescore++
    document.getElementById("losses").innerHTML = losescore;
    start();
}

function buttred() {
    document.getElementById("result").innerHTML = "";
    totaluser = totaluser + red;
    document.getElementById("user").innerHTML = totaluser;
    console.log(totaluser);
    console.log("red works");
    checkvalue();
}

function buttblue() {
    document.getElementById("result").innerHTML = "";
    totaluser = totaluser + blue;
    document.getElementById("user").innerHTML = totaluser;
    console.log(totaluser);
    console.log("blue works");
    checkvalue();
}

function buttyellow() {
    document.getElementById("result").innerHTML = "";
    totaluser = totaluser + yellow;
    document.getElementById("user").innerHTML = totaluser;
    console.log(totaluser);
    console.log("yellow works");
    checkvalue();
}

function buttgreen() {
    document.getElementById("result").innerHTML = "";
    totaluser = totaluser + green;
    document.getElementById("user").innerHTML = totaluser;
    console.log(totaluser);
    console.log("green works");
    checkvalue();
}

function checkvalue() {
    if (computervalue === totaluser) {
        win();
        console.log("winner works");
    }

    if (totaluser > computervalue) {
        lose();
        console.log("losser works");
    }
    console.log("check value works");
}

start();



if (computervalue === totaluser) {
    win();
    console.log("winner works");
}

if (totaluser > computervalue) {
    lose();
    console.log("losser works");
}