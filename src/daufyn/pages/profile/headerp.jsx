import React from 'react'
import { Link } from 'react-router-dom'
import svg, { Arrowl , Engeniew, Analysisw, Paintw}  from '../../fragment/svgs/svg'
import btns, {Back} from '../../fragment/back_btn/btns'
import optprof , { Darkmode, Lightmode,
  Themeyellow,Themeblue ,Themepink ,Themepurple ,
  Themegreen ,Themered} from '../../fragment/js/optprof'
import '../../fragment/css/profile.css'
   

function Header(){  
function Optheme(){
    document.getElementById("ontheme").style.display = 'none';
    document.getElementById("offtheme").style.display = 'block';
    document.getElementById("ultheme").style.display = 'block';

}
function Closetheme(){
  document.getElementById("ontheme").style.display = 'block';
  document.getElementById("offtheme").style.display = 'none';
  document.getElementById("ultheme").style.display = 'none';
}
  
    return (  
<header id="header" className="wfull dflex pabso backnot z pmvertical cali ">


    <div className="w3-cell dflex right0 mright top0  pabso rali">
        <Link to="/settings" className="w3-cell rigth0 tali p "> 
          <div>
            <Back>
              <a  className="linkindex" href="#settings" target="_self">
                <Engeniew/>
              </a>
            </Back>
          </div>
        </Link>
        <div className="w3-cell right0 tali p ">  <Back><Analysisw/></Back></div>
        <div className="w3-cell right0 tali p ">
          <Back>
            <div onClick={Optheme} id="ontheme">
            <Paintw/>
            </div>
            <div onClick={Closetheme} className="dnone " id="offtheme">
            <Paintw/>
            </div>
            
            <ul id="ultheme" className="dnone pabso bord shadow hauto ">
              <h5>colors</h5>
              <li className="dflex  wfull">
                <div className="cali tali  w3-yellow">
                <i class="fas fa-lemon"></i>
                </div>
                <div className=" cali fali w3-blue">
                <i class="fas fa-fish"></i>
                </div>
              </li>
              <li className="dflex  wfull">
                <div className="cali tali  w3-pink">
                <i class="fas fa-candy-cane"></i>
                </div>
                <div className=" cali fali w3-purple">
                <i class="fas fa-wine-glass-alt"></i>
                </div>
              </li>
              <li className="dflex  wfull">
                <div className="cali tali  w3-green">
                <i class="fas fa-seedling"></i>
                </div>
                <div className=" cali fali w3-red">
                <i class="fas fa-fire"></i>
                </div>
              </li>
              <li className="dflex  wfull">
                <div className="cali tali  w3-black">
                <i onClick={Darkmode} class="fas fa-moon"></i>
                </div>
                <div className=" cali fali w3-white shadowb">
                <i onClick={Lightmode} class="fas fa-lightbulb"></i>
                </div>
              </li>

               
               
               
            </ul>
              
          </Back>
          
        </div>
    
  </div>
</header>
        
      
    );
  }


export default Header;