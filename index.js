// WORKPLACE IMAGE

var randomnumber1 = Math.floor(Math.random() * 2) + 1;
var randomimg1 = "assests/workplace" + randomnumber1 + ".gif";
document.querySelector(".firstimg").setAttribute("src",randomimg1);

// EDUCATIONAL BACKGROUND IMAGE1

var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomimg2 = "assests/img" + randomnumber2 + ".gif";
document.querySelector(".ebimg1").setAttribute("src",randomimg2);



//  BUTTON TRAIL

// var len = document.querySelectorAll("button").length;
// for(var i = 0;i < len;i++){
//   document.querySelectorAll("button")[i].addEventListener("click",fun);
// }
//
// function fun(){
//   var exp = this.innerHTML;
//   decision(exp);
//   animation(exp);
// }

// KEYPRESS TRIAL

// document.addEventListener("keypress",function(event){
//   decision(event.key);
//   animation(event.key);
// });



// function decision(key){
//   switch (key) {
//     case "P": var a1 = new Audio("assests/P.mp3");
//               a1.play();
//               break;
//     case "V": var a2 = new Audio("assests/V.mp3");
//               a2.play();
//               break;
//     default: alert("Press P or V");
//
//   }
// }

// ANIMATION TRIAL

// function animation(val){
//   var value6 = document.querySelector("." + val);
//   value6.classList.add("at");
//   setTimeout(function(){
//     value6.classList.remove("at");},300);
// }
