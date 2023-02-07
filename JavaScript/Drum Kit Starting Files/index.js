
for(var i=0;i<document.querySelectorAll(".set button").length ;i++)
 {
    document.querySelectorAll(".set button")[i].addEventListener("click", function ()
    {
      var key = this.innerHTML;
      makeSound(key);
    }
   )
 };

 document.addEventListener("keypress",function(event){makeSound(event.key)} );
 function makeSound(key){
   annimation(key);
   switch (key) {
      case "w":
         var audio = new Audio('sounds/tom-1.mp3');
         audio.play();
         break;
      case "a":
         var audio = new Audio('sounds/tom-1.mp3');
         audio.play();
         break;
      case "s":
         var audio = new Audio('sounds/tom-2.mp3');
         audio.play();
         break;   
      case "d":
         var audio = new Audio('sounds/tom-3.mp3');
         audio.play();
         break;
      case "w":
         var audio = new Audio('sounds/tom-4.mp3');
         audio.play();
         break;    
      case "j":
         var audio = new Audio('sounds/snare.mp3');
         audio.play();
         break;      
      case "k":
         var audio = new Audio('sounds/crash.mp3');
         audio.play();
         break;   
      case "l":
         var audio = new Audio('sounds/kick-bass.mp3');
         audio.play();
         break; 
      default: console.log("Some other key is pressed");
         break;
     }
 }

 function annimation(key){
   document.querySelector("."+key).classList.add("pressed");
   setTimeout(function(){document.querySelector("."+key).classList.remove("pressed")},100);
 }
