var playerVideo,  timer, videopreloader;
var btnPlay, full;

var pctSeek, pctBar;
var hour, min, seg, currentHour, currentMin,view, currentSeg;
var intervalTimer;

var barProgress, videoLoader, progress;

function prepare(elem) {
    if (playerVideo != elem) {

        //PLAY_PAUSE
        playerVideo = elem;
        btnPlay = playerVideo.querySelector(".video-play");
        btnPlay.addEventListener("click", play);
        view = playerVideo.querySelector(".video-view");
        //VOL
        btnVol = playerVideo.querySelector(".video-volume");
        btnVol.addEventListener("click", mute);

        //BAR_PREGRESS
        barProgress = playerVideo.querySelector(".video-progress-bar");
        barProgress.addEventListener("click", seeker);
        videoLoader = playerVideo.querySelector(".video-loader");
        progress = playerVideo.querySelector(".video-progress");
        //TIME_VIDEO
        timer = playerVideo.querySelector(".video-time");
        intervalTimer = setInterval(updateTimer, 100);
        //LOADING
        videopreloader = playerVideo.querySelector(".video-preloader");
        view.addEventListener("waiting", loader);
        view.addEventListener("playing", loader);
        //FULL_SCREEN
        full = playerVideo.querySelector(".video-screen");
        full.addEventListener("click", fullScreen);
    }
}

//LOADING
function loader(event) {
    switch (event.type) {
        case 'waiting':
            videopreloader.style.display = "block";
            break;
        case 'playing':
            videopreloader.style.display = "none";
            break;
    }
}
//FULL_SCREEN
function fullScreen() {
    if (!document.webkitFullscreenElement) {
        playerVideo.webkitRequestFullscreen();
    } else {
        document.webkitExitFullscreen();

    }
}
//PLAY_VIDEO
function play() {
    if (view.played.length != 0) {
        if (view.played.start(0) == 0 && !view.paused) {
            view.pause();

        } else {
            view.play();
        }
    } else {
        view.play();
    }

}
//VOL_VIDEO
function mute() {
    if (!view.muted) {
        view.muted = true;
    } else {
        view.muted = false;

    }
}

//TIME_VIDEO / PROGRESS_VIDEO
function seeker() {
    pctBar = (event.clientX / barProgress.clientWidth) * 100;
    view.currentTime = (view.duration * pctBar) / 100;
} 

function updateTimer() {
    bufferedEnd = view.buffered.end(view.buffered.length - 1);
    videoLoader.style.width = String((bufferedEnd / view.duration) * 100) + '%';
    pctSeek = (view.currentTime / view.duration) * 100;
    progress.style.width = String(pctSeek) + '%';




    hour = Math.floor(view.duration / 3600);
    min = Math.floor(view.duration / 60);
    seg = Math.floor(((view.duration / 60) % 1) * 60);

    currentHour = Math.floor(view.currentTime / 3600);
    currentMin = Math.floor(view.currentTime / 60);
    currentSeg = Math.floor(((view.currentTime / 60) % 1) * 60);

    timer.innerHTML = converteTimer(currentHour, currentMin, currentSeg) + " | " + converteTimer(hour, min, seg);
}

function converteTimer(horas, minutos, segundos) {
    if (horas < 10 && horas > 0) {
        horas = '0' + String(horas) + ":";
    } else {
        horas = "";
    }
    if (minutos < 10) {
        minutos = '0' + String(minutos);
    } else if (minutos > 59) {
        minutos = minutos - (Math.floor(minutos / 60) * 60);
    }
    if (segundos < 10) {
        segundos = '0' + String(segundos);
    }
    return String(horas) + String(minutos) + ":" + String(segundos);
}

function ww2(){
    
<div id="video" onmouseover="prepare(this)" class=" player-video ">

<video class="video-view " poster="img/bus.jpg " preloader="none ">
    <source src="video.mp4 " type="video/mp4 ">
 </video>

<div class="video-preloader float-left ">
    <svg width="2.5em" height="2.5em" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<circle cx="50" cy="50" r="43" stroke-width="10" stroke="#ffbb00" stroke-dasharray="67.54424205218055 67.54424205218055" fill="none" stroke-linecap="round">
<animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.588235294117647s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
</circle>
</svg>
</div>
<div class="video-controls ">
    <div class="video-progress-bar ">
        <div class="video-loader "></div>
        <div class="video-progress "></div>
    </div>





    <div class="video-play float-left video-btn ">
        <svg width="2em" height="2em" onClick="playvideo()" id="playvideo" viewBox="0 0 16 16" class="bi bi-play-fill"  fill="#fff " xmlns="http://www.w3.org/2000/svg">
            <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
        </svg>   


        <svg width="2em" height="2em" onClick="pausevideo()" id="pausevideo" style="display: none;" fill="#fff " viewBox="0 0 16 16" class="bi bi-pause-fill" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
        </svg>

    </div>




    <div class="video-volume float-left video-btn ">
    <svg width="1.5em" height="1.5em"  onclick="videovol()" id="videovol" fill="#fff " viewBox="0 0 16 16" class="bi bi-volume-up-fill"  xmlns="http://www.w3.org/2000/svg">
      <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
      <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
      <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707z"/>
      <path fill-rule="evenodd" d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>
    </svg>
    <svg width="1.5em" height="1.5em"   onclick="videomute()" id="videomute" style="display: none;" fill="#fff" viewBox="0 0 16 16" class="bi bi-volume-mute-fill"xmlns="http://www.w3.org/2000/svg">
       <path fill-rule="evenodd" d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .708 0z"/>
       <path fill-rule="evenodd" d="M9.146 5.646a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0z"/>
    </svg>


    </div>
    <div id="video-time" class="video-time float-left ">00:00 | 00:00</div>
    <div class="video-screen float-right video-btn ">
    
    <svg  width="1.5em " height="1.5em "  onclick="fullscreen()" id="fullscreen" fill="#fff" viewBox="0 0 16 16" class="bi bi-fullscreen" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z"/>
</svg>

<svg  width="1.5em " height="1.5em "onclick="fullscreenin()" id="fullscreenin" style="display: none;" version="1.1" fill="#fff" viewBox="0 0 16 16" class="bi bi-fullscreen-exit" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z"/>
</svg>


    </div>
</div>
<div class="clear "></div>



</div>
}