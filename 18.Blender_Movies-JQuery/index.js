//Fetching Video Details 
const videoAPI = "https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0";
const postersAPI = "https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346";
$.getJSON(videoAPI,  function(videoDetails) {
            //==================================== VIDEO CONTENTS ====================================
            //Adding a video element attributes
            $(".videoStream").attr({ "src": videoDetails.videoUrl, "poster": "images/thumbnail.jpeg" });

            //Adding video element to the dom
            $(".videoName").text(videoDetails.title);
            $(".videoDescription").text(videoDetails.description);
            //==================================== End Of VIDEO CONTENTS ====================================  
});

//Fetching Comments Details 
$.getJSON(videoAPI,  function(videos) {
    
    //Creating a Fragment
    $commentsFragment = $(document.createDocumentFragment());
    (videos.comments).forEach((comments)=>{
            //==================================== COMMENTS SECTION ====================================
                $commentsWrapper = $(`<article class="commentsWrapper">`);

                $commentorPic = $(`<div class="commentorPic">`);
                $img = $(`<img src=${comments.image} alt="The Office Employee">`);

                $commentorWrapper = $(`<div class="commentorWrapper">`);

                $commentorName = $(`<div class="commentorName">`);
                $Name = $("<h3>");
                $Name.text(comments.name);

                $comment = $(`<div class="comment">`);
                $p = $("<p>");
                $p.text(comments.comment);

                //Adding elements into their parents
                $commentorPic.append($img);
                $commentorName.append($Name);
                $comment.append($p);
                $commentorWrapper.append($commentorName);
                $commentorWrapper.append($comment);

                $commentsWrapper.append($commentorPic);
                $commentsWrapper.append($commentorWrapper);
                
                // Adding the comment to the Fragment
                $commentsFragment.append($commentsWrapper);

            //==================================== End Of COMMENTS SECTION ====================================      
    });

            // Adding the comments fragment to the dom
            $(".commentsSectionWrapper").append($commentsFragment);
});

//Fetching Poster Details 
$.getJSON(postersAPI,  function(posters) {

    //Creating a Fragment
    $postersFragment = $(document.createDocumentFragment());
    //==================================== POSTER CONTENTS ====================================
    posters.forEach((poster)=>{
        $posterWrapper  = $("<div class=posterWrapper>");
        $image = $(`<img src=${poster.imageUrl} alt=${poster.title}/>`);

        $posterWrapper.append($image);

        // Adding the poster to the Fragment
        $(".secondaryContentWrapper").append($posterWrapper); 
        
    //==================================== End Of POSTER CONTENTS ====================================    
    });

        // Adding the poster fragment to the dom
        $(".secondaryContentWrapper").append($postersFragment); 
}); 


// ---------------------PLAY PAUSE FUNCTIONALITIES FOR VIDEO------------------
$videoStream = $(".videoStream");
$buttonWrapper = $(".playButtonWrapper");
$playButton = $("#play");
$pauseButton = $("#pause");
$pauseButton.css("visibility","hidden");

$buttonWrapper.click(function(e){
    if(e.target==$playButton){
        //PLAY BUTTON CLICKED
        $playButton.attr("display","none");
        $videoStream.controls = true;
        $videoStream.play();
    }
    else{
        //PAUSE BUTTON CLICKED
        $pauseButton.css("visibility", ($pauseButton.attr("visibility")=="hidden") ? "visible" : "hidden");
        $videoStream.controls = ($videoStream.controls==true) ? false: true;
        ($videoStream.paused)? $videoStream.trigger('play') : $videoStream.trigger('play');

    }
});