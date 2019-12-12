var i=0;
for(i=0;i<document.querySelectorAll("button").length;i++){
document.querySelectorAll("button")[i].addEventListener("click", function handleclick(){
var music = this.innerHTML;
 makesound(music);
 addanimaton(music);
// switch(music){
//   case "w":
//             var crash = new Audio("sounds/crash.mp3");
//             crash.play();
//             break;
//   case "a":
//             var kick = new Audio("sounds/kick-bass.mp3");
//             kick.play();
//             break;
//   case "s":
//             var snare = new Audio("sounds/snare.mp3");
//             snare.play();
//             break;
//   case "d":
//             var tom1 = new Audio("sounds/tom-1.mp3");
//             tom1.play();
//             break;
//   case "j":
//             var tom2 = new Audio("sounds/tom-2.mp3");
//             tom2.play();
//             break;
//   case "k":
//             var tom3 = new Audio("sounds/tom-3.mp3");
//             tom3.play();
//             break;
//   case "l":
//             var tom4 = new Audio("sounds/tom-4.mp3");
//             tom4.play();
//             break;
//
//     default:
//             console.log(this.innerHTML);
//
//
// }
});
}


document.addEventListener("keypress", function(event){
  makesound(event.key);
  addanimaton(event.key);
});
function makesound(key){

  switch(key){
    case "w":
              var crash = new Audio("crash.mp3");
              crash.play();
              break;
    case "a":
              var kick = new Audio("kick-bass.mp3");
              kick.play();
              break;
    case "s":
              var snare = new Audio("snare.mp3");
              snare.play();
              break;
    case "d":
              var tom1 = new Audio("tom-1.mp3");
              tom1.play();
              break;
    case "j":
              var tom2 = new Audio("tom-2.mp3");
              tom2.play();
              break;
    case "k":
              var tom3 = new Audio("tom-3.mp3");
              tom3.play();
              break;
    case "l":
              var tom4 = new Audio("tom-4.mp3");
              tom4.play();
              break;

      default:
              console.log(this.innerHTML);

            }


}


function addanimaton(currentkey){

  var class_an = document.querySelector("."+currentkey);

   class_an.classList.add("pressed");
   setInterval(function(){ class_an.classList.remove("pressed"); }, 500);

}
