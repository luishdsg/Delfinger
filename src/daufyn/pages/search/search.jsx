import React from  'react' 
import '../../fragment/css/divs.css'  
import btns, {Loveb, Hateb, Searchinput } from '../../fragment/back_btn/btns'
import consts, { Searchpopular,Opoptnews, Cloptnews, Searchfollower, Searchpolitical, Searchnba, Searchcinema,Searchmusic, Searchgames, Searchtech} from '../../fragment/js/consts'
import popups, {Headers} from '../../fragment/divs/popups'
import svg, { Three } from '../../fragment/svgs/svg'
function Searchnews(){ 
    return(
        
        <>
       
        <Headers/> 
        <br/>
        <br/>

        <nav className="wfull  hfull">
            <ul id="uloptnews" className="wfull w3-animate-bottom dnone shadowb pmvertical zindex bordtlr hauto left0 pfix bottomn backw">
                <li className="wfull hauto ">
                   <button className="wfull hauto pa cali dflex out backnot">
                        <i class="fas fa-ban">⠀</i>
                        
                        <span className="w3-cell">block this site</span>
                   </button>
                </li>
                <li className="wfull hauto ">
                   <button className="wfull hauto pa cali dflex out backnot">
                        <i class="fas fa-ban">⠀</i>
                        
                        <span className="w3-cell">block this content</span>
                   </button>
                </li>
                <li className="wfull hauto ">
                   <button className="wfull hauto pa cali dflex out backnot">
                        <i class="fas fa-ban">⠀</i>
                        
                        <span className="w3-cell">hide this post</span>
                   </button>
                </li>
                <li className="wfull hauto ">
                   <button className="wfull hauto pa cali dflex out backnot">
                        <i class="fas fa-flag">⠀</i>
                        
                        <span className="w3-cell">denounce</span>
                   </button>
                </li>
                <li onClick={Cloptnews} className="wfull  linetop hauto ">
                   <button className="wfull pa hauto cali dflex out backnot">
                        <span className="wfull tali txt200 cali hauto">close</span>
                   </button>
                </li>
            </ul>
                  <Searchinput/>
            <a name="start" className="w3-row over optsearch dflex">
                <h5 onClick={Searchpopular} id="searchpopulartitle"className="sz20 pa txtpurple h4">Popular</h5>
                <h5 onClick={Searchfollower}  id="searchfollowertitle" className="sz20 pa txtpurple h4">followers</h5>  
                <h5 onClick={Searchpolitical}  id="searchpoliticaltitle" className="sz20 pa txtpurple h4">Political</h5>
                <h5 onClick={Searchnba}  id="searchnbatitle" className="sz20 pa txtpurple h4">NBA</h5>
                <h5 onClick={Searchcinema} id="searchcinematitle" className="sz20 pa txtpurple h4">Cinema</h5>  
                <h5 onClick={Searchmusic} id="searchmusictitle" className="sz20 pa txtpurple h4">Music</h5>  
                <h5 onClick={Searchgames}  id="searchgamestitle" className="sz20 pa txtpurple h4">Games</h5>
                <h5 onClick={Searchtech}  id="searchtechtitle" className="sz20 pa txtpurple h4">Tech</h5>
            </a>
            {/* SEARCH-POPULAR */} 
            <article id="searchpopular" className="wfull  hfull  pm">
                <div className="wfull hauto pm border">
                      <div className="wfull h150 border backimg1 backnotice"></div>
                    <div className="w3-row backw shadow bordeb mtopnn ">
                        
                            
                            
                        <div className="wfull  w3-container limmarg">
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz15 gray txt600 limmarg">
                                    The origins of the world is begin to descovery channel
                                </span>
                            </div>
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz12 maby  ">
                                This Privacy Policy is intended to help you understand what information we collect, why we collect it and how you can update, manage, export and delete that information.
                                </span>
                            </div>
                             <div className="w3-row pavertical cali lali dflex ltxt">
                                <i class="fas fa-link"></i><a href="#pqp" maxlength="55" className="sz12 z linkpost limmarg elipsemodd">open.spotify.com/artist/3vQ</a>
                                <div className="wfull dflex  pabso right0 rrali">
                                    <div className="w3-cell  "><Loveb/></div>
                                        <div onClick={Opoptnews} className=" rali  radiu pahorizon mtop ">
                                            <div className="w3-cell"><Three/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div> 
                <div className="wfull hauto pm border">
                      <div className="wfull h150 border backimg2  backnotice"></div>
                    <div className="w3-row backw  shadow bordblr  mtopnn ">
                        
                            
                            
                        <div className="wfull  w3-container limmarg">
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz15 gray txt600 limmarg">
                                    The origins of the world is begin to descovery channel
                                </span>
                            </div>
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz12 maby  ">
                                This Privacy Policy is intended to help you understand what information we collect, why we collect it and how you can update, manage, export and delete that information.
                                </span>
                            </div>
                            <div className="w3-row pavertical cali lali dflex ltxt">
                                <i class="fas fa-link"></i><a href="#pqp" maxlength="55" className="sz12 z linkpost limmarg elipsemodd">open.spotify.com/artist/3vQ</a>
                                <div className="wfull dflex  pabso right0 rrali">
                                    <div className="w3-cell  "><Loveb/></div>
                                        <div onClick={Opoptnews} className=" rali  radiu pahorizon mtop ">
                                            <div className="w3-cell"><Three/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                       

                        
                    </div>
                </div> 
                <div className="wfull hauto pm border">
                      <div className="wfull h150 border backimg3 backnotice"></div>
                    <div className="w3-row backw  shadow bordblr  mtopnn ">
                        
                            
                            
                             
 
                        <div className="wfull  w3-container limmarg">
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz15 gray txt600 limmarg">
                                    The origins of the world is begin to descovery channel
                                </span>
                            </div>
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz12 maby  ">
                                This Privacy Policy is intended to help you understand what information we collect, why we collect it and how you can update, manage, export and delete that information.
                                </span>
                            </div>
                            <div className="w3-row pavertical cali lali dflex ltxt">
                                <i class="fas fa-link"></i><a href="#pqp" maxlength="55" className="sz12 z linkpost limmarg elipsemodd">open.spotify.com/artist/3vQ</a>
                                <div className="wfull dflex  pabso right0 rrali">
                                    <div className="w3-cell  "><Loveb/></div>
                                        <div onClick={Opoptnews} className=" rali  radiu pahorizon mtop ">
                                            <div className="w3-cell"><Three/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                       

                        
                    </div>
                </div> 
                <div className="wfull hauto pm border">
                      <div className="wfull h150 border backimg4 backnotice"></div>
                    <div className="w3-row backw  shadow bordblr  mtopnn ">
                        
                            
 
                        <div className="wfull  w3-container limmarg">
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz15 gray txt600 limmarg">
                                    The origins of the world is begin to descovery channel
                                </span>
                            </div>
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz12 maby  ">
                                This Privacy Policy is intended to help you understand what information we collect, why we collect it and how you can update, manage, export and delete that information.
                                </span>
                            </div>
                            <div className="w3-row pavertical cali lali dflex ltxt">
                                <i class="fas fa-link"></i><a href="#pqp" maxlength="55" className="sz12 z linkpost limmarg elipsemodd">open.spotify.com/artist/3vQ</a>
                                <div className="wfull dflex  pabso right0 rrali">
                                    <div className="w3-cell  "><Loveb/></div>
                                        <div onClick={Opoptnews} className=" rali  radiu pahorizon mtop ">
                                            <div className="w3-cell"><Three/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                       

                        
                    </div>
                </div> 
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </article> 
            {/* SEARCH-FOLLOWER */}
            <article id="searchfollower" className="wfull  dnone hfull  pm ">
                <div className=" wfull hauto pm border ">
                      <div className="wfull h150 border backimg5 backnotice"></div>
                    <div className="w3-row backw shadow bordblr mtopnn ">
                        
                        <div className="wfull  w3-container limmarg">
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz15 gray txt600 limmarg">
                                    The origins of the world is begin to descovery channel
                                </span>
                            </div>
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz12 maby  ">
                                This Privacy Policy is intended to help you understand what information we collect, why we collect it and how you can update, manage, export and delete that information.
                                </span>
                            </div>
                            <div className="w3-row pavertical cali lali dflex ltxt">
                                <i class="fas fa-link"></i><a href="#pqp" maxlength="55" className="sz12 z linkpost limmarg elipsemodd">open.spotify.com/artist/3vQ</a>
                                <div className="wfull dflex  pabso right0 rrali">
                                    <div className="w3-cell  "><Loveb/></div>
                                        <div onClick={Opoptnews} className=" rali  radiu pahorizon mtop ">
                                            <div className="w3-cell"><Three/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                       

                        
                    </div>
                </div> 
                <div className=" wfull hauto pm border ">
                      <div className="wfull h150 border backimg6 backnotice"></div>
                    <div className="w3-row backw  shadow bordblr  mtopnn ">
                        
                            
                        <div className="wfull  w3-container limmarg">
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz15 gray txt600 limmarg">
                                    The origins of the world is begin to descovery channel
                                </span>
                            </div>
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz12 maby  ">
                                This Privacy Policy is intended to help you understand what information we collect, why we collect it and how you can update, manage, export and delete that information.
                                </span>
                            </div>
                            <div className="w3-row pavertical cali lali dflex ltxt">
                                <i class="fas fa-link"></i><a href="#pqp" maxlength="55" className="sz12 z linkpost limmarg elipsemodd">open.spotify.com/artist/3vQ</a>
                                <div className="wfull dflex  pabso right0 rrali">
                                    <div className="w3-cell  "><Loveb/></div>
                                        <div onClick={Opoptnews} className=" rali  radiu pahorizon mtop ">
                                            <div className="w3-cell"><Three/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                       

                        
                    </div>
                </div> 
                <div className=" wfull hauto pm border ">
                      <div className="wfull h150 border backimg7 backnotice"></div>
                    <div className="w3-row backw  shadow bordblr  mtopnn ">
                        
                            
                            
                        <div className="wfull  w3-container limmarg">
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz15 gray txt600 limmarg">
                                    The origins of the world is begin to descovery channel
                                </span>
                            </div>
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz12 maby  ">
                                This Privacy Policy is intended to help you understand what information we collect, why we collect it and how you can update, manage, export and delete that information.
                                </span>
                            </div>
                            <div className="w3-row pavertical cali lali dflex ltxt">
                                <i class="fas fa-link"></i><a href="#pqp" maxlength="55" className="sz12 z linkpost limmarg elipsemodd">open.spotify.com/artist/3vQ</a>
                                <div className="wfull dflex  pabso right0 rrali">
                                    <div className="w3-cell  "><Loveb/></div>
                                        <div onClick={Opoptnews} className=" rali  radiu pahorizon mtop ">
                                            <div className="w3-cell"><Three/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                       

                        
                    </div>
                </div> 
                <div className=" wfull hauto pm border ">
                      <div className="wfull h150 border backimg8 backnotice"></div>
                    <div className="w3-row backw shadow bordblr  mtopnn ">
                        
                        <div className="wfull  w3-container limmarg">
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz15 gray txt600 limmarg">
                                    The origins of the world is begin to descovery channel
                                </span>
                            </div>
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz12 maby  ">
                                This Privacy Policy is intended to help you understand what information we collect, why we collect it and how you can update, manage, export and delete that information.
                                </span>
                            </div>
                            <div className="w3-row pavertical cali lali dflex ltxt">
                                <i class="fas fa-link"></i><a href="#pqp" maxlength="55" className="sz12 z linkpost limmarg elipsemodd">open.spotify.com/artist/3vQ</a>
                                <div className="wfull dflex  pabso right0 rrali">
                                    <div className="w3-cell  "><Loveb/></div>
                                        <div onClick={Opoptnews} className=" rali  radiu pahorizon mtop ">
                                            <div className="w3-cell"><Three/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                       

                        
                    </div>
                </div> 
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </article>
            {/* SEARCH-POLITIC */}
            <article id="searchpolitical" className="wfull dnone hfull  pm  ">
                <div className=" wfull hauto pm border ">
                      <div className="wfull h150 border backimg9 backnotice"></div>
                    <div className="w3-row backw shadow bordblr mtopnn ">
                        
                            
                            
 
                        <div className="wfull  w3-container limmarg">
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz15 gray txt600 limmarg">
                                    The origins of the world is begin to descovery channel
                                </span>
                            </div>
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz12 maby  ">
                                This Privacy Policy is intended to help you understand what information we collect, why we collect it and how you can update, manage, export and delete that information.
                                </span>
                            </div>
                            <div className="w3-row pavertical cali lali dflex ltxt">
                                <i class="fas fa-link"></i><a href="#pqp" maxlength="55" className="sz12 z linkpost limmarg elipsemodd">open.spotify.com/artist/3vQ</a>
                                <div className="wfull dflex  pabso right0 rrali">
                                    <div className="w3-cell  "><Loveb/></div>
                                        <div onClick={Opoptnews} className=" rali  radiu pahorizon mtop ">
                                            <div className="w3-cell"><Three/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                       

                        
                    </div>
                </div> 
                <div className=" wfull hauto pm border ">
                      <div className="wfull h150 border backimg10 backnotice"></div>
                    <div className="w3-row backw  shadow bordblr  mtopnn ">
                        
 
                        <div className="wfull  w3-container limmarg">
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz15 gray txt600 limmarg">
                                    The origins of the world is begin to descovery channel
                                </span>
                            </div>
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz12 maby  ">
                                This Privacy Policy is intended to help you understand what information we collect, why we collect it and how you can update, manage, export and delete that information.
                                </span>
                            </div>
                            <div className="w3-row pavertical cali lali dflex ltxt">
                                <i class="fas fa-link"></i><a href="#pqp" maxlength="55" className="sz12 z linkpost limmarg elipsemodd">open.spotify.com/artist/3vQ</a>
                                <div className="wfull dflex  pabso right0 rrali">
                                    <div className="w3-cell  "><Loveb/></div>
                                        <div onClick={Opoptnews} className=" rali  radiu pahorizon mtop ">
                                            <div className="w3-cell"><Three/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                       

                        
                    </div>
                </div> 
                <div className=" wfull hauto pm border ">
                      <div className="wfull h150 border backimg11 backnotice"></div>
                    <div className="w3-row backw  shadow bordblr  mtopnn ">
                        
                        <div className="wfull  w3-container limmarg">
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz15 gray txt600 limmarg">
                                    The origins of the world is begin to descovery channel
                                </span>
                            </div>
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz12 maby  ">
                                This Privacy Policy is intended to help you understand what information we collect, why we collect it and how you can update, manage, export and delete that information.
                                </span>
                            </div>
                            <div className="w3-row pavertical cali lali dflex ltxt">
                                <i class="fas fa-link"></i><a href="#pqp" maxlength="55" className="sz12 z linkpost limmarg elipsemodd">open.spotify.com/artist/3vQ</a>
                                <div className="wfull dflex  pabso right0 rrali">
                                    <div className="w3-cell  "><Loveb/></div>
                                        <div onClick={Opoptnews} className=" rali  radiu pahorizon mtop ">
                                            <div className="w3-cell"><Three/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                       

                        
                    </div>
                </div> 
                <div className=" wfull hauto pm border ">
                      <div className="wfull h150 border backimg12 backnotice"></div>
                    <div className="w3-row backw  shadow bordblr  mtopnn ">
                        
                            
                            
                        <div className="wfull  w3-container limmarg">
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz15 gray txt600 limmarg">
                                    The origins of the world is begin to descovery channel
                                </span>
                            </div>
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz12 maby  ">
                                This Privacy Policy is intended to help you understand what information we collect, why we collect it and how you can update, manage, export and delete that information.
                                </span>
                            </div>
                            <div className="w3-row pavertical cali lali dflex ltxt">
                                <i class="fas fa-link"></i><a href="#pqp" maxlength="55" className="sz12 z linkpost limmarg elipsemodd">open.spotify.com/artist/3vQ</a>
                                <div className="wfull dflex  pabso right0 rrali">
                                    <div className="w3-cell  "><Loveb/></div>
                                        <div onClick={Opoptnews} className=" rali  radiu pahorizon mtop ">
                                            <div className="w3-cell"><Three/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                       

                        
                    </div>
                </div> 
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </article>
            {/* SEARCH-NBA */}
            <article id="searchnba" className="wfull  dnone hfull  pm  l">
                <div className=" wfull hauto pm border ">
                      <div className="wfull h150 border backimg14 backnotice"></div>
                    <div className="w3-row backw shadow bordblr mtopnn ">
                        
                            
                        <div className="wfull  w3-container limmarg">
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz15 gray txt600 limmarg">
                                    The origins of the world is begin to descovery channel
                                </span>
                            </div>
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz12 maby  ">
                                This Privacy Policy is intended to help you understand what information we collect, why we collect it and how you can update, manage, export and delete that information.
                                </span>
                            </div>
                            <div className="w3-row pavertical cali lali dflex ltxt">
                                <i class="fas fa-link"></i><a href="#pqp" maxlength="55" className="sz12 z linkpost limmarg elipsemodd">open.spotify.com/artist/3vQ</a>
                                <div className="wfull dflex  pabso right0 rrali">
                                    <div className="w3-cell  "><Loveb/></div>
                                        <div onClick={Opoptnews} className=" rali  radiu pahorizon mtop ">
                                            <div className="w3-cell"><Three/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                       

                        
                    </div>
                </div> 
                <div className=" wfull hauto pm border ">
                      <div className="wfull h150 border backimg15 backnotice"></div>
                    <div className="w3-row backw  shadow bordblr  mtopnn ">
                        
                            
                    
                        <div className="wfull  w3-container limmarg">
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz15 gray txt600 limmarg">
                                    The origins of the world is begin to descovery channel
                                </span>
                            </div>
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz12 maby  ">
                                This Privacy Policy is intended to help you understand what information we collect, why we collect it and how you can update, manage, export and delete that information.
                                </span>
                            </div>
                            <div className="w3-row pavertical cali lali dflex ltxt">
                                <i class="fas fa-link"></i><a href="#pqp" maxlength="55" className="sz12 z linkpost limmarg elipsemodd">open.spotify.com/artist/3vQ</a>
                                <div className="wfull dflex  pabso right0 rrali">
                                    <div className="w3-cell  "><Loveb/></div>
                                        <div onClick={Opoptnews} className=" rali  radiu pahorizon mtop ">
                                            <div className="w3-cell"><Three/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                       

                        
                    </div>
                </div> 
                <div className=" wfull hauto pm border ">
                      <div className="wfull h150 border backimg16 backnotice"></div>
                    <div className="w3-row backw  shadow bordblr  mtopnn ">
                        
                            
                            
 
                        <div className="wfull  w3-container limmarg">
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz15 gray txt600 limmarg">
                                    The origins of the world is begin to descovery channel
                                </span>
                            </div>
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz12 maby  ">
                                This Privacy Policy is intended to help you understand what information we collect, why we collect it and how you can update, manage, export and delete that information.
                                </span>
                            </div>
                            <div className="w3-row pavertical cali lali dflex ltxt">
                                <i class="fas fa-link"></i><a href="#pqp" maxlength="55" className="sz12 z linkpost limmarg elipsemodd">open.spotify.com/artist/3vQ</a>
                                <div className="wfull dflex  pabso right0 rrali">
                                    <div className="w3-cell  "><Loveb/></div>
                                        <div onClick={Opoptnews} className=" rali  radiu pahorizon mtop ">
                                            <div className="w3-cell"><Three/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                       

                        
                    </div>
                </div> 
                <div className=" wfull hauto pm border ">
                      <div className="wfull h150 border backimg17 backnotice"></div>
                    <div className="w3-row backw  shadow bordblr  mtopnn ">
                        
                            
 
                        <div className="wfull  w3-container limmarg">
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz15 gray txt600 limmarg">
                                    The origins of the world is begin to descovery channel
                                </span>
                            </div>
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz12 maby  ">
                                This Privacy Policy is intended to help you understand what information we collect, why we collect it and how you can update, manage, export and delete that information.
                                </span>
                            </div>
                            <div className="w3-row pavertical cali lali dflex ltxt">
                                <i class="fas fa-link"></i><a href="#pqp" maxlength="55" className="sz12 z linkpost limmarg elipsemodd">open.spotify.com/artist/3vQ</a>
                                <div className="wfull dflex  pabso right0 rrali">
                                    <div className="w3-cell  "><Loveb/></div>
                                        <div onClick={Opoptnews} className=" rali  radiu pahorizon mtop ">
                                            <div className="w3-cell"><Three/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                       

                        
                    </div>
                </div> 
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </article>
            {/* SEARCH-CINEMA */}
            <article id="searchcinema" className="wfull  dnone hfull  pm ">
                <div className=" wfull hauto pm border ">
                      <div className="wfull h150 border backimg18 backnotice"></div>
                    <div className="w3-row backw shadow bordblr mtopnn ">
                        
                            
                            
                        <div className="wfull  w3-container limmarg">
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz15 gray txt600 limmarg">
                                    The origins of the world is begin to descovery channel
                                </span>
                            </div>
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz12 maby  ">
                                This Privacy Policy is intended to help you understand what information we collect, why we collect it and how you can update, manage, export and delete that information.
                                </span>
                            </div>
                            <div className="w3-row pavertical cali lali dflex ltxt">
                                <i class="fas fa-link"></i><a href="#pqp" maxlength="55" className="sz12 z linkpost limmarg elipsemodd">open.spotify.com/artist/3vQ</a>
                                <div className="wfull dflex  pabso right0 rrali">
                                    <div className="w3-cell  "><Loveb/></div>
                                        <div onClick={Opoptnews} className=" rali  radiu pahorizon mtop ">
                                            <div className="w3-cell"><Three/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                       

                        
                    </div>
                </div> 
                <div className=" wfull hauto pm border ">
                      <div className="wfull h150 border backimg19 backnotice"></div>
                    <div className="w3-row backw  shadow bordblr  mtopnn ">
                        
                            
                            
 
                        <div className="wfull  w3-container limmarg">
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz15 gray txt600 limmarg">
                                    The origins of the world is begin to descovery channel
                                </span>
                            </div>
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz12 maby  ">
                                This Privacy Policy is intended to help you understand what information we collect, why we collect it and how you can update, manage, export and delete that information.
                                </span>
                            </div>
                            <div className="w3-row pavertical cali lali dflex ltxt">
                                <i class="fas fa-link"></i><a href="#pqp" maxlength="55" className="sz12 z linkpost limmarg elipsemodd">open.spotify.com/artist/3vQ</a>
                                <div className="wfull dflex  pabso right0 rrali">
                                    <div className="w3-cell  "><Loveb/></div>
                                        <div onClick={Opoptnews} className=" rali  radiu pahorizon mtop ">
                                            <div className="w3-cell"><Three/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                       

                        
                    </div>
                </div> 
                <div className=" wfull hauto pm border ">
                      <div className="wfull h150 border backimg20 backnotice"></div>
                    <div className="w3-row backw  shadow bordblr  mtopnn ">
                        
                            
                            
                        <div className="wfull  w3-container limmarg">
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz15 gray txt600 limmarg">
                                    The origins of the world is begin to descovery channel
                                </span>
                            </div>
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz12 maby  ">
                                This Privacy Policy is intended to help you understand what information we collect, why we collect it and how you can update, manage, export and delete that information.
                                </span>
                            </div>
                            <div className="w3-row pavertical cali lali dflex ltxt">
                                <i class="fas fa-link"></i><a href="#pqp" maxlength="55" className="sz12 z linkpost limmarg elipsemodd">open.spotify.com/artist/3vQ</a>
                                <div className="wfull dflex  pabso right0 rrali">
                                    <div className="w3-cell  "><Loveb/></div>
                                        <div onClick={Opoptnews} className=" rali  radiu pahorizon mtop ">
                                            <div className="w3-cell"><Three/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                       

                        
                    </div>
                </div> 
                <div className=" wfull hauto pm border ">
                      <div className="wfull h150 border backimg21 backnotice"></div>
                    <div className="w3-row backw  shadow bordblr  mtopnn ">
                        
                            
                        <div className="wfull  w3-container limmarg">
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz15 gray txt600 limmarg">
                                    The origins of the world is begin to descovery channel
                                </span>
                            </div>
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz12 maby  ">
                                This Privacy Policy is intended to help you understand what information we collect, why we collect it and how you can update, manage, export and delete that information.
                                </span>
                            </div>
                            <div className="w3-row pavertical cali lali dflex ltxt">
                                <i class="fas fa-link"></i><a href="#pqp" maxlength="55" className="sz12 z linkpost limmarg elipsemodd">open.spotify.com/artist/3vQ</a>
                                <div className="wfull dflex  pabso right0 rrali">
                                    <div className="w3-cell  "><Loveb/></div>
                                        <div onClick={Opoptnews} className=" rali  radiu pahorizon mtop ">
                                            <div className="w3-cell"><Three/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                       

                        
                    </div>
                </div> 
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </article>
            {/* SEARCH-MUSIC */}
            <article id="searchmusic" className="wfull   dnone hfull  pm  ">
                <div className=" wfull hauto pm border ">
                      <div className="wfull h150 border backimg21 backnotice"></div>
                    <div className="w3-row backw shadow bordblr mtopnn ">
                        
                            
                        <div className="wfull  w3-container limmarg">
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz15 gray txt600 limmarg">
                                    The origins of the world is begin to descovery channel
                                </span>
                            </div>
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz12 maby  ">
                                This Privacy Policy is intended to help you understand what information we collect, why we collect it and how you can update, manage, export and delete that information.
                                </span>
                            </div>
                            <div className="w3-row pavertical cali lali dflex ltxt">
                                <i class="fas fa-link"></i><a href="#pqp" maxlength="55" className="sz12 z linkpost limmarg elipsemodd">open.spotify.com/artist/3vQ</a>
                                <div className="wfull dflex  pabso right0 rrali">
                                    <div className="w3-cell  "><Loveb/></div>
                                        <div onClick={Opoptnews} className=" rali  radiu pahorizon mtop ">
                                            <div className="w3-cell"><Three/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                       

                        
                    </div>
                </div> 
                <div className=" wfull hauto pm border ">
                      <div className="wfull h150 border backimg22 backnotice"></div>
                    <div className="w3-row backw  shadow bordblr  mtopnn ">
                        
                            
                        <div className="wfull  w3-container limmarg">
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz15 gray txt600 limmarg">
                                    The origins of the world is begin to descovery channel
                                </span>
                            </div>
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz12 maby  ">
                                This Privacy Policy is intended to help you understand what information we collect, why we collect it and how you can update, manage, export and delete that information.
                                </span>
                            </div>
                            <div className="w3-row pavertical cali lali dflex ltxt">
                                <i class="fas fa-link"></i><a href="#pqp" maxlength="55" className="sz12 z linkpost limmarg elipsemodd">open.spotify.com/artist/3vQ</a>
                                <div className="wfull dflex  pabso right0 rrali">
                                    <div className="w3-cell  "><Loveb/></div>
                                        <div onClick={Opoptnews} className=" rali  radiu pahorizon mtop ">
                                            <div className="w3-cell"><Three/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                       

                        
                    </div>
                </div> 
                <div className=" wfull hauto pm border ">
                      <div className="wfull h150 border backimg23 backnotice"></div>
                    <div className="w3-row backw  shadow bordblr  mtopnn ">
                        
                            
 
                        <div className="wfull  w3-container limmarg">
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz15 gray txt600 limmarg">
                                    The origins of the world is begin to descovery channel
                                </span>
                            </div>
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz12 maby  ">
                                This Privacy Policy is intended to help you understand what information we collect, why we collect it and how you can update, manage, export and delete that information.
                                </span>
                            </div>
                            <div className="w3-row pavertical cali lali dflex ltxt">
                                <i class="fas fa-link"></i><a href="#pqp" maxlength="55" className="sz12 z linkpost limmarg elipsemodd">open.spotify.com/artist/3vQ</a>
                                <div className="wfull dflex  pabso right0 rrali">
                                    <div className="w3-cell  "><Loveb/></div>
                                        <div onClick={Opoptnews} className=" rali  radiu pahorizon mtop ">
                                            <div className="w3-cell"><Three/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                       

                        
                    </div>
                </div> 
                <div className=" wfull hauto pm border ">
                      <div className="wfull h150 border backimg24 backnotice"></div>
                    <div className="w3-row backw  shadow bordblr  mtopnn ">
                        
                            
                        <div className="wfull  w3-container limmarg">
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz15 gray txt600 limmarg">
                                    The origins of the world is begin to descovery channel
                                </span>
                            </div>
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz12 maby  ">
                                This Privacy Policy is intended to help you understand what information we collect, why we collect it and how you can update, manage, export and delete that information.
                                </span>
                            </div>
                            <div className="w3-row pavertical cali lali dflex ltxt">
                                <i class="fas fa-link"></i><a href="#pqp" maxlength="55" className="sz12 z linkpost limmarg elipsemodd">open.spotify.com/artist/3vQ</a>
                                <div className="wfull dflex  pabso right0 rrali">
                                    <div className="w3-cell  "><Loveb/></div>
                                        <div onClick={Opoptnews} className=" rali  radiu pahorizon mtop ">
                                            <div className="w3-cell"><Three/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                       

                        
                    </div>
                </div> 
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </article>
            {/* SEARCH-GAMES */}
            <article id="searchgames" className="wfull   dnone hfull  pm  ">
                <div className=" wfull hauto pm border ">
                      <div className="wfull h150 border backimg26 backnotice"></div>
                    <div className="w3-row backw shadow bordblr mtopnn ">
                        
                            
 
                        <div className="wfull  w3-container limmarg">
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz15 gray txt600 limmarg">
                                    The origins of the world is begin to descovery channel
                                </span>
                            </div>
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz12 maby  ">
                                This Privacy Policy is intended to help you understand what information we collect, why we collect it and how you can update, manage, export and delete that information.
                                </span>
                            </div>
                            <div className="w3-row pavertical cali lali dflex ltxt">
                                <i class="fas fa-link"></i><a href="#pqp" maxlength="55" className="sz12 z linkpost limmarg elipsemodd">open.spotify.com/artist/3vQ</a>
                                <div className="wfull dflex  pabso right0 rrali">
                                    <div className="w3-cell  "><Loveb/></div>
                                        <div onClick={Opoptnews} className=" rali  radiu pahorizon mtop ">
                                            <div className="w3-cell"><Three/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                       

                        
                    </div>
                </div> 
                <div className=" wfull hauto pm border ">
                      <div className="wfull h150 border backimg27 backnotice"></div>
                    <div className="w3-row backw  shadow bordblr  mtopnn ">
                        <div className="wfull  w3-container limmarg">
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz15 gray txt600 limmarg">
                                    The origins of the world is begin to descovery channel
                                </span>
                            </div>
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz12 maby  ">
                                This Privacy Policy is intended to help you understand what information we collect, why we collect it and how you can update, manage, export and delete that information.
                                </span>
                            </div>
                            <div className="w3-row pavertical cali lali dflex ltxt">
                                <i class="fas fa-link"></i><a href="#pqp" maxlength="55" className="sz12 z linkpost limmarg elipsemodd">open.spotify.com/artist/3vQ</a>
                                <div className="wfull dflex  pabso right0 rrali">
                                    <div className="w3-cell  "><Loveb/></div>
                                        <div onClick={Opoptnews} className=" rali  radiu pahorizon mtop ">
                                            <div className="w3-cell"><Three/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                       

                        
                    </div>
                </div> 
                <div className=" wfull hauto pm border ">
                      <div className="wfull h150 border backimg28 backnotice"></div>
                    <div className="w3-row backw  shadow bordblr  mtopnn ">
                        
                            
 
                        <div className="wfull  w3-container limmarg">
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz15 gray txt600 limmarg">
                                    The origins of the world is begin to descovery channel
                                </span>
                            </div>
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz12 maby  ">
                                This Privacy Policy is intended to help you understand what information we collect, why we collect it and how you can update, manage, export and delete that information.
                                </span>
                            </div>
                            <div className="w3-row pavertical cali lali dflex ltxt">
                                <i class="fas fa-link"></i><a href="#pqp" maxlength="55" className="sz12 z linkpost limmarg elipsemodd">open.spotify.com/artist/3vQ</a>
                                <div className="wfull dflex  pabso right0 rrali">
                                    <div className="w3-cell  "><Loveb/></div>
                                        <div onClick={Opoptnews} className=" rali  radiu pahorizon mtop ">
                                            <div className="w3-cell"><Three/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                       

                        
                    </div>
                </div> 
                <div className=" wfull hauto pm border ">
                      <div className="wfull h150 border backimg29 backnotice"></div>
                    <div className="w3-row backw  shadow bordblr  mtopnn ">
                        
                            
                            
                             
                        <div className="wfull  w3-container limmarg">
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz15 gray txt600 limmarg">
                                    The origins of the world is begin to descovery channel
                                </span>
                            </div>
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz12 maby  ">
                                This Privacy Policy is intended to help you understand what information we collect, why we collect it and how you can update, manage, export and delete that information.
                                </span>
                            </div>
                            <div className="w3-row pavertical cali lali dflex ltxt">
                                <i class="fas fa-link"></i><a href="#pqp" maxlength="55" className="sz12 z linkpost limmarg elipsemodd">open.spotify.com/artist/3vQ</a>
                                <div className="wfull dflex  pabso right0 rrali">
                                    <div className="w3-cell  "><Loveb/></div>
                                        <div onClick={Opoptnews} className=" rali  radiu pahorizon mtop ">
                                            <div className="w3-cell"><Three/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                       

                        
                    </div>
                </div> 
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </article>
            {/* SEARCH-TECH*/}
            <article id="searchtech" className="wfull  dnone hfull  pm  ">
                <div className=" wfull hauto pm border">
                    <div className="wfull h150 border backimg30 backnotice"></div>
                       <div className="w3-row backw shadow bordblr mtopnn ">
                        
                        <div className="wfull  w3-container limmarg">
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz15 gray txt600 limmarg">
                                    The origins of the world is begin to descovery channel
                                </span>
                            </div>
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz12 maby  ">
                                This Privacy Policy is intended to help you understand what information we collect, why we collect it and how you can update, manage, export and delete that information.
                                </span>
                            </div>
                            <div className="w3-row pavertical cali lali dflex ltxt">
                                <i class="fas fa-link"></i><a href="#pqp" maxlength="55" className="sz12 z linkpost limmarg elipsemodd">open.spotify.com/artist/3vQ</a>
                                <div className="wfull dflex  pabso right0 rrali">
                                    <div className="w3-cell  "><Loveb/></div>
                                        <div onClick={Opoptnews} className=" rali  radiu pahorizon mtop ">
                                            <div className="w3-cell"><Three/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                       

                        
                    </div>
                </div> 
                <div className=" wfull hauto pm border ">
                      <div className="wfull h150 border backimg31 backnotice"></div>
                    <div className="w3-row backw  shadow bordblr  mtopnn ">
                        
                            
                            
                        <div className="wfull  w3-container limmarg">
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz15 gray txt600 limmarg">
                                    The origins of the world is begin to descovery channel
                                </span>
                            </div>
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz12 maby  ">
                                This Privacy Policy is intended to help you understand what information we collect, why we collect it and how you can update, manage, export and delete that information.
                                </span>
                            </div>
                            <div className="w3-row pavertical cali lali dflex ltxt">
                                <i class="fas fa-link"></i><a href="#pqp" maxlength="55" className="sz12 z linkpost limmarg elipsemodd">open.spotify.com/artist/3vQ</a>
                                <div className="wfull dflex  pabso right0 rrali">
                                    <div className="w3-cell  "><Loveb/></div>
                                        <div onClick={Opoptnews} className=" rali  radiu pahorizon mtop ">
                                            <div className="w3-cell"><Three/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                       

                        
                    </div>
                </div> 
                <div className=" wfull hauto pm border ">
                      <div className="wfull h150 border backimg32 backnotice"></div>
                    <div className="w3-row backw  shadow bordblr  mtopnn ">
                        
                            
                            
                        <div className="wfull  w3-container limmarg">
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz15 gray txt600 limmarg">
                                    The origins of the world is begin to descovery channel
                                </span>
                            </div>
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz12 maby  ">
                                This Privacy Policy is intended to help you understand what information we collect, why we collect it and how you can update, manage, export and delete that information.
                                </span>
                            </div>
                            <div className="w3-row pavertical cali lali dflex ltxt">
                                <i class="fas fa-link"></i><a href="#pqp" maxlength="55" className="sz12 z linkpost limmarg elipsemodd">open.spotify.com/artist/3vQ</a>
                                <div className="wfull dflex  pabso right0 rrali">
                                    <div className="w3-cell  "><Loveb/></div>
                                        <div onClick={Opoptnews} className=" rali  radiu pahorizon mtop ">
                                            <div className="w3-cell"><Three/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                       

                        
                    </div>
                </div> 
                <div className=" wfull hauto pm border ">
                      <div className="wfull h150 border backimg33 backnotice"></div>
                    <div className="w3-row backw  shadow bordblr mtopnn ">
                        
                            
                            
                      
                        <div className="wfull  w3-container limmarg">
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz15 gray txt600 limmarg">
                                    The origins of the world is begin to descovery channel
                                </span>
                            </div>
                            <div className="w3-row lali ltxt">
                                <span maxlength="55" className="sz12 maby  ">
                                This Privacy Policy is intended to help you understand what information we collect, why we collect it and how you can update, manage, export and delete that information.
                                </span>
                            </div>
                            <div className="w3-row pavertical cali lali dflex ltxt">
                                <i class="fas fa-link"></i><a href="#pqp" maxlength="55" className="sz12 z linkpost limmarg elipsemodd">open.spotify.com/artist/3vQ</a>
                                <div className="wfull dflex  pabso right0 rrali">
                                    <div className="w3-cell  "><Loveb/></div>
                                        <div onClick={Opoptnews} className=" rali  radiu pahorizon mtop ">
                                            <div className="w3-cell"><Three/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                       

                        
                    </div>
                </div> 
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </article>
           
        </nav>

    
    </>
    );
}


export default Searchnews;