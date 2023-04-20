import React from 'react'
import btns, {Back, Title} from '../../fragment/back_btn/btns'
import svg, {Close, Checke, } from '../../fragment/svgs/svg'
import { Link } from 'react-router-dom'

function Terms(){
    return(
        
        <body className="wfull hauto backw zindex">
             <div className="pmhorizon wfit pfix zzz top0 hauto ptop">
                <Link to="/editprofile" className="dflex mborder radiu">
                    <Back>
                        <Close/>
                    </Back>
                </Link>
            </div>

            <br/>
            <br/>
            <br/>
            <form action="#pqp" method="POST"  className="wfull hfull  w3-container ">
                <div className="wfull hauto pavertical dflexn">
                    <div className="w3-twothird">
                        <Title name="Enhance your experience"/> 
                        <p className="txt300 sz12  txt limmarg lali">
                            Connect with your friends and Let other people find you by your cell phone number.
                        </p>
                    </div>
                    <div className="w3-col s1 tw3-container">
                        <div className="grid"> 
                            <label className="checkbox check out porel path">
                                <input type="checkbox" className="out backnot cursor porel " required /> 
                                <Checke/>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="wfull hauto pavertical dflexn">
                    <div className="w3-twothird">
                        <Title name="Custom ads"/> 
                        <p className="txt300 sz12  txt limmarg lali">
                        You will see ads on Delfinger based on your interaction on the network. Only when this setting is enabled, you will be able to further personalize ads, on and off the platform, combining your Interaction with other online activities and information from our contributors.
                        </p>
                    </div>
                    <div className="w3-col s1 tw3-container">
                        <div className="grid"> 
                            <label className="checkbox check out porel path">
                                <input type="checkbox" className="out backnot cursor porel " required /> 
                                <Checke/>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="wfull hauto pavertical dflexn">
                    <div className="w3-twothird">
                        <Title name="Control where you see Delfinger content on the web"/> 
                        <p className="txt300 sz12  txt limmarg lali">
                        Delfinger uses data to improve your experience. Your web browsing history will never be stored with your name, email or phone number.
                        </p>
                    </div>
                    <div className="w3-col s1 tw3-container">
                        <div className="grid"> 
                            <label className="checkbox check out porel path">
                                <input type="checkbox" className="out backnot cursor porel " required /> 
                                <Checke/>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="wfull hauto pavertical dflexn">
                    <div className="w3-twothird">
                        <Title name="Change content according to your identity"/> 
                        <p className="txt300 sz12  txt limmarg lali">
                        Delfinger personalizes your experience according to the information provided and the devices used to sign in. When it is activated, Delfinger can also personalize your experience according to other information about your identity, such as devices and browsers not used to sign in to Delfinger, or email addresses and phone numbers similar to those accessed by your account. Which in turn personalizes based on the places you've been. Delfinger uses certain information, such as the place where you signed up and your current location, to help show you more relevant content. When it is activated, Delfinger can also improve your experience according to other places you’ve been.
                        </p>
                    </div>
                    <div className="w3-col s1 tw3-container">
                        <div className="grid"> 
                            <label className="checkbox check out porel path">
                                <input type="checkbox" className="out backnot cursor porel " required /> 
                                <Checke/>
                            </label>
                        </div>
                    </div>
                </div>
                <footer className="wfull hauto  cali tali left0  bottom0 "> 
                   <div className="w80 pavertical hauto dflex  ">
                       <input type="submit" className="wfull out pa radiu w3-black txtcolor tali txt200 sz19 " value="I agree" required/>  
                  </div>            

               </footer>
            </form>
        </body>
    );
}







export default Terms;
