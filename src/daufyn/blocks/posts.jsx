import React from 'react'
import '../fragment/css/divs.css'
import '../fragment/css/post.css'
import '../fragment/css/bank.css'
import Pic from '../fragment/img/PRO/pro (13).jpg'
import Ano1 from '../fragment/img/vid/ano.jpg'
import Ano2 from '../fragment/img/vid/ano2.jpg'
import Ano3 from '../fragment/img/vid/ano3.jpg'
import Ano4 from '../fragment/img/vid/ano4.jpg'
import Ano5 from '../fragment/img/vid/ano5.jpg'
import Ano6 from '../fragment/img/vid/ano6.jpg'
import Player from'./video'
import optprof ,{Closefavorited} from '../fragment/js/optprof'
import btns, {Btnfollow}  from '../fragment/back_btn/btns'
import contents, {Cpost,Clink, Clittlepost, Cpostimg,} from '../fragment/posts/contents'
import svg, {Local, Three, Silence, Unfollow, Block, Flag} from '../fragment/svgs/svg'
import postbtn, {Postbtn} from '../pages/timeline/postbtn'


 
 
function Post(){
     
    return( 
        <>
        <div id="profcontainer" className="wfull pptop bordbtm dflex ">
            <div  className="wauto ppleft">
                <div id="profileimg" >
             <ul className="zz pabso w3-animation-left shadowb border" id="mini_profile">
                <li className="pm border shadow">
                    <div className="w150 hauto dflex ">
                        <div className="w3-cell">
                            <img className="imgprofile" src={Pic}/>   
                        </div>
                        <div className="w3-helf hfull pabso mmtop right0">
                            <Btnfollow/>
                        </div>
                    </div>
                       <p className="elipse h4"><a  className="linkindex" href="#">@Anasatcia.luiciana.carvalho</a></p>
                       <div className="w150  bordbtm bordbtm">
                           <h6>About</h6>
                           <h5 className="limmarg txt">As a first message, I want to thank you wholeheartedly for all the team</h5>
                       </div>
                       <div className="w150 dflex  pm cali ">
                           <div className="w3-half dflex">
                               <h6 className="h6 prel left0 elipsen">2932932938</h6>
                               <h6>Followers⠀</h6>
                           </div>
                           <div className="w3-half dflex">
                               <h6 className="h6 elipsen">2938</h6>
                               <h6>Following</h6>
                           </div>
                       </div>
                </li>
             </ul>
                <img className="imgprofilepost radiu " src={Pic}/>
                </div>
            </div> 
           
            <div className="wfull ">
                <div className="w3-row dflex ">
                    <div className="w3-twothird  w3-container">
                        <div className="wfull infoprof">
                            <h4 id="namepost" className="name wfull elipse txtblack sz14 ">Stefani Britos </h4>

                            {/*<div className=" wfull dflexn ">
                                <div className=" wauto hauto porel"><img className="radiu bordcolor  w02 h02" src={Ano1} /></div>
                                <div className=" wauto hauto left-10 porel"><img className="radiu bordcolor  w02 h02" src={Ano2} /></div>
                                <div className=" wauto hauto left-20 porel"><img className="radiu bordcolor  w02 h02" src={Ano3} /></div>
                                <h5 className="elipsemodd pabso right0 mtop txt500 sz10 maby">follow this</h5>
    </div>*/}
                        </div>
                        <div className="wfull ">
                            <h6 className="maby wfull txtinfo">12:33AM • March 5, 2021⠀</h6>
                        </div>
                    </div>
                    <div className="w3-cell postmore ppright top rali ">
                     <ul id="postmoreul" className="zzz pabso w100 hauto backw dnone shadow bord pm">  
                        <li>
                            <button type="submit" id="toolsilence" name="toolsilence" className="w3-row  out">
                                <div className="w3-cell radiu ">
                                    <Silence/>
                                </div>
                            </button>
                            <div className="w3-rest">
                                <h5 className="sz13 maby">Hush</h5>
                            </div>
                        </li>
                        <li>
                            <button type="submit" id="toolsilence" name="toolsilence" className="w3-row  out">
                                <div className="w3-cell radiu ">
                                    <Unfollow/>
                                </div>
                            </button> 
                            <div className="w3-rest">
                                <h5 className="sz13 maby">Unfollow</h5>
                            </div>
                        </li>
                        <li>
                            <button type="submit" id="toolsilence" name="toolsilence" className="w3-row  out">
                                <div className="w3-cell radiu ">
                                    <Block/>
                                </div>
                            </button>
                            <div className="w3-rest">
                                <h5 className="sz13 maby">Blocked</h5>
                            </div>
                        </li>
                        <li>
                            <button type="submit" id="toolsilence" name="toolsilence" className="w3-row  out">
                                <div className="w3-cell radiu ">
                                    <Flag/>
                                </div>
                            </button>
                            <div className="w3-rest">
                                <h5 className="sz13 maby">Denounce</h5>
                            </div>
                        </li>
                        
                    </ul>
                        <Three/>
                    </div>
                </div>
                <div className="w90">
                     <Cpost /> 
                </div>
                <div className="wfull ">
                    <h5 className=" hfit elipse txtinfo w3-container h01 maby"><Local/>Rua Cloverfield</h5>
                </div>
                <div className="wfull ">
                    <Postbtn/>
                </div>
            </div>
        </div>
        </>
    );
}


 
function LittlePost(){
     
    return( 
        <>
        <div id="profcontainer" className="wfull pptop bordbtm dflex ">
            <div  className="wauto ppleft">
                <div id="profileimg" >
             <ul className="zz pabso w3-animation-left shadowb border" id="mini_profile">
                <li className="pm border shadow">
                    <div className="w150 hauto dflex ">
                        <div className="w3-cell">
                            <img className="imgprofile" src={Pic}/>   
                        </div>
                        <div className="w3-helf hfull pabso mmtop right0">
                            <Btnfollow/>
                        </div>
                    </div>
                       <p className="elipse h4"><a  className="linkindex" href="#">@Anasatcia.luiciana.carvalho</a></p>
                       <div className="w150  bordbtm bordbtm">
                           <h6>About</h6>
                           <h5 className="limmarg txt">As a first message, I want to thank you wholeheartedly for all the team</h5>
                       </div>
                       <div className="w150 dflex  pm cali ">
                           <div className="w3-half dflex">
                               <h6 className="h6 prel left0 elipsen">2932932938</h6>
                               <h6>Followers⠀</h6>
                           </div>
                           <div className="w3-half dflex">
                               <h6 className="h6 elipsen">2938</h6>
                               <h6>Following</h6>
                           </div>
                       </div>
                </li>
             </ul>
                <img className="imgprofilepost radiu " src={Pic}/>
                </div>
            </div> 
           
            <div className="wfull ">
                <div className="w3-row dflex ">
                    <div className="w3-twothird  w3-container">
                        <div className="wfull infoprof">
                            <h4 id="namepost" className="name wfull elipse txtblack hfit sz14 ">Stefani Britos </h4>
                          
                        </div>
                        <div className="wfull ">
                            <h6 className="maby wfull txtinfo">12:33AM • March 5, 2021⠀</h6>
                        </div>
                    </div>
                    <div className="w3-cell postmore ppright top rali ">
                     <ul id="postmoreul" className="zzz pabso w100 hauto backw dnone shadow bord pm">  
                        <li>
                            <button type="submit" id="toolsilence" name="toolsilence" className="w3-row  out">
                                <div className="w3-cell radiu ">
                                    <Silence/>
                                </div>
                            </button>
                            <div className="w3-rest">
                                <h5 className="sz13 maby">Hush</h5>
                            </div>
                        </li>
                        <li>
                            <button type="submit" id="toolsilence" name="toolsilence" className="w3-row  out">
                                <div className="w3-cell radiu ">
                                    <Unfollow/>
                                </div>
                            </button> 
                            <div className="w3-rest">
                                <h5 className="sz13 maby">Unfollow</h5>
                            </div>
                        </li>
                        <li>
                            <button type="submit" id="toolsilence" name="toolsilence" className="w3-row  out">
                                <div className="w3-cell radiu ">
                                    <Block/>
                                </div>
                            </button>
                            <div className="w3-rest">
                                <h5 className="sz13 maby">Blocked</h5>
                            </div>
                        </li>
                        <li>
                            <button type="submit" id="toolsilence" name="toolsilence" className="w3-row  out">
                                <div className="w3-cell radiu ">
                                    <Flag/>
                                </div>
                            </button>
                            <div className="w3-rest">
                                <h5 className="sz13 maby">Denounce</h5>
                            </div>
                        </li>
                        
                    </ul>
                        <Three/>
                    </div>
                </div>
                <div className="w90">
                     <Clittlepost /> 
                </div>
                <div className="wfull ">
                    <h5 className=" hfit elipse txtinfo w3-container h01 maby"><Local/>Rua Cloverfield</h5>
                </div>
                <div className="wfull ">
                    <Postbtn/>
                </div>
            </div>
        </div>
        </>
    );
}



