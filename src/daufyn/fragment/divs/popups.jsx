import React from 'react'
import Profile from './../../fragment/img/PRO/pro (12).jpg'
import { Link } from 'react-router-dom'
import btns, {Back,Titleup} from '../back_btn/btns'
import consts, {Clpublish} from '../js/consts'
import svgs ,{Engenie,Logosvg,} from '../svgs/svg'



function Welcomeback(){
    return(
        <div id="hellouser" className="wview dflex shadowb zzindex hauto pabso pa">
        <div className="w3-half lali pa cali ">
          <h5 className="sz15 maby">Hello,</h5>
          <input value="Stefany britos carvalho sousa melo" className="sz20 gray txt700 out backnot elipse maby"/>
        </div>
        <div className="w3-cell ">
          <img className="imgfollow radiu shadow" src={Profile}/>
        </div>
    </div>
    ); 
}

function Setimg(){
    return(
        <div id="imgsetting" className="w3-call  ppright cali">
        <img className="radiu" id="profheader" src={Profile}/>
        <ul id="rightsettings" className="dnone backw w3-animate-right w150 hauto right0 border shadowb z pabso">
               <li className="wauto border hauto">
                    {/* ACCONTS */}
                    <div className="wfull pm hauto dflex">
                      <Link to="/user" className="w3-cell">
                        <img className="imgprofile" src={Profile}/>
                      </Link>
                      <Link to="/user" className="w3-half cali dflex w3-container">
                        <h5 className="txt out hauto elipsemodd ">Anastacia. luicia.debora.fodasse</h5>
                        <h5 className="w3"></h5>
                      </Link> 
                      <div className="w3-cell pmhorizon ptop">
                        <Engenie/>
                      </div>
                    </div>
                    <hr className="horizon"/>
                </li>
                    
                <li className="wauto hauto">
                    {/* SETTINGS */}
                  <Link to="/settings" className="linkindex" >
                    <div className="w3-row p hovgray  bord dflex">
                      <div className="w3-cell backwhat pm  radiu">
                        <i class="fas fa-cog fa-2x"></i>
                      </div>
                      <div className="w3-half cali pleft">
                        <h5 className="txt  ptop hauto eclipsemod">Settings</h5>
                      </div>
                      <div className="w3-cell pm ">
                        <i class="fas fa-chevron-right"></i>
                      </div>
                    </div>
                  </Link>
                   
                </li>

                <li className="wauto hauto border">
                   {/* HELP */}
                   <Link to="/support"  className="linkindex" >
                      <div className="w3-row p  hovgray bord dflex">
                      <div className="w3-cell  backwhat pm  radiu">
                      <i class="fas fa-life-ring fa-2x"></i>
                      </div>
                      <div className="w3-half cali pleft">
                        <h5 className="txt ptop hauto elipsemod">Support</h5>
    
                      </div>
                      <div className="w3-cell pm ">
                      <i class="fas fa-chevron-right"></i>
                      </div>
                    </div>
                    </Link>
    
                </li>

                <li className="wauto hauto border">
                  
                    {/* THEME */}
                    <div className="w3-row p bord  hovgray  dflex">
                      <div className="w3-cell  backwhat pm  radiu">
                      <i class="fa fa-moon fa-2x"></i>
                      </div>
                      <div className="w3-half cali pleft">
                        <h5 className="txt  ptop hauto elipsemod">Theme</h5>
                      </div>
                                                                                                                                                                                               
                    </div>
                
                </li>

                <li className="wauto hauto border">
                      {/* EXIT */}
                      <Link to="/logout"  className="linkindex" >
                      <div className="w3-row p  bord dflex  hovgray ">
                      <div className="w3-cell  backwhat pm  radiu">
                      <i class="fas fa-door-open fa-2x"></i>
                      </div>
                      <div className="w3-half cali pleft">
                        <h5 className="txt  ptop hauto elipsemod">Exit</h5>
                      </div>
                    </div>
                     </Link>
                </li>
                   






                  
              
              
          
                     
                
               
             </ul>
      </div>
    );
}
function Logo(){
  return(
    <div className="w3-call ppleft cali">
    <div className="px3 wfit hauto bordcolor radiu">
              <a  className="linkindex" href="http://169.254.198.244:3000/"><Logosvg/> </a>
    </div>             


</div>
  );
}

function Datamsn(props){
  const {name} = props
  return(
    <div className="w3-row hauto ccali w3-container ">
         <h5 className="pm sz10 wfit wfit txt500 cali tali w3-white txtcolor radiu shadow ">{name}</h5>
    </div>
  );
}


function Headernot(){
    return (
      <> <header id="headern" className="wfull dflex pfix top0 pmvertical  backw cali zall">
      <Logo/>
     <div className="w3-half pleft clai "> 
     <a  className="linkindex" href="#start">
        <Titleup name="Notification"/>
     </a>
     </div>
   
   <Setimg/>
   </header>
</>
    );
  }

function Headerset(){
    return (
      <> 
<header id="headert" className="wfull dflex pfix top0 pmvertical cali zzz">
   <Logo/> 
  <div className="w3-half pleft clai "> 

     <Titleup name="Settings"/>

  </div>

<Link to="/user" className="w3-call  ppright cali">
        <img className="radiu" id="profheader" src={Profile}/>
</Link>
</header>
        
</>
      
    );
  }

  function Header(){
    return (
      <> 
<header id="headert" className="wfull dflex pfix top0 pmvertical cali zzz">
   <Logo/> 
  <div className="w3-half pleft clai "> 
  <a  className="linkindex" href="#start">
     <Titleup name="Home page"/>
  </a>
  </div>

<Setimg/>
</header>
        
</>
      
    );
  }


  function Headermen(){
    return(
      <header id="headert" className="wfull dflex pfix top0 pmvertical cali zall">
      <Logo/>
     <div className="w3-half pleft clai "> 
     <a  className="linkindex" href="#start">
        <Titleup name="Messages"/>
     </a>
     </div>
   <Setimg/>
   </header>
    );
  }


  
  function Headers(){
    return(
      <header id="headert" className="wfull dflex pfix top0 pmvertical cali zall">
      <Logo/>
     <div className="w3-half pleft clai "> 
     <a  className="linkindex" href="#start">
        <Titleup name="Search"/>
     </a>
     </div>
   <Setimg/>
   </header>
    );
  }




 export{
     Welcomeback,
     Setimg,
     Logo,
     Headernot,
     Header,
     Headerset,
     Headermen,
     Headers,
     Datamsn,
 }