import React from 'react'
import posts, {Postfavirited} from '../../blocks/posts'
function Favorited(props){
    const { onclick } = props 

    return(
    <div className="w3-row"> 
        <div className="w3-row dflex w3-container">
            <div className="w3-cell lali">
                <h4 className="sz20 h6  txtcolor">Favorites</h4>
            </div>
            <div className="w3-quarter  rali">
               <h4 className="sz13 h5  hfull cali mtop  txt">2742 favorites</h4>
            </div>
       </div>
       < Postfavirited/>
       < Postfavirited/>
       < Postfavirited/>
       < Postfavirited/>
    </div>
    );
}

export{
    Favorited,
}