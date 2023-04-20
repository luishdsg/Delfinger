import React from'react'
import {Link} from 'react-router-dom'
import svg, { Backlog } from '../../fragment/svgs/svg'
function Signin(){
    return(
        
        <body className="wview hfull pfix zindex top0 " id="bodylog">
            <br/>
          
            <Link to="/log" className="wfit pmvertical dflex hauto pleft mmleft">
                <Backlog/>
            </Link>
            <br/>
            <div className="wfull lali hauto w3-container">
                  
                  <h5 className="sz30 txt500 w3-container txtwhite">
                  Let's get in,
                  </h5>
                  <h5 className="sz17 wfit txt300 w3-container txtwhat">
                   I think there's a new notification for you
                  </h5>
            </div>
            <div className="wfull hauto w3-container">
                <br/>
                
                <form action="#pqp"method="POST" className="pmhorizon  wfull">
                    <div id="alertemailerror" className="wfull  dnone hauto pahorizon">
                        <h5 className="sz10 txt200 txtred">nonexistent email</h5>
                    </div> 
                    <input type="email" id="emailerror" className="wfull huto pa border mborder txt200 sz14 txtwhite out backnot " placeholder="email" required />
                    <br/>
                    <br/>
                    <div id="alertemailerror" className="wfull dnone hauto pahorizon">
                        <h5 className="sz10 txt200 txtred">incorrect password</h5>
                    </div>
                    <input type="password"  id="passregistre"className="wfull huto pa border mborder txt200 sz14 txtwhite out backnot " placeholder="password" required/>
                
                    <footer className="w3-col s11 hauto mmleft pavertical pfix bottom0 "> 
                    <div className="wfull hauto tali dflex pmvertical jali">
                    <h5 className="sz10 txt300 maby ">Not have an account yet?</h5>
                    <Link to="/signup" className="sz10 txt300 maby linkpost">⠀Create account</Link>
                    </div>
                        <div className="wfull hauto dflex  ">
                            <input type="submit" className="wfull out pa border backw tali txt500 sz15 " value="next"/>  
                       </div>            
                      
                    </footer>
                </form>
                
                
                <div className="wfull hauto tali dflex pmvertical jali">

                    <h5 className="sz10 txt300 maby ">Forgot your password?</h5>

                    <Link to="/forgot" className="sz10 txt300 maby linkpost">⠀To recover</Link>
                </div>

            </div> 
    
         
        </body>
    );
}

export default Signin;