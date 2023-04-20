import React from 'react'
import Img from '../img/others/normal.jpg';
import Img2 from '../img/others/larga.jpg';
import Img3 from '../img/others/alta.jpg';

function Cpostimg(){
    return(
        
        <> 
     
        <div className="pmhorizon" id="localpostimg">
           <img  src={Img}/>
        </div>
        <div className="pmhorizon"  id="localpostimg">
           <img  src={Img2}/>
        </div>
        <div  className="pmhorizon" id="localpostimg">
           <img  src={Img3}/>
        </div>

</>
    );
}


function Cpost(){
   return(
      <div id="contentpost" className="wfull txtblack limmarg  sz18  w3-container ">
          FM Punk you want, ex-DJ in Blitz of show gay
          
FM Punk يريدك ، DJ السابق في عرض مثلي الجنس Blit
FM朋克要你，同性戀節目《閃電戰》的前DJ
FM Punk, Blitz gey şousunun keçmiş DJ-sini istəyir
FM Punk хоча вас, экс-дыджэй на гей-шоў Blitz
FM Punk сізді, Блитц гей-шоуындағы экс-ди-джейді қалайды
FM 펑크가 게이 쇼 Blitz에서 전 DJ를 원합니다.
Το FM Punk σας θέλει, πρώην DJ στο gay show Blitz
FMパンクはあなたを望んでいます、ゲイショーブリッツの元DJ
എഫ്എം പങ്ക് നിങ്ങളെ ആഗ്രഹിക്കുന്നു, ബ്ലിറ്റ്സ് എന്ന ഗേ ഷോയിലെ മുൻ ഡിജെ
FM Punk chce cię, były DJ w gejowskim programie Blitz 
      </div>
  );

}

function Clittlepost(){
   return(
      <div id="contentpost" className="wfull txtblack limmarg  sz18  w3-container ">
          High schooler Yuri where she must survive 
      </div>
  );

}

function Clink(){
   return(
      <div id="contentpost" className="wfull txtblack limmarg  sz18  w3-container ">
         
         <a  className="linkpost" href="http://bits.blogs.nytimes.com/2011/12/08/a-twitter-for-my-sister/">this link has a video</a>
      </div>
  );

}



export {
   Cpostimg,
   Cpost,
   Clink,
   Clittlepost,



}