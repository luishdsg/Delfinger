import React from'react'
import {Link} from 'react-router-dom'
import svg, { Backlog } from '../../fragment/svgs/svg'
function Forgot(){
    return(
        
        <body className="wview hfull pfix zindex top0 " id="bodylog">
            <br/>
          
            <Link to="/signin" className="wfit pmvertical dflex hauto pleft mmleft">
                <Backlog/>
            </Link>
            <br/>
            <div className="wfull lali hauto dflex w3-container">
                  
                  <div className="w3-half">
                       <h5 className="sz30 txt500 w3-container txtwhite">
                       Try to remember
                  </h5>
                  <h5 className="sz17 wfit txt300 w3-container txtwhat">
                  or write your passwords on paper
                  </h5></div>
                  <div className="w3-col s5 tali cali fali">
                      <img className="wfull hauto" src="https://i.imgur.com/YwEyGbd.png"/>
                  </div>

                 
            </div>
            <div className="wfull hauto w3-container">
                <br/>
                
                <form action="#pqp"method="POST" className="pmhorizon  wfull">
                    <div id="alertemailnoexist" className="wfull w3-animate-left dnone hauto pahorizon">
                        <h5 className="sz10 txt200 txtred">email does not exist</h5>
                    </div>
                    <input type="email" id="emailresgate" className="wfull huto pa border mborder txt200 sz14 txtwhite out backnot " placeholder="email" required/>
                   
                    <footer className="w3-col s11 hauto mmleft pavertical pfix bottom0 "> 
                   
                        <div className="wfull hauto dflex  ">
                            <input type="submit" className="wfull out pa border backw tali txt500 sz15 " />  
                       </div>            
                      
                    </footer>
                </form>
                
                
                <div className="wfull hauto tali dflex pmvertical jali">

                    <h5 className="sz10 txt300 maby ">Forgot your Email?</h5>

                    <Link to="/smartphone" className="sz10 txt300 maby linkpost">⠀Yes!</Link>
                </div>

            </div> 
    
         
        </body>
    );
}

export default Forgot;