function Postlink(){
     
    return( 
        <>
        <div id="profcontainer" className="wfull pptop bordbtm dflex ">
            <div  className="wauto ppleft">
                <div id="profileimg" >
             <ul className="zz pabso w3-animation-left shadowb border" id="mini_profile">
                <li className="pm border shadow">
                    <div className="w150 hauto dflex ">
                        <div className="w3-cell">
                            <img className="imgprofile" src={Pic}/>   
                        </div>
                        <div className="w3-helf hfull pabso mmtop right0">
                            <Btnfollow/>
                        </div>
                    </div>
                       <p className="elipse h4"><a  className="linkindex" href="#">@Anasatcia.luiciana.carvalho</a></p>
                       <div className="w150  bordbtm bordbtm">
                           <h6>About</h6>
                           <h5 className="limmarg txt">As a first message, I want to thank you wholeheartedly for all the team</h5>
                       </div>
                       <div className="w150 dflex  pm cali ">
                           <div className="w3-half dflex">
                               <h6 className="h6 prel left0 elipsen">2932932938</h6>
                               <h6>Followers⠀</h6>
                           </div>
                           <div className="w3-half dflex">
                               <h6 className="h6 elipsen">2938</h6>
                               <h6>Following</h6>
                           </div>
                       </div>
                </li>
             </ul>
                <img className="imgprofilepost radiu " src={Pic}/>
                </div>
            </div> 
           
            <div className="wfull ">
                <div className="w3-row dflex ">
                    <div className="w3-twothird  w3-container">
                        <div className="wfull infoprof">
                            <h4 id="namepost" className="name wfull elipse txtblack hfit sz14 ">Stefani Britos </h4>
                          
                        </div>
                        <div className="wfull ">
                            <h6 className="maby wfull txtinfo">12:33AM • March 5, 2021⠀</h6>
                        </div>
                    </div>
                    <div className="w3-cell postmore ppright top rali ">
                     <ul id="postmoreul" className="zzz pabso w100 hauto backw dnone shadow bord pm">  
                        <li>
                            <button type="submit" id="toolsilence" name="toolsilence" className="w3-row  out">
                                <div className="w3-cell radiu ">
                                    <Silence/>
                                </div>
                            </button>
                            <div className="w3-rest">
                                <h5 className="sz13 maby">Hush</h5>
                            </div>
                        </li>
                        <li>
                            <button type="submit" id="toolsilence" name="toolsilence" className="w3-row  out">
                                <div className="w3-cell radiu ">
                                    <Unfollow/>
                                </div>
                            </button> 
                            <div className="w3-rest">
                                <h5 className="sz13 maby">Unfollow</h5>
                            </div>
                        </li>
                        <li>
                            <button type="submit" id="toolsilence" name="toolsilence" className="w3-row  out">
                                <div className="w3-cell radiu ">
                                    <Block/>
                                </div>
                            </button>
                            <div className="w3-rest">
                                <h5 className="sz13 maby">Blocked</h5>
                            </div>
                        </li>
                        <li>
                            <button type="submit" id="toolsilence" name="toolsilence" className="w3-row  out">
                                <div className="w3-cell radiu ">
                                    <Flag/>
                                </div>
                            </button>
                            <div className="w3-rest">
                                <h5 className="sz13 maby">Denounce</h5>
                            </div>
                        </li>
                        
                    </ul>
                        <Three/>
                    </div>
                </div>
                <div className="w90">
                     <Clink /> 
                </div>
                <div className="wfull ">
                    <h5 className=" hfit elipse txtinfo w3-container h01 maby"><Local/>Rua Cloverfield</h5>
                </div>
                <div className="wfull ">
                    <Postbtn/>
                </div>
               
            </div>
        </div>
        </>
    );
}




