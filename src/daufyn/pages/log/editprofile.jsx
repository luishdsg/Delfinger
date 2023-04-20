import React from 'react'
import { Link } from 'react-router-dom'
function Editprofile(){
    return(
        
 
        <body className="zindex hfull backw wview">
            
        <form action="#pqp" method="POST" className="wfull hfull over">
          
            <div id="coverimg" className="wfull h100 dflex pmhorizon">
                <input type="file" name="coverimg" className="wfull h100 opacity z" accept=",image/*" />
            </div>
            <div className="wfull ntop w3-container hauto ">
                <div className="wfit hauto left0">
                    <div className="wfit hauto radiu backw px3">
                        <input type="file" name="img" className="wfull opacity hfull pabso z top0" accept=",image/*" />
                        <img className="imgprofilepage radiu" src="https://i.imgur.com/nsczkrA.png"/>
                    </div>
                </div>
                <div className="wfull pavertical hauto">
                    <div className="wfull pmvertical hauto">
                        <input type="text" id="editprofilename" className="wfull huto pa bord txt400 sz14 txtblack out backwhat " placeholder="type your name" required />
                    </div>
                    <div className="wfull pmvertical hauto">
                          <textarea placeholder="type a tagline" name="catchphraseeditprofile"  maxlength="55" id="editcatchphraseedit" className=" txt400 sz14 txtblack backwhat pm h05 bord out lali wfull"/>
                    </div>
                    <div className="wfull hauto pmvertical ">
                          <div className="w3-half ">
                              <label for="birtheditprofile" className="sz17 txt out txt500 ">birthdate</label>
                              <input type="date" id="birtheditprofile" className="maby wfull pm out mborder  bord backnot" required/>
                          </div>
                                  <br/>
                                  <br/>
                                  <br/>
                                  <br/>
                          <div className="w3-half ">
                              <label for="" className="sz17 txt500 txt">Genre</label>
                                <select className="wfull out  backnot pm bord hauto mborder" required>
                                  <option className="out" value="1">Woman</option>
                                  <option value="2">Men</option>
                                  <option value="3">Transexual</option>
                                  <option value="4">Others</option>
                                </select>
                          </div>
                    </div>
                </div>
                <br/>
                
            <br/>
            <br/>
            <br/>

        
                <footer className="wfull hauto  cali tali left0  bottom0 "> 
                   <div className="w80 pavertical hauto dflex  ">
                       <input type="submit" className="wfull out pa radiu w3-black txtcolor tali txt200 sz19 " value="Next" required/>  
                  </div>            

               </footer>
            </div>
        </form>
        
      
           
        </body>
        /*
       */

    );


}


export default Editprofile;