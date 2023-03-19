var givenpattern = [],a= -1,i,clickpattern = [],level=0,b=0,random,activebutton,text,touch=0;
random = Math.round(Math.random() * 3)+1;
document.addEventListener("keypress",function(){
if(touch == 0){
activebutton = document.querySelector(".tile"+random);
activebutton.classList.add("box");
setTimeout(function(){
        activebutton.classList.remove("box");},100);
createpattern(random);
a = -1;
touch = 1;
}});

function createpattern(random){
givenpattern = givenpattern + random;
console.log(givenpattern);
clickpattern = [];
level++;
b=level;
a = -1;
document.querySelector(".status").innerHTML = "Level"+level;
setTimeout(function(){
makesound(random);},1000);
}

function makesound(random){ 
 switch(random){
  case 1:
      var audio = new Audio("sounds/green.mp3");
      audio.play();
      break;
  case 2:
      var audio = new Audio("sounds/red.mp3");
      audio.play();
      break;
  case 3:
      var audio = new Audio("sounds/yellow.mp3");
      audio.play();
      break;
  case 4:
      var audio = new Audio("sounds/blue.mp3");
      audio.play();
      break;
  default:
      document.querySelector("body").style.backgroundColor = "red";
      var audio = new Audio("sounds/wrong.mp3");
      document.querySelector(".status").innerHTML = "Game Over, Press Any Key to Restart";
      audio.play();
      setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "#011F3F";},100);
       random = Math.round(Math.random() * 3)+1;
      touch = 0;
       break;
}}

document.querySelector(".tile1").addEventListener("click", function(){
if(touch == 1){
activebutton = document.querySelector(".tile1");
activebutton.classList.add("box");
makesound(1);
setTimeout(function(){
        activebutton.classList.remove("box");},100);
clickpattern = clickpattern + 1;
a++;
userpattern(a);}
});

document.querySelector(".tile2").addEventListener("click", function(){
if(touch == 1){
activebutton = document.querySelector(".tile2");
activebutton.classList.add("box");
makesound(2);
setTimeout(function(){
        activebutton.classList.remove("box");},100);
clickpattern = clickpattern + 2;
a++;
userpattern(a);}
});

document.querySelector(".tile3").addEventListener("click", function(){
if(touch == 1){
activebutton = document.querySelector(".tile3");
activebutton.classList.add("box");
makesound(3);
setTimeout(function(){
        activebutton.classList.remove("box");},100);
clickpattern = clickpattern + 3;
a++;
userpattern(a);}
});

document.querySelector(".tile4").addEventListener("click", function(){
if(touch == 1){
activebutton = document.querySelector(".tile4");
activebutton.classList.add("box");
makesound(4);
setTimeout(function(){
        activebutton.classList.remove("box");},100);
clickpattern = clickpattern + 4;
a++;
userpattern(a);}
});


function userpattern(a){
console.log(clickpattern);
 if(clickpattern[a] == givenpattern[a]){
  b--;
}else{
  makesound(5);
}

if(b==0 && a+1 == level){
random = Math.round(Math.random() * 3)+1;
createpattern(random);
}}