import {videoDetails} from "./assets/video.js";
import {posters} from "./assets/posters.js";

//==================================== VIDEO CONTENTS ====================================
let videoStream = document.querySelector(".videoStream");
let videoName = document.querySelector(".videoName");
let videoDescription = document.querySelector(".videoDescription");

// Creating a video element
videoStream.src = videoDetails.videoUrl;
videoStream.setAttribute("poster","assets/images/thumbnail.jpeg");

//Adding video element to the dom
videoName.innerHTML = videoDetails.title;
videoDescription.innerHTML = videoDetails.description;
//==================================== End Of VIDEO CONTENTS ====================================


//==================================== COMMENTS SECTION ====================================
let commentsFragment = document.createDocumentFragment();
const length = videoDetails.comments.length;
let i=0
// Creating the comments wrapper element
for(;i<length;i++){

    let commentsWrapper = document.createElement("article");
    commentsWrapper.setAttribute("class","commentsWrapper");

    let commentorPic = document.createElement("div");
    commentorPic.setAttribute("class","commentorPic");
    let img = document.createElement("img");
    img.setAttribute("alt",videoDetails.comments[i].name);
    img.setAttribute("src",videoDetails.comments[i].image);

    let commentorWrapper = document.createElement("div");
    commentorWrapper.setAttribute("class","commentorWrapper");

    let commentorName = document.createElement("div");
    commentorName.setAttribute("class","commentorName");
    let name = document.createElement("h3");
    name.innerHTML = videoDetails.comments[i].name;

    let comment = document.createElement("div");
    comment.setAttribute("class","comment");
    let p = document.createElement("p");
    p.innerHTML = videoDetails.comments[i].comment;

    //Adding elements into their parents
    commentorPic.appendChild(img);
    commentorName.appendChild(name);
    comment.appendChild(p);
    commentorWrapper.appendChild(commentorName);
    commentorWrapper.appendChild(comment);

    commentsWrapper.appendChild(commentorPic);
    commentsWrapper.appendChild(commentorWrapper);
    
    commentsFragment.appendChild(commentsWrapper);
}
// Adding the comments fragment to the dom
if(i==length)
    document.querySelector(".commentsSectionWrapper").appendChild(commentsFragment);
//==================================== End Of COMMENTS SECTION ====================================


//==================================== POSTER CONTENTS ====================================
let postersFragment = document.createDocumentFragment();
const postersLength = posters.length;
let j=0;
//Creating poster element
for(;j<postersLength;j++){

    let posterWrapper  = document.createElement("posterWrapper");
    posterWrapper.setAttribute("class","posterWrapper");
    let img = document.createElement("img");
    img.setAttribute("src",posters[j].imageUrl);
    img.setAttribute("alt",posters[j].title);

    posterWrapper.appendChild(img);
    postersFragment.appendChild(posterWrapper);
}
// Adding the poster fragment to the dom
if(j==postersLength)
    document.querySelector(".secondaryContentWrapper").appendChild(postersFragment);
//==================================== End OfPOSTER CONTENTS ====================================


// ---------------------PLAY PAUSE FUNCTIONALITIES FOR VIDEO------------------
let buttonWrapper = document.querySelector(".playButtonWrapper");
let playButton = document.querySelector("#play");
let pauseButton = document.querySelector("#pause");
pauseButton.style.visibility="hidden";

buttonWrapper.addEventListener("click", function(e){
    if(e.target==playButton){
        //PLAY BUTTON CLICKED
        playButton.style.display = "none";
        videoStream.controls = true;
        videoStream.play();
    }
    else{
        //PAUSE BUTTON CLICKED
        pauseButton.style.visibility = (pauseButton.style.visibility=="hidden") ? "visible" : "hidden";
        videoStream.controls = (videoStream.controls==true) ? false: true;
        (videoStream.paused)? videoStream.play() : videoStream.pause();

    }
});
