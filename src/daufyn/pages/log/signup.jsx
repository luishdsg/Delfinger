import React, { useState, FormEvent } from 'react';
import {Link} from 'react-router-dom'
import svg, { Backlog, Checke } from '../../fragment/svgs/svg'

// function initialState(){
//     return{user: '', password: ''};
// }s

// const Userlogin = () =>{
//     const [values , setValues] = userState();
// }

// function onChange(event){

// } 


export default function Signup(){

    return(
        <body className="wview hfull pfix zindex top0 " id="bodylog">
            <br/>
          
            <Link to="/log" className="wfit pmvertical dflex hauto pleft mmleft">
                <Backlog/>
            </Link>
            <br/>
            <div className="wfull lali hauto w3-container">
                  <h5 className="sz20 txt500 w3-container txtwhite">
                  <img src="https://i.imgur.com/AKQHbyr.png"/>⠀creating account
                  </h5>
            </div>
            <div className="wfull hauto w3-container">
                <br/>
                <form action="#pqp"method="POST" className="pmhorizon wfull">
                    <div id="alertemailexist" className="wfull dnone hauto pahorizon">
                        <h5 className="sz10 txt200 txtred">email already registered</h5>
                    </div>
                    <input type="email" id="emailregistre" className="wfull huto pa border mborder txt200 sz14 txtwhite out backnot " placeholder="email" required/>
                    <br/>
                    <br/>
                    <input type="password" id="passregistre"className="wfull huto pa border mborder txt200 sz14 txtwhite out backnot " placeholder="password" required/>
                    <br/>
                    <br/>
                    <input type="password"  id="passregistreagain"className="wfull huto pa border mborder txt200 sz14 txtwhite out backnot " placeholder="password again" required />
                    <div id="alertpasserror" className="wfull dnone hauto pahorizon">
                        <h5 className="sz10 txt200 txtred">passwords not the same</h5>
                    </div>
                    <div className="wfull hauto tali cali dflex pmvertical jali">
                        <div className="grid ">
                            <label className="checkbox out porel path">
                                <input type="checkbox" className="out backnot cursor porel "/> 
                                <Checke/>
                            </label>
                        </div>
                        <h5 className="sz10 w70 ptop mmtop limmarg txt200 txtwhite">I agree to the terms of permission and privacy</h5>
                    </div>
                    <footer className="w3-col s11 hauto mmleft pavertical pfix bottom0 "> 
                    <div className="wfull hauto dflex  ">
                            <input type="submit" className="wfull out pa border backw tali txt500 sz15 " value="next"/>  
                       </div>            
                      
                    </footer>
                </form>
            </div> 
        </body>
    );
}

