import React from 'react'

import Svg, { Share, Hate, Chat, Love } from '../../fragment/svgs/svg'


// BUTIOSN AND FUNCTIONS POSTBTN 



// LOCAL REACT BTNS AREA
function Postbtn(){
     return(  
     <div className="w3-row tali cali"> 
        <div className="wfull dflex cali tali">
            <div id="chatbtn" className="wfull  dflex contbtn cali rali">
                <div>
                    <label>
                        <input type="checkbox" className=" pabso reactinput"/>
                          <span id="btnreactc" className="listreactbtn  backnot radiu">
                                <div id="cbtn">
                                   <Chat/>
                                </div>
                        </span>
                        <h5>38</h5>
                    </label>
                </div>
  
           </div>  
            
            <div id="lovebtn" className="wfull dflex contbtn cali rali">
                <div>
                    <label>
                        <input type="checkbox" className=" pabso reactinput"/>
                          <span  id="btnreactl" className="listreactbtn  backnot out radiu">
                         
                                <div id="lbtn">
                                  <Love/> 
                                </div>
                           
                        </span>
                         <h5>38</h5>
                    </label>
                </div>
              
           </div> 
            
            <div id="hatebtn" className="wfull dflex contbtn cali rali">
                <div>
                    <label>
                        <input type="checkbox" className=" pabso reactinput"/>
                          <span id="btnreacth"  className="listreactbtn backnot out  radiu">
                          
                                <div id="hbtn">
                                  <Hate/>
                                </div>
                          
                        </span>
                         <h5>38</h5>
                    </label>
                </div>
              
           </div>  
            
            <div id="sharebtn" className="wfull dflex contbtn cali  rali">
                <div >
                    <label >
                        <input type="checkbox" className=" pabso reactinput"/>
                          <span  id="btnreacts" className="listreactbtn backnot out radiu">
                         
                                <div id="sbtn">
                                   <Share/>
                                </div>
                         
                        </span>
                                 <h5>38</h5>
                    </label>
                </div>
      
           </div>  

        </div>
     </div>
     );
}

export {
   
    Postbtn,
};