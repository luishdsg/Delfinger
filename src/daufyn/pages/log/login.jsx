import React from'react'
import {Link} from 'react-router-dom'
import svg, {Welcome} from '../../fragment/svgs/svg'
function Login(){
    return(
        
        <body className="wview hfull pfix zindex top0 " id="bodylog">
            <br/>
          
            <br/>
            <div className="wfull hauto w3-container">
                <img  className="w3-container wfull" src="https://i.imgur.com/h6qcxcd.png"/>
            </div>
            <div className="wfull hauto w3-container">
                <br/>
                <Welcome/>
            </div> 
            <article className="w3-container wfull hauto cali tali">
                <h5 className="w3-container txt400 maby sz12">share your ideas, meet new friends and express your opinions by connecting everyone</h5>
            </article>
            <footer className="wfull hauto pavertical w3-container pfix bottom0 ">

                <div className="wfull hauto dflex border black ">
                    <Link to="/signup" className="w3-half pa border backw tali txt500 sz15 ">Registre</Link>
                    <Link to="/signin" className="w3-half pa bordrbl txt500 tali txtwhite sz15 ">Login</Link>
                </div>
            </footer>
        </body>
    );
}

export default Login;