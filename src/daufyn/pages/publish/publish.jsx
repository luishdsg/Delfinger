import React from 'react'
import btns, {Back} from '../../fragment/back_btn/btns'
import svg, {Imgadd, Close, Send, Document, Microfone} from './../../fragment/svgs/svg'
import Imgpub from './../../fragment/img/PRO/pro (14).jpg'
import consts ,{Oppublish,Clpublish, Ulshare, Sharefriends, Sharemyself, Shareeveryone} from'./../../fragment/js/consts'

function Publish(){ 
     
    return(<> 
        <div className="wfit hauto smbottom w3-container right0 pfix zindex bottom0 rali">
            <div id="oppublish" className="dnone wview pfix right0 top0 hfull">

               
                <nav className="wfull top0  z mmmtop hfull ">
                    <div className="w3-row top0 backw border shadow hauto  ">
                        <header  className="wfull dflex z cali ">
                            <div id="headerpub" className="wfull hauto  ">
                                <div onClick={Clpublish} className="w3-cell pm ppleft">
                                    <Back><Close/></Back> 
                                </div>
                            </div>
                        </header>
                    <div className="w3-row dflex mtop pmvertical">                
                        <div className="w3-cell pmhorizon">
                            <img className="imgprofilepost radiu" src={Imgpub}/>
                        </div>
                        <div className=" tali wfull hauto ">
                            <div className="wfull mmtop">
                                <div className=" h02 wfull">
                                    <h2 className=" txt500 pabso left0 elipseflip w100 lali ltxt txtblack  sz13 ">Stefanisssssssssssssssss Manueli Sousa pinheiro costa</h2>
                                </div>
                                <div className="wfull  dflex ">

                                    <div className="w3-helf dflex">
                                        <h5 className=" txt200 txt sz13 ">share</h5>

                                    </div>
                                    
                                    <ul id="ulshare" className="wfull pabso mmmtop  zz dnone hauto backw border mborder pmvertical">

                                        <li onClick={Sharefriends}  className="wfull lali hauto pm">
                                            <h5 className=" txt200  txt sz13 ">with Friends <i class="fas fa-user-friends"></i></h5>
                                        </li>

                                        <li  onClick={Sharemyself}  className="wfull hauto  lali pm">
                                            <h5  className=" txt200 txt sz13 ">with myself <i class="fas fa-user-circle"></i></h5>
                                        </li>
                                    
                                        <li  onClick={Shareeveryone}  className="wfull lali hauto pm">
                                            <h5 className=" txt200 txt sz13 ">with everyone <i class="fas fa-globe"></i></h5>
                                        </li>
                                    </ul>

                                        <div id="sharefriends" className="wfull hauto pleft dnone ">
                                            <h5 className=" txt200  txt sz13 ">with Friends <i class="fas fa-user-friends"></i></h5>
                                        </div >

                                        <div  id="sharemyself" className="wfull hauto  pleft  dnone">
                                            <h5  className=" txt200 txt sz13 ">with myself <i class="fas fa-user-circle"></i></h5>
                                        </div >
                                    
                                        <div  id="shareeveryone" className="wfull  pleft  hauto dflexn">
                                            <h5 className=" txt200 txt sz13 ">with everyone <i class="fas fa-globe"></i></h5>
                                        </div >

                                    <div onClick={Ulshare} className="w3-cell pmhorizon ">
                                        <i class="fas fa-chevron-down"></i>
                                    </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <form method="POST" action="#php" className=" w3-container wfull hauto ">
                        <textarea type="text" className="wfull h120 txtblack sz19 txt500 out lali pmvertical backg3" placeholder="whats up?"></textarea>
                        <div id="divfilepub" className="wfull hauto radiu shadow pmvertical topn">
                            <div className="w3-cell pmhorizon ">
                                 <input type="file" multiple name="multiplefilepub" className="multiplefilepub  zz" accept="video/*,image/*" />
                                 <span className=" pabso  top0 mtop pleft">
                                     <Imgadd/>
                                 </span>
                            </div>
                            <div className="w3-cell pmhorizon ">
                                 <input type="file" multiple name="multiplefilepub" className="multiplefilepub  zz"  accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"/>
                                 <span className=" pabso  top0 mtop pleft">
                                     <Document/>
                                 </span>
                            </div>
                            <div className="w3-cell pmhorizon">
                                 <input type="file" multiple name="multiplefilepub" className="multiplefilepub  zz" accept="video/*,image/*" />
                                 <span className=" pabso  top0 mtop pleft">
                                     <Microfone/>
                                 </span>
                            </div>
                            <div className="w3-cell ppleft">
                                 
                                 <button type="submit" className="out backcolor txtwhite txt500 sz12 right0  radiu pm">Publish</button>
                            </div>
                        </div>
                    </form>
                    </div>
                </nav>
           
                <div className="wfull pabso top0 hfull" id="blurpub"></div>
            </div>

            <button id="publish" onClick={Oppublish} className="wauto cursor shadow hauto backw right0 radiu  out ">
                <Send/>
            </button>
            
{/*PUBLISH DON´T OPENED*/}



        </div>
        
  
        </>






    );
}

export {
    Publish,
}