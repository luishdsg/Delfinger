import React from 'react'
import Pic from '../../fragment/img/PRO/pro (13).jpg'
import svgs, { User, Sad, Lock, Notification, Setting, Logout, Calendar, Locals, Arrowr } from '../../fragment/svgs/svg'
import optprof, { Userp,Suredeleteaccount,Notdeleteaccount, Lockp, Notificationp, Settingp, Logoutp, Genreoff, Genreon, Gen1, Gen2, Gen3,Setlogacrul, Setblockul, Secpassul, Secprivul} from '../../fragment/js/optprof'
import popups, { Headerset } from '../../fragment/divs/popups';
import btns, {Back, Cleaninput} from '../../fragment/back_btn/btns'
import '../../fragment/css/bank.css'
import '../../fragment/css/profile.css'  
import '../../fragment/css/divs.css' 


function Config(){ 
    return(
        
        <>
  <Headerset/>
        <br/>
        
        <br/>
        <div className="w3-row hfull">
            <div id="navbarconfig" className="wfull top0 zall  dflex">
                <div  onClick={Userp} className="w3-col s3 w3-container ssleft pa  ">
 
                    <User/>
                </div>
                <div   onClick={Lockp} className="w3-col s3 w3-container  pa">

                    <Lock/>
                </div>
                <div   onClick={Notificationp} className="w3-col s3 w3-container  pa ">

                    <Notification/>
                </div>
                <div  onClick={Settingp} className="w3-col s3 w3-container  pa">

                 <Setting/>
                </div>
                <div  onClick={Logoutp} className="w3-col s3 w3-container pa">

                    <Logout/>
                </div>
            </div>
                
            <div id="pagesconfig" className="wfull pptop h500 limmarg ">
             
                  <div id="userpage"><Userpage/></div>
                  <div id="heartpage"><Lockpage/></div>
                  <div id="notificationpage"><Notificationpage/></div>
                  <div id="settingpage"><Settingpage/></div>
            </div>
        </div>
    
        </>
      );
}
function Userpage(){
    //CLEAN-INPUTS
 
    // VISUAL-INPUT-NAME 
     window.oninput = function(event){ 
        var campo = event.target.id;
        //NAME-EDIT-INPUT
        if(campo == "editnameedit"){
           document.querySelector('#visualeditname').value = document.querySelector('#editnameedit').value;
        }else if(campo == "visualeditname"){
           document.querySelector('#editnameedit').value = document.querySelector('#visualeditname').value;
        }
        //EDIT-INPUT
        if(campo == "editcatchphraseedit"){
            document.querySelector('#visualeditcatchphrase').value = document.querySelector('#editcatchphraseedit').value;
         }else if(campo == "visualeditcatchphrase"){
            document.querySelector('#editcatchphraseedit').value = document.querySelector('#visualeditcatchphrase').value;
         }
     };
 
   return(
    <>
        <form action="#" method="POST">
            <h2 className="cali tali">Edit Profile</h2>
            <div className="w3-row  w3-container ">
                <div className="w3-rest cali tali">
                    <h5 className="sz12 ptop w3-container maby">organize your notifications by modifying them</h5>
                </div>
            </div>

            <br/>

          
                <div className="w3-row dflex">
                
                <div className="w3-cell w3-container cali tali">
                    <label className="tali cali ">
                        <input type="file" className="pabso pleft "  name="formtxt" id="inputeditedimg"/>
                        <span className="w3-row">
                            <img className="imgeditprofile radiu" src={Pic}/>
                        </span>
                    </label>
                </div>
                <div className="w3-half ">
                    <input type="text" className="wfull lali  elipse txtblack" id="visualeditname"/>
                    <textarea className=" wfull limmarg sz12 lali maby"  name="formtxt" id="visualeditcatchphrase"/>
                </div>
            </div>
            <br/>
            <div id="inlineinfoedit" className="w3-row mborder hauto border">
              <label id="infotitle" className="pabso left h6 sz13  z txt">Basic Information</label>
              <div className="login-box pptop ">
                <span className="stop">
                    <h5 className="txt sz13 lali ltxt top">You con manage the visibly of some information in your account, making it private or public.</h5>
                </span>
                <br/>
                <br/>
                <div className="user-box">
                    <input type="text" name="formtxt" id="editnameedit" required/>
                    <label><i class="far fa-user"></i> Useraname</label> 
                </div> 
                <div className="user-box">
                    <input type="email" name="formtxt"  required />
                    <label><i class="far fa-envelope"></i> Email</label> 
                </div>
                <div className="user-box">
                    <input type="text" id="localizationinput" name="formtxt"  required />
                    <label><i class="fas fa-map-marker-alt"></i> Localization</label> 
                </div>
              </div>
            </div>
            <br/>
            <br/>
            <div id="inlineinfoedit2" className="w3-row mborder hauto border">
                    <label id="infotitle2" className="pabso left h6 sz13  z txt ">Additional Information</label>
                    <div className="login-box pptop ">
                        <div className="user-box lali">
                    <div onClick={Genreoff} className="w3-row leftn bord maby pm"><i class="fas fa-venus-mars"></i> Genre</div>
                    <div className="w3-row lali">
                        <div id="ongenre" onClick={Genreon}  name="formtxt" className="w3-row bord maby pm">

                            <h5 id="generchoice1" className="maby sz13"><i class="fas fa-venus"></i> Woman</h5>
                            <h5 id="generchoice2" className="maby sz13"><i class="fas fa-mars"></i> Men</h5>
                            <h5 id="generchoice3" className="maby sz13"><i class="fas fa-transgender-alt"></i> Transgener</h5>
                            <h5>⠀⠀⠀⠀⠀⠀</h5>
                        </div>
                        <div id="offgenre" onClick={Genreoff} className="w3-row  bord maby pm">⠀⠀⠀⠀⠀⠀⠀</div>
                        <ul id="genreul" className="wfull hauto pmhorizon w3-animate-bottom topn">
                            <br/>
                            <li  className=" dflex wfull cali tali">
                                <input type="radio" id="gen1" onClick={Gen1} name="radio" value="1" className="genreradio porel stop"/>
                                <span id="fempink" className="dflex maby topn- tali cali">⠀<i class="fas fa-venus">⠀</i>Woman</span>
                            </li>
                            <li  className=" dflex wfull cali tali">
                                <input type="radio"  id="gen2" onClick={Gen2}  name="radio" value="2" className="genreradio porel stop"/>
                                <span id="maleblu" className="dflex maby topn- tali cali">⠀<i class="fas fa-mars">⠀</i>Men</span>
                            </li>
                            <li  className="dflex wfull cali tali">
                                <input type="radio"  id="gen3"  onClick={Gen3} name="radio" value="3" className="genreradio porel stop"/>
                                <span id="transmulti" className="dflex maby topn- tali cali">⠀<i class="fas fa-transgender-alt">⠀</i>Transgenre</span>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
                          <br/>
                       
                          <br/>
                        <div className="user-box">
                            <span className="txtcolor pabso topnnn left0">Birth date</span>
                            <div id="selectbirthdate" className="w3-row dflex ">
                                <input type="date"  name="formtxt"  id="dateofbirth"/>
                                <span className="pabso dflex">
                                    <Calendar/>
                                </span>
                            </div>
                        </div>         
                        <div className="user-box ">
                            <h5 id="labeltextarea" className="maby h5 sz14 topnnn pabso left0" >Catchphrase</h5>
                            <textarea  name="formtxt"  maxlength="55" id="editcatchphraseedit" className="maby h05 bord lali wfull"/>
                        </div>
                        <div className="w3-row dflex">
                            <div className="w3-half  ">
                                <input type="submit" value="to save" className="radiu out h3 sz12 w3-pink wfull pmvertical " id="submituser"/>
                            </div>
                            <div className="w3-container"></div>
                            <div className="w3-half  ">
                                 <button type="button" className="radiu out h3 txtblack sz12 bordpink wfull pmvertical backnot" onClick={ Cleaninput}>cancel</button>
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
                <br/> 
                <br/>
                <br/>
                <br/>
                <br/>
                <br/> 
                <br/>
                <br/> 
                <br/> 
        </form>
    </>
    );
     
} 
function Lockpage(){
    return(
        <>
        <div className="w3-row over cali tali">
            <h2>Security</h2>
            <div className="w3-row  w3-container ">
                <div className="w3-rest">
                    <h5 className="sz12 maby">keep your private information safe</h5>
                </div>
                <h5 className="pm sz12  txtwhite w3-pink border"><i class="fas fa-exclamation-triangle"></i> any suspicious activity or that your account is vulnerable change your password</h5>
            </div>
            {/* PRIVACY */}
            <div className="w3-row pptop">
                <div  onClick={Secprivul} className="w3-row  cali">
                  <div className="dflex  pa pahorizon w3-row">
                    <div className="w3-cell  w3-container pm ">
                        <i class="fas fa-user-lock"></i>
                    </div> 
                    <div className="w3-half  lali "> 
                        <h5 className="sz14 topn pptop lali txt">Privacy</h5> 
                    </div>
                    <div className="w3-cell  right0 fali ">       
                            <Back>       
                                <Arrowr/>
                            </Back>
                    </div>
                  </div>
                    <ul id="secprivul" className="w3-row w3-container bord pm mborder hauto  dnone">
                        <li className="w3-row  w3-container dflex  cali">
                            <div className="w3-half pmhorizon dflex">
                                <h5 className="sz14 pmhorizon lali txt">Username</h5>
                            </div>
                            <div id="spanswitch"className="w3-cell dflex  ">
                                <input id="switch" type="checkbox" name="switchusername "className="switch"/>
                            </div>
                        </li>
                        <li className="w3-row  w3-container pptop dflex  cali">
                            <div className="w3-half pmhorizon  ">
                                <h5 className="sz14 pmhorizon lali txt">catchphrase</h5>
                            </div>
                            <div id="spanswitch"className="w3-cell dflexk ">
                                <input id="switch" type="checkbox" name="switchcatchphrase" className="switch"/>
                            </div>
                        </li>
                        <li className="w3-row  w3-container pptop dflex  cali">
                            <div className="w3-half pmhorizon  ">
                                <h5 className="sz14 pmhorizon lali txt">localization</h5>
                            </div>
                            <div id="spanswitch"className="w3-cell dflex  ">
                                <input id="switch" type="checkbox" name="switchlocal" className="switch"/>
                            </div>
                        </li>
                        <li className="w3-row  w3-container pptop dflex  cali">
                            <div className="w3-half pmhorizon  ">
                                <h5 className="sz14 pmhorizon lali txt">accounts following you</h5>
                            </div>
                            <div id="spanswitch"className="w3-cell dflex  ">
                                <input id="switch" type="checkbox" name="switchfollowingyou "className="switch"/>
                            </div>
                        </li>
                        <li className="w3-row  w3-container pptop dflex  cali">
                            <div className="w3-half pmhorizon  ">
                                <h5 className="sz14 pmhorizon lali txt">accounts you follow</h5>
                            </div>
                            <div id="spanswitch"className="w3-cell dflexk ">
                                <input id="switch" type="checkbox" name="switchyoufollow" className="switch"/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            {/* BLOCKED´S */}
            <div className="w3-row ">
                <div  onClick={Secpassul} className="w3-row  cali">
                  <div className="dflex  pa pahorizon w3-row">
                    <div className="w3-cell  w3-container  pm ">
                        <i class="fas fa-fingerprint"></i>
                    </div>
                    <div className="w3-half  lali ">
                        <h5 className="sz14 topn pptop mleft lali txt">Passwords</h5>
                    </div>
                    <div className="w3-cell  right0 fali ">       
                            <Back>       
                                <Arrowr/>
                            </Back>
                    </div>
                  </div>
                    <ul id="secpassul" className="w3-row w3-container bord pm mborder hauto  dnone">
                        <li className="w3-row  w3-container dflex  cali">
                            <div className="login-box pass-box stop ">
                                <div className="user-box">
                                    <input type="password" name="formtxt"  required/>
                                    <label><i class="fa fa-lock-open">⠀</i>Old Passsword</label> 
                                </div> 
                                <div className="user-box">
                                    <input type="password" name="formtxt"  required />
                                    <label><i class="fa fa-lock">⠀</i>New Password</label> 
                                </div>
                                <div className="user-box">
                                    <input type="password" name="formtxt"  required />
                                    <label><i class="fa fa-lock">⠀</i>Confirm New Password</label> 
                                </div> 
                            </div>
                        </li>
                        <li className="w3-row  ">
                        <div className="w3-row dflex">
                            <div className="w3-half  ">
                                <input type="submit" value="to save" className="radiu out h3 sz12 w3-pink wfull pmvertical " id="submituser"/>
                            </div>
                            <div className="w3-container"></div>
                            <div className="w3-half  ">
                                 <button type="button" className="radiu out h3 txtblack sz11 bordpink wfull pmvertical backnot" onClick={ Cleaninput}>cancel</button>
                            </div>
                        </div>
                        </li>
                        
                       
                    </ul>
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
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        </>
    );
 }
 function Notificationpage(){
    return(
        <>
        <div className="w3-row over cali tali">
            <h2>Notfication</h2>
            <div className="w3-row  w3-container ">
                <div className="w3-rest">
                    <h5 className="sz12 ptop w3-container maby">organize your notifications by modifying them</h5>
                </div>
            </div>
            {/* PRIVACY */}
            <div className="w3-row pptop">
                <div  id="secpriv" className="w3-row  cali">
                  <div className="dflex  pa pahorizon w3-row">
                    <div className="w3-cell  w3-container pm ">
                    <i class="fas fa-bell"></i>
                    </div> 
                    <div className="w3-half  lali "> 
                        <h5 className="sz14 topn pptop lali txt">Notification</h5> 
                    </div>
                    <div className="w3-cell  right0 fali ">
                        <i class="fas fa-chevron-down"></i>
                    </div>
                  </div>
                    <ul id="secprivul" className="w3-row bord mborder hauto">
                        <li className="w3-row  pfhorizon   pptop  dflex  cali">
                            <div className="w3-half pmhorizon dflex">
                                <h5 className="sz14 pmhorizon lali txt">Friends message</h5>
                            </div>
                            <div id="spanswitch"className="w3-cell dflex  ">
                                <input id="switch" type="checkbox" name="switchusername "className="switch"/>
                            </div>
                        </li>
                        <li className="w3-row  pfhorizon   pptop   dflex  cali">
                            <div className="w3-half pmhorizon  ">
                                <h5 className="sz14 pmhorizon lali txt">Follow-up request</h5>
                            </div>
                            <div id="spanswitch"className="w3-cell dflexk ">
                                <input id="switch" type="checkbox" name="switchcatchphrase" className="switch"/>
                            </div>
                        </li>
                        <li className="w3-row   pfhorizon   pptop   dflex  cali">
                            <div className="w3-half pmhorizon  ">
                                <h5 className="sz14 pmhorizon lali txt">Likes</h5>
                            </div>
                            <div id="spanswitch"className="w3-cell dflex  ">
                                <input id="switch" type="checkbox" name="switchlocal" className="switch"/>
                            </div>
                        </li>
                        <li className="w3-row  pfhorizon   pptop  dflex  cali">
                            <div className="w3-half pmhorizon  ">
                                <h5 className="sz14 pmhorizon lali txt">Likes in comments</h5>
                            </div>
                            <div id="spanswitch"className="w3-cell dflex  ">
                                <input id="switch" type="checkbox" name="switchfollowingyou "className="switch"/>
                            </div>
                        </li>
                        <li className="w3-row  pfhorizon   pptop dflex  cali">
                            <div className="w3-half pmhorizon ">
                                <h5 className="sz14 pmhorizon lali txt">News emails</h5>
                            </div>
                            <div id="spanswitch"className="w3-cell dflexk ">
                                <input id="switch" type="checkbox" name="switchyoufollow" className="switch"/>
                            </div>
                        </li>
                        <li className="w3-row  pfhorizon   pptop  dflex  cali">
                            <div className="w3-half pmhorizon dflex">
                                <h5 className="sz14 pmhorizon lali txt">Product emails</h5>
                            </div>
                            <div id="spanswitch"className="w3-cell dflex  ">
                                <input id="switch" type="checkbox" name="switchusername "className="switch"/>
                            </div>
                        </li>
                        <li className="w3-row  pfhorizon   pptop   dflex  cali">
                            <div className="w3-half pmhorizon  ">
                                <h5 className="sz14 pmhorizon lali txt">Follower count</h5>
                            </div>
                            <div id="spanswitch"className="w3-cell dflexk ">
                                <input id="switch" type="checkbox" name="switchcatchphrase" className="switch"/>
                            </div>
                        </li>
                        <li className="w3-row   pfhorizon  pbottom pptop   dflex  cali">
                            <div className="w3-half pmhorizon  ">
                                <h5 className="sz14 pmhorizon lali txt">Disable everything</h5>
                            </div>
                            <div id="spanswitch"className="w3-cell dflex  ">
                                <input id="switch" type="checkbox" name="switchlocal" className="switch"/>
                            </div>
                        </li>
                    </ul>
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
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        </>
    ); 
 }
 function Settingpage(){
    return(
        <>
        <div className="w3-row over  cali tali">
            <h2>Settings</h2>
            <div className="w3-row  w3-container ">
                <div className="w3-rest">
                    <h5 className="sz12 ptop w3-container maby">Manage your information, privacy and security so that we meet your needs.</h5>
                </div>
            </div>
            {/* TOOLS*/}
            <div className="w3-row pptop"> 
                 {/* BLOCKS*/}
                <div  onClick={ Setblockul} className="w3-row  cali">
                  <div className="dflex  pa pahorizon w3-row">
                    <div className="w3-cell  w3-container pm ">
                        <i class="fas fa-user-slash"></i>
                    </div>
                    <div className="w3-half  lali "> 
                        <h5 className="sz14 topn pptop lali txt">Blocked</h5> 
                    </div>
                    <div className="w3-cell  right0 fali ">       
                            <Back>       
                                <Arrowr/>
                            </Back>
                    </div>
                  </div>
                    <ul id="setblockul" className="w3-row bord mborder dnone hauto">
                        <li id="setblockli" className="w3-row  pfhorizon pbottom  pptop dflex  cali">
                            <div className="w3-half cali  pmhorizon dflex">
                                <img className="image radiu" src={Pic}/>  
                                <input value="donatelo danielo rogerio 63263" className="sz14 out backnot pmhorizon lali elipse txt"/>
                            </div>
                            <div id="spanswitch" className="w3-cell pm">
                                <i  class="fas fa-lock"></i> 
                            </div>
                        </li>
                        <li id="setblockli" className="w3-row  pfhorizon pbottom  pptop dflex  cali">
                            <div className="w3-half cali  pmhorizon dflex">
                                <img className="image radiu" src={Pic}/>  
                                <input value="donatelo danielo rogerio 63263" className="sz14 out backnot pmhorizon lali elipse txt"/>
                            </div>
                            <div id="spanswitch" className="w3-cell pm">
                                <i  class="fas fa-lock"></i> 
                            </div>
                        </li>
                        <li id="setblockli" className="w3-row  pfhorizon pbottom  pptop dflex  cali">
                            <div className="w3-half cali  pmhorizon dflex">
                                <img className="image radiu" src={Pic}/>  
                                <input value="donatelo danielo rogerio 63263" className="sz14 out backnot pmhorizon lali elipse txt"/>
                            </div>
                            <div id="spanswitch" className="w3-cell pm">
                                <i  class="fas fa-lock"></i> 
                            </div>
                        </li>
                        <li id="setblockli" className="w3-row  pfhorizon pbottom  pptop dflex  cali">
                            <div className="w3-half cali  pmhorizon dflex">
                                <img className="image radiu" src={Pic}/>  
                                <input value="donatelo danielo rogerio 63263" className="sz14 out backnot pmhorizon lali elipse txt"/>
                            </div>
                            <div id="spanswitch" className="w3-cell pm">
                                <i  class="fas fa-lock"></i> 
                            </div>
                        </li>
                        <li id="setblockli" className="w3-row  pfhorizon pbottom  pptop dflex  cali">
                            <div className="w3-half cali  pmhorizon dflex">
                                <img className="image radiu" src={Pic}/>  
                                <input value="donatelo danielo rogerio 63263" className="sz14 out backnot pmhorizon lali elipse txt"/>
                            </div>
                            <div id="spanswitch" className="w3-cell pm">
                                <i  class="fas fa-lock"></i> 
                            </div>
                        </li>
                    </ul>
                </div>
                {/*LOGIN-ACTIVITY*/}
                <div  onClick={Setlogacrul} className="w3-row  cali">
                  <div className="dflex  pa pahorizon w3-row">
                    <div className="w3-cell  w3-container pm ">
                    <i class="fas fa-map-marked-alt"></i>
                    </div> 
                    <div className="w3-half  lali "> 
                        <h5 className="sz14 topn pptop lali txt">Login activity</h5> 
                    </div>
                    <div className="w3-cell  right0 fali ">       
                            <Back>       
                                <Arrowr/>
                            </Back>
                    </div>
                  </div>
                    <ul id="setlogactul" className="w3-row bord  dnone hauto">
                          <h5 className="txt lali pfhorizon sz12">see where you connected</h5>
                        <li id="setlogli" className="w3-row pfhorizon pbottom  pptop dflex  cali">
                            <Locals/>
                            <div className="w3-row ">
                                <div className="w3-row  dflex">  
                                    <h2 className="sz12 txt">Gama ,</h2>
                                    <h2 className="sz12 txt">Distrito Federal ,</h2>
                                    <h2 className="sz12 txt">Brasil</h2>
                                </div>
                                <div className="w3-row  dflex">  
                                    <h2 className="sz12 txt">Offline now</h2>
                                    <h2 className="sz12 txt">• Xiaomi Mi10</h2>
                                </div>
                              </div>
                        </li>
                        <li id="setlogli" className="w3-row pfhorizon pbottom  pptop dflex  cali">
                            <Locals/>
                            <div className="w3-row ">
                                <div className="w3-row  dflex">  
                                    <h2 className="sz12 txt">Brokllyn ,</h2>
                                    <h2 className="sz12 txt">New York ,</h2>
                                    <h2 className="sz12 txt">Usa</h2>
                                </div>
                                <div className="w3-row  dflex">  
                                    <h2 className="sz12 txtcolor">Online now</h2>
                                    <h2 className="sz12 txt">• Iphone X</h2>
                                </div>
                              </div>
                        </li>

                             
                    </ul>
                </div>
                {/* USE DATA */}
                <div className="dflex pa pahorizon w3-row">
                    <div className="w3-cell  w3-container pm ">
                        <i class="fas fa-chart-pie"></i>
                    </div>
                    <div className="w3-half  lali "> 
                        <h5 className="sz14 topn pptop lali txt">Use Data</h5> 
                    </div>
                    <div id="spanswitch"className="w3-cell dflex mtop ">
                        <input id="switch" type="checkbox" name="switchusername "className="switch"/>
                    </div>
                </div>
                {/* SUPPORT */}
                <div className="dflex pa pahorizon w3-row">
                  
                        <div className="w3-cell  w3-container pm ">
                            <i class="fas fa-life-ring"></i>
                        </div>
                        <div className="w3-half  lali "> 
                             <h5 className="sz14 topn pptop lali txt">Support</h5> 
                        </div>
                          <a  className="linkindex" href="#support" className="dflex w3-row" target="_self">
                        <div className="w3-cell  right0 fali ">       
                            <Back>       
                                <Arrowr/>
                            </Back>
                        </div>
                    </a>
                </div>
                {/*DESTROY ACCOUNT*/}
                <div onClick={Suredeleteaccount} className="dflex  pa pahorizon w3-row">
                    <div className="w3-cell  w3-container pm ">
                        <i class="fas fa-skull"></i>
                    </div>
                    <div className="w3-half  lali "> 
                        <h5 className="sz14 topn pptop lali txt">Destroy account</h5> 
                    </div>
                    <div className="w3-cell  right0 fali ">       
                            <Back>       
                                <Arrowr/>
                            </Back>
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
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        </>
       );
 }
function Set(){
   return(
       <>
       <div  id="suredeleteaccount" className="wview  dnone top0 hfull pfix zall blackqq">
              <div  className="w80  hauto pm pavertical bord pfix zall top20 blackqq left20 ">
                  <div className="w3-row dflex ">
                      
                      <h5  className="txtwhite sz12 pptop lali">are you sure you want to delete your account?...you can <a  className="linkindex" href="#" target="_blank">retrieve it</a> whenever you want.</h5>
                      <div className="w3-cell ">
                           <Sad/>
                      </div>
                     
                  </div>
                  <form action="#" method="POST" className="w3-row dflex">
                           <div className="w3-half">
                                <button type="submit" className="radiu out h3 sz12 w3-pink wfull pmvertical">yes delete</button>
                            </div> 
                            <div className="pmhorizon"></div>
                            <div className="w3-half  ">
                                <button onClick={Notdeleteaccount} type="button" className="radiu out h3 txtwhite sz12 bordpink wfull pmvertical backnot">cancel</button>
                            </div>
                    </form>
              </div>
       </div>  
       <div  id="nothing" className="">
              <Config/>
          </div>
         
       </>
       );
     
}



export default Set;