function Postimg(){
     
    return( 
        <> 
        <div className="wfull pptop bordbtm dflex ">
            <div  className="wauto ppleft">
                <div id="profileimg" >
             <ul className="zz pabso w3-animation-left w3-white border shadow" id="mini_profile">
                <li className="pm border shadow">
                    <div className="w150 hauto dflex ">
                        <div className="w3-cell">
                            <img className="imgprofile" src={Pic}/>   
                        </div>
                        <div className="w3-helf hfull pabso mmtop right0">
                            <Btnfollow/>
                        </div>
                    </div>
                       <p className="elipse h4"><a  className="linkindex" href="#">@Anasatcia.luiciana.carvalho</a></p>
                       <div className="w150  bordbtm bordbtm">
                           <h6>About</h6>
                           <h5 className="limmarg txt">As a first message, I want to thank you wholeheartedly for all the team</h5>
                       </div>
                       <div className="w150 dflex  pm cali ">
                           <div className="w3-half dflex">
                               <h6 className="h6 prel left0 elipsen">2932932938</h6>
                               <h6>Followers⠀</h6>
                           </div>
                           <div className="w3-half dflex">
                               <h6 className="h6 elipsen">2938</h6>
                               <h6>Following</h6>
                           </div>
                       </div>
                </li>
             </ul>
                <img className="imgprofilepost radiu " src={Pic}/>
                </div>
            </div>
           
            <div className="wfull ">
                <div className="w3-row dflex ">
                    <div className="w3-twothird  w3-container">
                        <div className="wfull infoprof">
                            <h4 className="name wfull elipse txtblack hfit sz14 ">Stefani Britos </h4>
                         
                        </div>
                        <div className="wfull ">
                            <h6 className="maby wfull txtinfo">12:33AM • March 5, 2021⠀</h6>
                        </div>
                    </div>
                    <div className="w3-cell postmore w3-container top rali ">
                    <ul id="postmoreul" className="zzz pabso w100 hauto backw dnone shadow bord pm"> 
                        <li>
                            <button type="submit" id="toolsilence" name="toolsilence" className="w3-row  out">
                                <div className="w3-cell radiu ">
                                    <Silence/>
                                </div>
                            </button>
                            <div className="w3-rest">
                                <h5 className="sz13 maby">Hush</h5>
                            </div>
                        </li>
                        <li>
                            <button type="submit" id="toolsilence" name="toolsilence" className="w3-row  out">
                                <div className="w3-cell radiu ">
                                    <Unfollow/>
                                </div>
                            </button>
                            <div className="w3-rest">
                                <h5 className="sz13 maby">Unfollow</h5>
                            </div>
                        </li>
                        <li>
                            <button type="submit" id="toolsilence" name="toolsilence" className="w3-row  out">
                                <div className="w3-cell radiu ">
                                    <Block/>
                                </div>
                            </button>
                            <div className="w3-rest">
                                <h5 className="sz13 maby">Blocked</h5>
                            </div>
                        </li>
                        <li>
                            <button type="submit" id="toolsilence" name="toolsilence" className="w3-row  out">
                                <div className="w3-cell radiu ">
                                    <Flag/>
                                </div>
                            </button>
                            <div className="w3-rest">
                                <h5 className="sz13 maby">Denounce</h5>
                            </div>
                        </li>
                        
                    </ul>
                        <Three/>
                    </div>
                </div>
                   <Cpostimg /> 
                <div className="wfull ">
                    <h5 className=" hfit elipse txtinfo w3-container h01 maby"><Local/>Rua Cloverfield</h5>
                 
                </div>
                <div className="wfull ">
                    <Postbtn/>
                </div>
            </div>












        </div>
        </>
    );
}

  
 
