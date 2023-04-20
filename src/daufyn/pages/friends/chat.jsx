import React from 'react'
import btns, {Back} from '../../fragment/back_btn/btns'
import svgs, { Arrowl , Imgadd, Submit} from '../../fragment/svgs/svg'
import conts, {Opsetchat} from '../../fragment/js/consts'
import popups, {Datamsn} from '../../fragment/divs/popups'
import Imgset from './../../fragment/img/PRO/pro (14).jpg'


function Chat(){
   
      
    return(
        
        <body >
        
        <header id="headerc" className="wfull w3-container pmvertical pfix top0 zall backw dflex ">
            <a href="javascript: history.go(-1)" className="w3-cell">
                <Back><Arrowl/></Back>
            </a>
            <div className="w3-half tali  ">
                <h5 className="sz14 txtblue mtop elipse txt500">Stefani Britos Carvalho</h5>
            </div>

            <div className="w3-cell">
                <img   onClick={Opsetchat} className="radiu shadoww imgset" src={Imgset}/>
                <ul id="imgsetul" className="w120 pabso dnone right0 hauto border backw shadow pm">

                    <li className="wfull hauto   border pa  ">
                        <button className="w3-row sz12 txt500 txt out backnot  ">
                            Delete messages
                        </button>
                    </li>
                    <li className="wfull hauto   border pa  ">
                        <button className="w3-row sz12 txt500 txt out backnot  ">
                            Delete contact
                        </button>
                    </li>
                    <li className="wfull hauto   border pa  ">
                        <button className="w3-row sz12 txt500 txt out backnot  ">
                            Invite to group
                        </button>
                    </li>
                    <li className="wfull hauto   border pa  ">
                        <button className="w3-row sz12 txt500 txt out backnot  ">
                            Change background
                        </button>
                    </li>
                    <li className="wfull hauto  border pa ">
                        <button className="w3-row sz12 txt500 txt out backnot  ">
                            Report
                        </button>
                    </li>
                </ul>

            </div>
        </header>
            <br/>
            <br/>
            <nav className="wfull hauto ">
                <article className="wfull backchat pmhorizon hfull">
                    <div className="wfull  pmvertical hauto dflex ">
                        <div className="w3-cell">
                            <img className="imgset radiu shadoww" src={Imgset}/>
                        </div>
                        <div className="w90 pmhorizon limmarg hauto">
                            <h5 className="pm wfit sz13 txt500 bordtxt lali txtblue backnut limmarg">Hey bro,  dsfewif ewf ewfuieg fuiew fiuweif weifuweh ifu we fhiueuf ewui fiewhfuiewif whieufiewuifiewfhiewhfwefuhwieufhuewfhiwehfuiewhufweifhiwehfewufiwehfuiewfew fuwieh fiewh wfWhat´s up?</h5>
                            <h5 className="left0 txt txt400 sz10">14:10pm</h5>
                        </div>
                    </div>
                    <div className="wfull pmvertical hauto rrali dflex ">
                        <div className="w90 pmhorizon limmarg hauto">
                            <h5 className="pm wfit sz13 txt500 bordtxtr lali txtwhite fright backcolor limmarg">Im Ok and efewuhf ewe gufwg fu wuf yuewgfwef uef yuw fuyw eufgweyf gwefu wgeyfg uywgfgfyewgfgwegfuywgfyuewgfwegfguwegfwuegfyuwgeuf wue f FYUEWGF u?</h5>
                            <h5 className="rali txt txt400 topnn pabso right0 pright sz10">14:10pm</h5>
                        </div>
                    </div>
                    <div className="wfull  pmvertical hauto dflex ">
                        <div className="w3-cell">
                            <img className="imgset radiu shadoww" src={Imgset}/>
                        </div>
                        <div className="w90 pmhorizon limmarg hauto">
                            <h5 className="pm wfit sz13 txt500 bordtxt lali txtblue backnut limmarg">Hey bro, What´s up?</h5>
                            <h5 className="left0 txt txt400 sz10">14:10pm</h5>
                        </div>
                    </div>

                    <Datamsn name="tusday"/>
                    <div className="wfull pmvertical hauto rrali dflex ">
                        <div className="w90 pmhorizon limmarg hauto">
                            <h5 className="pm wfit sz13 txt500 bordtxtr lali txtwhite fright backcolor limmarg">Im Ok and u?</h5>
                            <h5 className="rali txt txt400 topnn pabso right0 pright sz10">14:10pm</h5>
                        </div>
                    </div>
                    <div className="wfull  pmvertical hauto dflex ">
                        <div className="w3-cell">
                            <img className="imgset radiu shadoww" src={Imgset}/>
                        </div>
                        <div className="w90 pmhorizon limmarg hauto">
                            <h5 className="pm wfit sz13 txt500 bordtxt lali txtblue backnut limmarg">Hey bro, What´s up?</h5>
                            <h5 className="left0 txt txt400 sz10">14:10pm</h5>
                        </div>
                    </div>
                    <div className="wfull  pmvertical hauto dflex ">
                        <div className="w3-cell">
                            <img className="imgset radiu shadoww" src={Imgset}/>
                        </div>
                        <div className="w90 pmhorizon limmarg hauto">
                            <h5 className="pm wfit sz13 txt500 bordtxt lali txtblue backnut limmarg">Hey bro,  dsfewif ewf ewfuieg fuiew fiuweif weifuweh ifu we fhiueuf ewui fiewhfuiewif whieufiewuifiewfhiewhfwefuhwieufhuewfhiwehfuiewhufweifhiwehfewufiwehfuiewfew fuwieh fiewh wfWhat´s up?</h5>
                            <h5 className="left0 txt txt400 sz10">14:10pm</h5>
                        </div>
                    </div>
                    <div className="wfull pmvertical hauto rrali dflex ">
                        <div className="w90 pmhorizon limmarg hauto">
                            <h5 className="pm wfit sz13 txt500 bordtxtr lali txtwhite fright backcolor limmarg">Im Ok and efewuhf ewe gufwg fu wuf yuewgfwef uef yuw fuyw eufgweyf gwefu wgeyfg uywgfgfyewgfgwegfuywgfyuewgfwegfguwegfwuegfyuwgeuf wue f FYUEWGF u?</h5>
                            <h5 className="rali txt txt400 topnn pabso right0 pright sz10">14:10pm</h5>
                        </div>
                    </div>
                    <div className="wfull  pmvertical hauto dflex ">
                        <div className="w3-cell">
                            <img className="imgset radiu shadoww" src={Imgset}/>
                        </div>
                        <div className="w90 pmhorizon limmarg hauto">
                            <h5 className="pm wfit sz13 txt500 bordtxt lali txtblue backnut limmarg">Hey bro,  dsfewif ewf ewfuieg fuiew fiuweif weifuweh ifu we fhiueuf ewui fiewhfuiewif whieufiewuifiewfhiewhfwefuhwieufhuewfhiwehfuiewhufweifhiwehfewufiwehfuiewfew fuwieh fiewh wfWhat´s up?</h5>
                            <h5 className="left0 txt txt400 sz10">14:10pm</h5>
                        </div>
                    </div>
                    <div className="wfull pmvertical hauto rrali dflex ">
                        <div className="w90 pmhorizon limmarg hauto">
                            <h5 className="pm wfit sz13 txt500 bordtxtr lali txtwhite fright backcolor limmarg">Im Ok and efewuhf ewe gufwg fu wuf yuewgfwef uef yuw fuyw eufgweyf gwefu wgeyfg uywgfgfyewgfgwegfuywgfyuewgfwegfguwegfwuegfyuwgeuf wue f FYUEWGF u?</h5>
                            <h5 className="rali txt txt400 topnn pabso right0 pright sz10">14:10pm</h5>
                        </div>
                    </div>
                    <div className="wfull pmvertical hauto rrali dflex ">
                        <div className="w90 pmhorizon limmarg hauto">
                            <h5 className="pm wfit sz13 txt500 bordtxtr lali txtwhite fright backcolor limmarg">Im Ok and u?</h5>
                            <h5 className="rali txt txt400 topnn pabso right0 pright sz10">14:10pm</h5>
                        </div>
                    </div>
                    <div className="wfull  pmvertical hauto dflex ">
                        <div className="w3-cell">
                            <img className="imgset radiu shadoww" src={Imgset}/>
                        </div>
                        <div className="w90 pmhorizon limmarg hauto">
                            <h5 className="pm wfit sz13 txt500 bordtxt lali txtblue backnut limmarg">Hey bro, What´s up?</h5>
                            <h5 className="left0 txt txt400 sz10">14:10pm</h5>
                        </div>
                    </div>
                    <div className="wfull pmvertical hauto rrali dflex ">
                        <div className="w90 pmhorizon limmarg hauto">
                            <h5 className="pm wfit sz13 txt500 bordtxtr lali txtwhite fright backcolor limmarg">Im Ok and u?</h5>
                            <h5 className="rali txt txt400 topnn pabso right0 pright sz10">14:10pm</h5>
                        </div>
                    </div>
                    <div className="wfull  pmvertical hauto dflex ">
                        <div className="w3-cell">
                            <img className="imgset radiu shadoww" src={Imgset}/>
                        </div>
                        <div className="w90 pmhorizon limmarg hauto">
                            <h5 className="pm wfit sz13 txt500 bordtxt lali txtblue backnut limmarg">Hey bro, What´s up?</h5>
                            <h5 className="left0 txt txt400 sz10">14:10pm</h5>
                        </div>
                    </div>
                    <div className="wfull pmvertical hauto rrali dflex ">
                        <div className="w90 pmhorizon limmarg hauto">
                            <h5 className="pm wfit sz13 txt500 bordtxtr lali txtwhite fright backcolor limmarg">Im Ok and u?</h5>
                            <h5 className="rali txt txt400 topnn pabso right0 pright sz10">14:10pm</h5>
                        </div>
                    </div>
                    <div className="wfull pmvertical hauto rrali dflex ">
                        <div className="w90 pmhorizon limmarg hauto">
                            <img className="pm wfit sz13 txt500 bordtxtr imgsend lali txtwhite fright backcolor limmarg"/>
                            <h5 className="rali txt txt400 topnn pabso right0 pright sz10">14:10pm</h5>
                        </div>
                    </div>
                </article>
              <footer className="wfull w3-container backw dflex pfix bottom0 pm ">

                    <input type="text" name="sendmsn" className="sendmsn out w80 hauto sz14 txt400 txtblack " placeholder="type here"/>
                    
                    <div className="divmultiplefile  dflex">
                        <input type="submit" name="send" className="out radiu send" />
                        <label>
                            <Submit/>
                        </label>
                        <input type="file" multiple name="multiplefile" className="multiplefile  z" accept="audio/*,video/*,image/*" />
                        <span>
                            <Imgadd/>                        
                        </span>
                    </div>


                </footer>
            </nav>

</body>
    );
}

export default Chat;