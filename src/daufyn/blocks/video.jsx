import React, {useState, useRef, useEffect} from 'react'
import svg, {Playbtn,Vol,Mute} from '../fragment/svgs/svg'



function usePlayState($videoPlayer){
  const[playerState, setPlayerState] = 
  useState({playing: false,percentage: 0,});


  
  useEffect(() =>{
      playerState.playing ? $videoPlayer.current.play() : $videoPlayer.current.pause()
  }, [
      $videoPlayer,
      playerState.playing
  ]);



function tooggleVideoPlay(){
    setPlayerState({
        ...playerState,
        playing: !playerState.playing,
    })
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

var calcCurrentTimeHour, calcCurrentTimeMin, calcCurrentTimeSeg, calcDurationHour, calcDurationMin, calcDurationSeg;

function headleTimeUpdate(){
    const currentPercentage = ($videoPlayer.current.currentTime / $videoPlayer.current.duration )* 100;
  
    calcDurationHour =  Math.floor($videoPlayer.current.duration  / 3600);
    calcDurationMin  = Math.floor($videoPlayer.current.duration  / 60);
    calcDurationSeg = Math.floor(($videoPlayer.current.duration  / 60)%1 * 60);

    calcCurrentTimeHour = Math.floor($videoPlayer.current.currentTime  / 3600);
    calcCurrentTimeMin = Math.floor($videoPlayer.current.currentTime  / 60);
    calcCurrentTimeSeg =  Math.floor(($videoPlayer.current.currentTime / 60)%1 * 60);

    document.getElementById("timevideo").innerHTML = converteTimer(calcCurrentTimeHour, calcCurrentTimeMin, calcCurrentTimeSeg)  + " | " +  converteTimer( calcDurationHour, calcDurationMin, calcDurationSeg);
   
    
   
   
    setPlayerState({
        ...playerState,
        percentage: currentPercentage,
    })
}

function videoMuted() {
    let video = document.getElementById('videomuted').muted;
    if(video == false){
        document.getElementById('videomuted').muted = true;
        document.getElementById('mutesvg').style.display = "block";
    document.getElementById('volsvg').style.display = "none";
    }else{
    document.getElementById('videomuted').muted = false;
    document.getElementById('mutesvg').style.display = "none";
    document.getElementById('volsvg').style.display = "block";
    
    }
}

function handelChangeVideoPercentge(event){
    const currentPercentageValue = event.target.value;
    $videoPlayer.current.currentTime = $videoPlayer.current.duration /100 * currentPercentageValue;
    
    

 

    setPlayerState({
        ...playerState,
        percentage: currentPercentageValue,
    })
}
var fullvideo = document.getElementById("videomuted");
function OpenFullscreen() {
  if (fullvideo.requestFullscreen) {
    fullvideo.requestFullscreen();
  } else if (fullvideo.webkitRequestFullscreen) { /* Safari */
    fullvideo.webkitRequestFullscreen();
  } else if (fullvideo.msRequestFullscreen) { /* IE11 */
    fullvideo.msRequestFullscreen();
  }
}
return{
    $videoPlayer,
    videoMuted,
    playerState, 
    headleTimeUpdate,
    tooggleVideoPlay,
    OpenFullscreen,
    handelChangeVideoPercentge, 
}

}


  const videoa = 'https://www.w3schools.com/html/mov_bbb.ogg';
  const videob = 'https://video.twimg.com/ext_tw_video/1156825835891875842/pu/vid/590x1280/VtyzJw9BhNav9vYS.mp4?tag=10';

 export default function Player(){
     const $videoPlayer = useRef(null);

   const { 
       playerState,
       tooggleVideoPlay,handelChangeVideoPercentge,
       headleTimeUpdate,
       OpenFullscreen,
       videoMuted,
   } = usePlayState($videoPlayer);




    return(
        <>
        <div className=" mmleft wfull hfull">
            <div className="wfull hfull  pabso z">  
                <div className="wfull hfull playbtn" onClick={tooggleVideoPlay}>{playerState.playing ? <i> </i> : <Playbtn/>}</div>
            </div>
            <video muted id="videomuted" className=" wfull hfull mborder  border"ref={$videoPlayer} onTimeUpdate={headleTimeUpdate} src={videoa} />
            <div className=" wfull backgblack txtcolor hauto pabso bottom0  zz pmhorizon">

                <div className="wfull hauto ">
                    <input type="range" className="slider" min="0" max="100" value={playerState.percentage} onChange={handelChangeVideoPercentge} />
                </div>

                <div className=" wfull hauto dflex">
                    <button className="pmhorizon out pm radiu txtcolor backnot " onClick={tooggleVideoPlay}>{playerState.playing ? <i class="fas fa-pause"></i> : <i class="fas fa-play"></i>}</button>
                   
                    <span id="timevideo" className="sz7 txt400 fali dflex wfull txtwhite">00:00 | 00:00</span>
                       <div onClick={videoMuted} className="txtcolor fali wfull  tali dflex right0 porel sz11 txt600  " id="volvideo">

                
                    <div id="mutesvg" className="pabso topn pmhorizon right0 ">
                  
                        <Mute/>
                    </div>
                    <div id="volsvg" className="topn right0 pmhorizon pabso dnone">
                  
                        <Vol/>
                    </div>
                </div>
            
                <div className="pm radiu cursor  " onClick={OpenFullscreen}><i class="fas fa-expand"></i></div>
                      
                </div>
               
            </div> 
        </div>


</>
    );
}

 