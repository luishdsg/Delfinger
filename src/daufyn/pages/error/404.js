import React from 'react'
import {Link } from 'react-router-dom'
import svg, { Arrowl, Backlog} from '../../fragment/svgs/svg'
import btns, {Back, Titleup} from '../../fragment/back_btn/btns'
function Pag404(){ 
    return( 
        
        
        <div className="wfull w3-black pfix back404 zindex top0 hfull">
            <div className="wfull pabso top50 hauto">
                <h5 className="sz30 txt200 tali maby">sorry, we didn't find this page</h5>
            </div>
          
          <div className="pfix bottom0 cali jali mmmbottom  tali wfull ">
              
        
<h5 className="sz19 txt500 maby"><Link to="/"><Backlog/>⠀Back home</Link></h5>
           </div>
               </div>
            
    );
}

export default Pag404;