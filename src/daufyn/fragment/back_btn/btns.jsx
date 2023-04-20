import React , {Component} from 'react'
import optprof, {Closesetprofile} from '../js/optprof'
import svgs, { Share, Hate, Chat, Love } from '../svgs/svg'
import '../css/post.css'
import '../css/divs.css'




function Back(props){
    const {children} = props
    return(
          <div className="radiu  backcol w3-black">{children}</div>
    );
}



 function Btnfollow(){

//   constructot(props){
//     super(props);

//     this.state = {
//         showObject: false,
//     };
// }


// toogle = () =>{
//     this.setState({
//         showObject: !this.state.showObject
//     })
// }

// onClick={this.toggle}
// {this.state.showObject ? 'Follow' : 'following'}
// {this.state.showObject && (//objct)}


     return(
        <button type="button" className="btnfollow">

        </button>
     );
}

function Cleaninput() {
    var elements = document.getElementsByName("formtxt");
    elements.forEach(element => {
      console.log(element);
      element.value = '';
    })
  } 


function Editprofile(props){
    const { children, Edit } = props
    return(
        <button id="editprofile" className="btnsimple" onClick={Edit}>{children}</button>
    );
}

function Loveb(){
  return(
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
  );
}
function Hateb(){
  return(
    
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
  );
}
function Shareb(){
  return(
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
  );
}
function Chatb(){
  return(
    

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
  );
}
function Notice (props){
  const {children} = props
  return(
      <input maxlength="55" className="sz12 maby out backnot limmarg">{children}</input>
  );
}

const Searchinput = () =>{
  return(
    <div className="w3-row bac pa">
    <input type="search" name="browse" placeholder="find your friends " className="search wfull out pa pppleft txt shadow  radiu"/>
    </div>
  );
}

function Titleup(props){
  const {name} = props 
  return(  <h4 className="sz16 grayhover txt700">{name}</h4> );
}

function Title(props){
  const {name} = props 
  return(  <h5 className="sz20 txtblack txt500">{name}</h5> );
}


export{
Btnfollow,
Editprofile,
Back,
Cleaninput,
Shareb,
Hateb,
Chatb,
Loveb,
Notice,
Searchinput,
Titleup,
Title,

}

