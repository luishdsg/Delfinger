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
                       No panic.
                  </h5>
                  <h5 className="sz17 wfit txt300 w3-container txtwhat">
                  in cases like this we give a way
                  </h5></div>
                  <div className="w3-col s5 tali cali fali">
                      <img className="wfull hauto" src="https://i.imgur.com/YwEyGbd.png"/>
                  </div>
                  
            </div>
            <div className="wfull hauto w3-container">
                <br/>
                
                <form action="#pqp"method="POST" className="pmhorizon  wfull">
                    <div id="alertincorrectnumber" className="wfull w3-animate-left dnone hauto pahorizon">
                        <h5 className="sz10 txt200 txtred">incorrect format</h5>
                    </div>
                    <label className="maby txt200 sz10 w3-container" for="numberresgate">enter your number</label>
                    <input type="number" id="numberresgate" className="wfull huto pa border mborder txt200 sz14 txtwhite out backnot " placeholder="EX: +00 (99) 9999-9999" required/>
                   
                    <footer className="w3-col s11 hauto mmleft pavertical pfix bottom0 "> 
                   
                        <div className="wfull hauto dflex  ">
                            <input type="submit" className="wfull out pa border backw tali txt500 sz15 " />  
                       </div>            
                      
                    </footer>
                </form>
              

                
                
           

            </div> 
    
         
        </body>
    );
}

export default Forgot;