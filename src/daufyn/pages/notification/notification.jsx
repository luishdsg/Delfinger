import React from 'react'
import popups, {Headernot} from '../../fragment/divs/popups'
import Ano1 from './../../fragment/img/vid/ano.jpg'
import Answer from './../../fragment/img/others/ffff.png'
import Answer2 from './../../fragment/img/others/larga.jpg'
import Answer3 from './../../fragment/img/others/alta.jpg'
import Ano11 from './../../fragment/img/vid/ano11.jpg'


import consts, {Ulsetnot,} from '../../fragment/js/consts'
import svg, {Answered, Three, Set, Broom, Comments, Trashs,} from '../../fragment/svgs/svg'
import btns, {Titleup} from '../../fragment/back_btn/btns'
function Notification(){
    return(
        
        <> 
        <Headernot/> 
        <br/>
        <br/>
        <nav className="wfull backw hauto ">
            <div className="w3-row pmvertical dflex pmhorizon">
                <div className="w3-col pleft s10 ">
                    <Titleup name="Recent"/>
                </div>
                <div className="w3-cell w3-containere">
                    <span onClick={Ulsetnot} className="  pmhorizon  pptop radiu">
                        <Three/> 
                    </span>
                    <ul id="ulsetnot" className="w150 dnone backw z mborder pabso right0 border pmvertical">
                        <li className="wfull hauto pm ">      
                            <button className="out dflex backnot wfull">
                                <div className="w3-cell topmore ">
                                    <Set/>
                                </div>
                                <div className="w3-rest pmhorizon ">
                                    <h5 className="wfull hfull ptop lali sz12 maby txt500">notification settings</h5>
                                </div>
                            </button>
                        </li>
                        <li className="wfull hauto pm ">      
                            <button className="out dflex backnot wfull">
                                <div className="w3-cell topmore ">
                                    <Broom/>
                                </div>
                                <div className="w3-rest pmhorizon ">
                                    <h5 className="wfull hfull ptop lali sz12 maby txt500">clear notifications</h5>
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
             
             <article className="wfull hauto "> 
                 {/*THAT COMMENTED ON HIS POST*/}
                 <div className="w3-row timenot   pmhorizon pavertical  bordbtm dflex ">
                     <div className="w3-cell">
                        <img className="radiu bordcolor imgprofilenot" src={Ano1}/>
                        <span className="ppp pabso right0 txtwhite ttttop backcolor radiu">
                        <i class="fas fa-bell"></i>
                        </span> 
                    </div>
                    <div className="w3-half  pleft"> 
                        <div className="wfull ">
                            
                            <h5 className=" sz13 txtblack txt500 elipse">Sabrina sato nogueira santos</h5>
                        </div>
                        <div className="wfull limmarg  hauto">

                            <h5 className="sz12 txt txt500"><Comments/> commented on your post</h5>
                            <h5 className="sz13 gray txt600  maxh100 h ">The Vladmir is not content with sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss  s s s s s s s s sssssssssssssssssssssssssssssssssssssssssssssyour opinion</h5> 
                        </div>
                    </div>
                    <div className="w3-cell ">
                        <div className="hauto z p">
                            <Trashs/>
                        </div>
                    </div>
                 </div>
                 {/*THIS LIKE ITS POST*/}
                 <div className="w3-row timenot  pmhorizon pavertical bordbtm dflex ">
                     <div className="w3-cell">
                        <img className="radiu bordcolor imgprofilenot" src={Ano11}/>
                        <span className="ppp pabso right0 txtwhite ttttop backcolor radiu">
                        <i class="fas fa-bell"></i>
                        </span> 
                    </div>
                    <div className="w3-half  pleft">
                        <div className="wfull hauto">
                            
                            <h5 className=" sz13 txtblack txt500 elipse"> Rafael nogueira</h5>
                        </div>
                        <div className="wfull limmarg  hauto">
                            <h5 className="sz12 txt txt500">♡ like your post</h5>
                            <h5 className="sz13 gray txt600  maxh100 h ">this accident don´t have death</h5> 
                        </div>
                    </div>
                    <div className="w3-cell ">
                        <div className="hauto z p">
                            <Trashs/>
                        </div>
                    </div>
                 </div>
                 {/*THIS ANSWERED YOUR COMMENT*/}
                 <div className="w3-row timenot   pmhorizon pavertical  bordbtm dflex ">
                     <div className="w3-cell">
                        <img className="radiu bordcolor imgprofilenot" src={Ano1}/>
                        <span className="ppp pabso right0 txtwhite ttttop backcolor radiu">
                        <i class="fas fa-bell"></i>
                        </span> 
                    </div>
                    <div className="w3-half  pleft">
                        <div className="wfull ">
                            <input className="out backnot sz13 txtblack txt500 elipse" value="Sabrina sato nogueira santos"/>
                        </div>
                        <div className="wfull limmarg  hauto">
                              
                           <h5 className="sz12 txt txt500"><Answered/> answered your comment</h5>
                              <div className="w100 hauto ">

                                  <img className="wfull hauto bord" src={Answer}/>
                              </div>
                           
                        </div>
                    </div>
                    <div className="w3-cell ">
                        <div className="hauto z p">
                            <Trashs/>
                        </div>
                    </div>
                 </div>
                 {/*THIS LIKE YOUR COMMENT*/}
                 <div className="w3-row timenot  pmhorizon pavertical bordbtm dflex ">
                     <div className="w3-cell">
                        <img className="radiu bordcolor imgprofilenot" src={Ano11}/>
                        <span className="ppp pabso right0 txtwhite ttttop backcolor radiu">
                        <i class="fas fa-bell"></i>
                        </span> 
                    </div>
                    <div className="w3-half  pleft">
                        <div className="wfull ">
                            <input className="out backnot sz13 txtblack txt500 elipse" value="Rafael nogueira"/>
                        </div>
                        <div className="wfull limmarg  hauto">
                            <h5 className="sz12 txt txt500">♡ like your comment</h5>
                            <h5 className="sz13 gray txt600  maxh100 h ">anime is shit because u don´t have a superpower idiot</h5> 
                        </div>
                    </div>
                    <div className="w3-cell ">
                        <div className="hauto z p">
                            <Trashs/>
                        </div>
                    </div>
                 </div>
                 {/*THIS IS FOLLOWING YOU*/}
                 <div className="w3-row timenot   pmhorizon pavertical  bordbtm dflex ">
                     <div className="w3-cell">
                        <img className="radiu bordcolor imgprofilenot" src={Ano1}/>
                        <span className="ppp pabso right0 txtwhite ttttop backcolor radiu">
                        <i class="fas fa-bell"></i>
                        </span> 
                    </div>
                    <div className="w3-half  pleft">
                        <div className="wfull ">
                            <input className="out backnot sz13 txtblack txt500 elipse" value="Sabrina sato nogueira santos"/>
                        </div>
                        <div className="wfull limmarg  hauto">
                           <h5 className="sz12 txt txt500">☛☚ is following you </h5>
                            
                            <h5 className="sz13 gray txt600  maxh100 h ">The Vladmir is not content with your opinion</h5> 
                        </div>
                    </div>
                    <div className="w3-cell ">
                        <div className="hauto z p">
                            <Trashs/>
                        </div>
                    </div>
                 </div>
                 {/*THIS IS COUNTING FOLLOWERS*/}

                 
                 
             </article>
        </nav>


</>
    );
}

export default Notification;