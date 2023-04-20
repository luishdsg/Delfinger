import React from 'react'
import posts, {LittlePost} from '../../blocks/posts'
export default function Timeline(props) {
    const { onckick} = props 
     return(
        <div className="wfull hauto">
      <div className="w3-row dflex w3-container">
            <div className="w3-cell lali">
                <h4 className="sz20 h6  txtcolor">Posts</h4>
            </div>
            <div className="w3-quarter  rali">
               <h4 className="sz13 h5  hfull cali mtop  txt">03 posts</h4>
            </div>
       </div>                                          
      
        <LittlePost/>
        <LittlePost/>
        <LittlePost/>

        </div>
     );
}