function Postvideo(){
     
    return( 
        <>
        <div id="profcontainer" className="wfull pptop bordbtm dflex ">
            <div  className="wauto ppleft">
                <div id="profileimg" >
             <ul className="zz pabso w3-animation-left shadowb border" id="mini_profile">
                <li className="pm border shadow">
                    <div className="w150 hauto dflex ">
                        <div className="w3-cell">
                            <img className="imgprofile" src={Pic}/>   
                        </div>
                        <div className="w3-helf hfull pabso mmtop right0">
                            <Btnfollow/>
                        </div>
                    </div>
                       <p className="elipse h4"><a  className="linkindex" href="#">@Anasatcia.luiciana.carvalho</a></p>
                       <div className="w150  bordbtm bordbtm">
                           <h6>About</h6>
                           <h5 className="limmarg txt">As a first message, I want to thank you wholeheartedly for all the team</h5>
                       </div>
                       <div className="w150 dflex  pm cali ">
                           <div className="w3-half dflex">
                               <h6 className="h6 prel left0 elipsen">2932932938</h6>
                               <h6>Followers⠀</h6>
                           </div> 
                           <div className="w3-half dflex">
                               <h6 className="h6 elipsen">2938</h6>
                               <h6>Following</h6>
                           </div>
                       </div>
                </li>
             </ul>
                <img className="imgprofilepost radiu " src={Pic}/>
                </div>
            </div> 
           
            <div className="wfull ">
                <div className="w3-row dflex ">
                    <div className="w3-twothird  w3-container">
                        <div className="wfull infoprof">
                            <h4 id="namepost" className="name wfull elipse txtblack hfit sz14 ">Stefani Britos </h4>
                         
                        </div>
                        <div className="wfull ">
                            <h6 className="maby wfull txtinfo">12:33AM • March 5, 2021⠀</h6>
                        </div>
                    </div>
                    <div className="w3-cell postmore ppright top rali ">
                    <ul id="postmoreul" className="zzz pabso w100 hauto backw dnone shadow bord pm"> 
                        <li>
                            <button type="submit" id="toolsilence" name="toolsilence" className="w3-row  out">
                                <div className="w3-cell radiu ">
                                    <Silence/>
                                </div>
                            </button>
                            <div className="w3-rest">
                                <h5 className="sz13 maby">Hush</h5>
                            </div>
                        </li>
                        <li>
                            <button type="submit" id="toolsilence" name="toolsilence" className="w3-row  out">
                                <div className="w3-cell radiu ">
                                    <Unfollow/>
                                </div>
                            </button> 
                            <div className="w3-rest">
                                <h5 className="sz13 maby">Unfollow</h5>
                            </div>
                        </li>
                        <li>
                            <button type="submit" id="toolsilence" name="toolsilence" className="w3-row  out">
                                <div className="w3-cell radiu ">
                                    <Block/>
                                </div>
                            </button>
                            <div className="w3-rest">
                                <h5 className="sz13 maby">Blocked</h5>
                            </div>
                        </li>
                        <li>
                            <button type="submit" id="toolsilence" name="toolsilence" className="w3-row  out">
                                <div className="w3-cell radiu ">
                                    <Flag/>
                                </div>
                            </button>
                            <div className="w3-rest">
                                <h5 className="sz13 maby">Denounce</h5>
                            </div>
                        </li>
                        
                    </ul>
                        <Three/>
                    </div>
                </div>
                <div className="w90">
                     
                     <Player/>
                </div>
                <div className="wfull dflex">
                    <h5 className=" w3-helf  elipse txtinfo w3-container h01 maby"><Local/>Rua Cloverfield</h5>
                    <div className="w3-helf dflex  ">

                        <h5 className=" elipsen sz12 txt400">23224</h5>
                        <h5 className="sz12 txt400  ">⠀views</h5>
                 
                    </div>
                </div>
                <div className="wfull ">
                    <Postbtn/>
                </div>
            </div>

        </div>
        </>
    );
}

 

