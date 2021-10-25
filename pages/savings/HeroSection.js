import React,{useEffect, useState} from 'react';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import formsubmit from './formsubmit';


const Hero =  (props) => {
    const [active, setActiveState ]=  useState(false);
    const [loading , setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [toast, setToast] = useState({ type: true,message:''});
    const AddToWaitlist = async () => {
        if(formsubmit.validateEmail(email)){
            setLoading(true);
            setActiveState(false);
            setToast({
                type:true,
                message:''
            })
            const submitemail =  await formsubmit.submitEmail(email);
            setLoading(false);
            setActiveState(true);
            if(submitemail){
                setToast({
                    type:true,
                    message:'Thank you. We would inform you once we launch this feature'
                })
            }
            else {
                setToast({
                    type:false,
                    message:'Request Failed at the moment,Please try again'
                })
            }
        }
        else {
            setActiveState(false);
            setToast({
                type:false,
                message:'Invalid Email Address'
            })
        }
    } 
    const HandleEmailChange = (e) => {
        setEmail(e.target.value);
        const setactive = formsubmit.validateEmail(e.target.value);
        setActiveState(setactive);
        
    }
    
    return (
        <>
        <div className="col-md-12 herosection global">
            <Bounce left>
                <div className="col-md-6 herotextarea">
                
                <h1 className="hero-title-text">
                Start saving, start winning. For free.
                </h1>
                <h6 className="hero-sub-text" id="subtext">
                Moneymie’s saving tools help you save in ways traditional banks have failed to provide. Now you can really smash those financial goals.
                </h6>
                <div className="sendlinkform">
                <input type="email" className="waitlistmail" placeholder="Enter your email address" onChange={HandleEmailChange} value={email}/>
                <button type="button" className={active ? 'active' : ''} onClick={AddToWaitlist} disabled={!active}>{loading ? 'Sending...' : 'Join our waitlist '}</button>
                </div>
                <div className={toast.message!='' ?  toast.type ? "info" : "info danger" : 'hidden' }>
                    {toast.message} 
                </div>
                
            </div>
            </Bounce>
            <div className="col-md-6 hero-image">
                <Fade duration={3000}right>
                    <div className="img-section savingsection">
                        {/* <img src="/images/loop.gif" className="loop"/> */}
                        <img src="/images/savings/savings.png" className="heroimg savings" alt="Moneymie Available Countries"/>
                    </div>
                </Fade>
            </div>
        </div>
        
        </>
  
    )
}
export default Hero;