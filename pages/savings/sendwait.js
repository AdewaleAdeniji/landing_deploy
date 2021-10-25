import React,{useEffect, useState} from 'react';
import Fade from 'react-reveal/Fade';
import formsubmit from '../../src/formsubmit';

const SendWait = (props) => {
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
        <Fade duration={3000}bottom>
            <div className="sendsection">
            <div className="sendwrapper">
                <div className="sendtitle">
                    Start saving now
                </div>
                <div className="span">Enter your details and we will tell you when it’s ready </div>
                <div className="sendlinkform">
                <div className="inputarea">
                    <input type="email" className="waitlistmail" placeholder="Enter your email address" onChange={HandleEmailChange} value={email}/>
                </div>
                    
                <button type="button" className={active ? 'active' : ''} onClick={AddToWaitlist} disabled={!active}>{loading ? 'Sending...' : 'Join our waitlist '}</button>
                </div>
                <div className={toast.message!='' ?  toast.type ? "info" : "info danger" : 'hidden' }>
                    {toast.message} 
                </div>
            </div>

        </div>
       
                
        </Fade>
    )
}
export default SendWait;