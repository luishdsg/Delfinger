import Raect from 'react'
import btns, {Searchinput} from '../../fragment/back_btn/btns'

import popups, {Header} from '../../fragment/divs/popups'
import Posts, {Post, Postimg, LittlePost, Postvideo,Postlink,} from '../../blocks/posts'
import publish, {Publish} from '../publish/publish'
import Follow from './follow'
function Timeline(){
   return(
       <body id="bodytimeline"> 
       
       <a name="start"> <Header/></a>  
      
          <br/>
   <br/>  
         <Searchinput/>
         <Follow/>
         <Postvideo/>
         <Post/>
         <Postimg/>
         <LittlePost/>
          
         <Postlink/>
        
          <Publish/>
       
         </body> 
   );
}

export default Timeline;
