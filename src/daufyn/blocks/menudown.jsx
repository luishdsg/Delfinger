import React from 'react'
import consts, { Homea, Newsa, Bella, Messagea } from '../fragment/js/consts'
import svgs,{Home, Messenger, News, Bell} from '../fragment/svgs/svg'
import { Link } from 'react-router-dom'
function Menudown(){
    return( 
      <div className="wfull menudown pfix bottom0 w3-container dflex">

          <Link to="/" onClick={Homea} id="homea" className="w3-container tali ptop fali w3-quarter">
              <Home/>
          </Link>
          <Link to="/search" id="newsa" onClick={Newsa} className="w3-container ptop fali  tali w3-quarter ">
              <News/>
          </Link>
          <Link to="notifications" id="bella" onClick={Bella} className="w3-container ptop fali  tali w3-quarter ">
              <Bell/>
          </Link>
          <Link to="messages" id="messagea" onClick={Messagea} className="w3-container ptop fali  tali w3-quarter ">
              <Messenger/>
          </Link>
      </div>
    ); 
}
export default Menudown;
