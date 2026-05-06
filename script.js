const playBothBtn2 = document.querySelector('#play-both-button'); 
//we use const instead of let simply because the button wont change, it will always be this button, however, let will work the same way 
let videoOne = document.querySelector("#video-one");
let audioOne = document.querySelector("#audio-one");
//we also save the video and audio into variables here so that we can affect them later

playBothBtn2.addEventListener("click",function(){
  console.log("both button has been clicked ( ^ _ ^ )");
  videoOne.play();
  audioTwo.play();


  //play your audio here with the .play() method
});

 
//After the button is tested and confirmed to work, copy the above pattern below for another video tag, audio tag and button tag, change the variables so that they look like audioOne, audioTwo, videoOne, videoTwo
