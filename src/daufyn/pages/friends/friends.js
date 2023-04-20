import React from 'react'
import Imgmsn1 from './../../fragment/img/PRO/p.jpg'
import Imgmsn2 from './../../fragment/img/PRO/po.jpg'
import Imgmsn3 from './../../fragment/img/PRO/pro (13).jpg'
import Imgmsn4 from './../../fragment/img/PRO/pro (21).jpg'

import {Link} from 'react-router-dom'
import svgs, {Star} from '../../fragment/svgs/svg'
import popups, { Setimg, Logo, Headermen}  from '../../fragment/divs/popups'
import btns, {Titleup, Searchinput} from '../../fragment/back_btn/btns'
import consts, {Friendsoptall,Friendsoptfavorites,Friendsoptarchived,
} from '../../fragment/js/consts'
import '../../fragment/css/post.css'

function Beautifulname(props){
    const {name} = props
    return <h5 className="sz16 txtblack pmhorizon txt600 ">{name}</h5>
}

function Friends(){
    return(
        <>

<Headermen/>
<br/>
<br/>
<nav className="w3-row ">
    <Searchinput/>
    <div className="wfull bordbtm  ">
        <div className="w3-row dflex">
            <div onClick={Friendsoptall} className="pm tali" id="friendsoptall">
                <Beautifulname name="All"/>
            </div>
            <div onClick={Friendsoptfavorites} className=" pm tali" id="friendsoptfavorites">
                <Beautifulname name="Favorite"/>
            </div>
            <div onClick={Friendsoptarchived} className=" tali pm" id="friendsoptarchived">
                <Beautifulname name="Archived"/>
            </div>
         
        </div>
    </div>

<br/>
    <article className="w3-row ">
        <div className="w3-row mbottom pbottom bordbtm ">
            <div className="w3-row dflex">
                <div className="w3-cell  popupmsn pmhorizon">
                    <label className="dflex">
                        <img className="bordcolor radiu imgprofilenot " src={Imgmsn1}/>
                        <span className="pfix pabso right0 topn">
                            <div className="radiu pmhorizon mborder backcolor">
                                <h6 className="sz13 txt500 txtwhite">121</h6>
                            </div>
                        </span>
                    </label>
                </div>
            
                 
                <div className="w3-half ">
                    <div className="w3-row dflex">
                       <h5 className="elipse sz13 gray txt700"> Silvana fransisca coletadora santas </h5>
                        <div className="w3-cell right0 dflex cali tali">
                            <input type="checkbox" className="say pabso backnot" name="say"/>
                            
                            <span className="w3-cell">
                                <Star/>
                            </span>
                            <h5 className="sz11 txt txt500">⠀2:23 am</h5>
                        </div>
                    </div>
                    <Link to="/chat" className="w3-row limmarg dlex ">
                        <h5 className="sz13 txt txt500">eae seu pedido já foi entregue e ainda falta lançar as outtras patentes pra alcançar o objetivo</h5>
                    </Link>
                </div>
            </div>
        </div>
        <div className="w3-row mbottom pbottom bordbtm ">
            <div className="w3-row dflex">
                <div className="w3-cell  popupmsn pmhorizon">
                    <label className="dflex">
                        <img className="bordcolor radiu imgprofilenot " src={Imgmsn2}/>
                        <span className="pfix pabso right0 topn">
                            <div className="radiu pmhorizon mborder backcolor">
                                <h6 className="sz13 txt500 txtwhite">11</h6>
                            </div>
                        </span>
                    </label>
                </div>
            
                 
                <div className="w3-half ">
                    <div className="w3-row dflex">
                       <h5 className="elipse sz13 gray txt700">  Sabrina sato sinta⠀</h5>
                        <div className="w3-cell right0 dflex cali tali">
                            <input type="checkbox" className="say pabso backnot" name="say"/>
                            
                            <span className="w3-cell">
                                <Star/>
                            </span>
                            <h5 className="sz11 txt txt500">⠀20:03 pm</h5>
                        </div>
                    </div>
                    <Link to="/chat" className="w3-row limmarg dlex ">
                        <h5 className="sz13 txt txt500">eae seu pedido já foi entregue</h5>
                    </Link>
                </div>
            </div>
        </div>
        <div className="w3-row mbottom pbottom bordbtm ">
            <div className="w3-row dflex">
                <div className="w3-cell  popupmsn pmhorizon">
                    <label className="dflex">
                        <img className="bordcolor radiu imgprofilenot " src={Imgmsn3}/>
                        <span className="pfix pabso right0 topn">
                            <div className="radiu pmhorizon mborder backcolor">
                                <h6 className="sz13 txt500 txtwhite">2</h6>
                            </div>
                        </span>
                    </label>
                </div>
            
                 
                <div className="w3-half ">
                    <div className="w3-row dflex">
                       <h5  className="elipse sz13 gray txt700"> Talita dos santos⠀</h5>
                        <div className="w3-cell right0 dflex cali tali">
                            <input type="checkbox" className="say pabso backnot" name="say"/>
                            
                            <span className="w3-cell">
                                <Star/>
                            </span>
                            <h5 className="sz11 txt txt500">⠀13:20 pm</h5>
                        </div>
                    </div>
                    <Link to="/chat" className="w3-row limmarg dlex ">
                        <h5 className="sz13 txt txt500">e as outras patentes pra alcançar o objetivo</h5>
                    </Link>
                </div>
            </div>
        </div>
        <div className="w3-row mbottom pbottom bordbtm ">
            <div className="w3-row dflex">
                <div className="w3-cell  popupmsn pmhorizon">
                    <label className="dflex">
                        <img className="bordcolor radiu imgprofilenot " src={Imgmsn4}/>
                        <span className="pfix pabso right0 topn">
                            <div className="radiu pmhorizon mborder backcolor">
                                <h6 className="sz13 txt500 txtwhite">32</h6>
                            </div>
                        </span>
                    </label>
                </div>
            
                 
                <div className="w3-half ">
                    <div className="w3-row dflex">
                       <h5  className="elipse sz13 gray txt700"> Rebeca soales sousa</h5>
                        <div className="w3-cell right0 dflex cali tali">
                            <input type="checkbox" className="say pabso backnot" name="say"/>
                            
                            <span className="w3-cell">
                                <Star/>
                            </span>
                            <h5 className="sz11 txt txt500">⠀4:03 am</h5>
                        </div>
                    </div>
                    <Link to="/chat" className="w3-row limmarg dlex ">
                        <h5 className="sz13 txt txt500">with can´t do you have a contract mabe them</h5>
                    </Link>
                </div>
            </div>
        </div>
       
    </article>

</nav>
   
        </>
 );}

export default Friends;