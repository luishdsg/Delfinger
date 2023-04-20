import React from 'react' 
import '../../fragment/css/profile.css' 
import Header from './headerp'
import gallery , {Gallery} from './gallery' 
import favorited, {Favorited} from './favorited'
import trash, {Trash} from './trash'
import optprof, { Timelineopt , Favoritedopt, Trashopt, Imageopt } from '../../fragment/js/optprof'
import Imgprofile from '../../fragment/img/PRO/po.jpg'
import Timeline from './timeline'
import svg, {Cup , Gallerys, Trashs, Hearts} from '../../fragment/svgs/svg'
import '../../fragment/js/optprof'
 
function Profile(){
    return( 
       <>  
       <Header/>  
       {/* PROFILE-DATA */}  
        <div id="profile" className="w3-row dark light cali">
            <div id="backprofile" className="wfull pahorizon h100 pleft ptop">
                    <br/>
                    <br/> 
                    <br/>
                    <br/>
                    <br/>
                    <br/>
            </div> 
                <div className="wfull hauto ntop w3-container">
                    <div id="imgprofbord" className="w3-row dark light hauto radiu ppx"> 
                        <img className="imgprofilepage" src={Imgprofile}/>
                    </div>
                    <div  className="wfull hauto">
                       <h4 id="nameprincipal" className="h4 sz15 dark light wfull elipse">Stefani Britos 2937</h4>
                        <h6 id="catchphraseprincipal" className="limmarg dark light w150 h5 sz10 maby">So that every adversity has an answer I don't hate myself and incongress before in choice</h6>
                        <h6 className="txt sz12 elipse"><i class="fas fa-map-marker-alt"></i>⠀Rua Cloverfield</h6>
                        <h6 className="txt sz12"><i class="fas fa-birthday-cake"></i>⠀makes birthday in Octuber 13, 2020</h6>
                        <div className="w3-half ptop dflex"> 
                            <div className="w3-cell dflex cali">
                                <h6 className="maby sz12 h5 ">followers</h6>
                                <h6  id="followerprincipal" className="txtblack dark light h6 elipsen">⠀737</h6>
                            </div>
                            <div className="w3-cell dflex cali">
                                <h6 className="maby sz12 h5 ">following</h6>
                                <h6  id="followingprincipal" className="txtblack dark light h6 elipsen">⠀27</h6>
                            </div>
                           
                        </div>
                    </div>
                </div>
        </div>
          
        {/* PROFILE-OPT-INSIDE */}
        <div id="navbarup" className="w3-row psti z top0">
          <div className="wfull h03  dflex cali">
                <div id="timelineopt" onClick={Timelineopt} className="w3-quarter hfull cali tali ">
                    <div className="w3-row cali stop tali">
                      <Cup/>

                    </div> 
                </div>
                <div id="imageopt" onClick={Imageopt} className="w3-quarter hfull cali tali ">
                    <div className="w3-row cali stop tali">
                   
                   <Gallerys/>
                    
                    </div> 
                </div>
                <div id="favoritedopt" onClick={Favoritedopt}  className="w3-quarter hfull cali tali ">
                    <div className="w3-row cali stop tali">
                   <Hearts/>
                    </div> 
                </div>
                <div id="trashopt" onClick={Trashopt} className="w3-quarter hfull cali tali ">
                    <div className="w3-row cali stop tali">
                   <Trashs/>
                    </div> 
                </div> 
             
          </div>
        </div>
        {/* VISUAL-OPT-INSIDE */}
        <div id="spacetimeline"><Timeline/></div>
        <div id="spaceimage"><Gallery/></div> 
        <div id="spacefavorited"><Favorited/></div>
        <div id="spacetrash"><Trash/></div>
      

</>
    );
}

export default
    Profile;