function Postfavirited(){
    
    return( 
        <>
        <div className="wfull pptop bordbtm dflex ">
            <div  className="wauto ppleft">
                <img className="imgprofilepost radiu " src={Pic}/>
              
            </div>
           
            <div className="wfull ">
                <div className="w3-row dflex ">
                    <div className="w3-twothird  w3-container">
                        <div className="wfull infoprof">
                            <h4 className="name wfull txtblack elipse hfit sz14 ">Stefani Britos </h4>
                           
                        </div>
                        <div className="wfull ">
                            <h6 className="maby wfull txtinfo">12:33AM • March 5, 2021⠀</h6>
                        </div>
                    </div>
                    <div className="w3-cell postmore w3-container top rali ">
                        <div onClick={Closefavorited} className="w3-row  fali radiu ppp right maby backwhat"><i class="fas fa-trash"></i></div>    
                    </div>
                </div>
                   <Cpostimg />
                <div className="wfull ">
                    <h5 className=" hfit elipse txtinfo w3-container h01 maby"><Local/>Rua Cloverfield</h5>
                </div>
                <div className="wfull ">
                    <Postbtn/>
                </div>
            </div>

        </div>
        </>
    );
}

export { 
    Post,
    Postimg,
    Postvideo,
    Postfavirited,
    LittlePost,
    Postlink,
};


