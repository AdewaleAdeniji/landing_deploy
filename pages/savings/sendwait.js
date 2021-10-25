import React,{useEffect, useState} from 'react';
import Fade from 'react-reveal/Fade';
import formsubmit from '../../src/formsubmit';
import { validateEmail } from '../../src/formsubmit';
const SendWait = (props) => {
    const [active, setActiveState ]=  useState(false);
    const [loading , setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [toast, setToast] = useState({ type: true,message:''});
    const submitEmail = async (email) => {
        const payload = { 
            "email":email,
            "waitlist-group-key":"moneymie-savings"
        };
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(payload);

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        await fetch("https://staging.moneymie.com/api/v2/public/user/waitlists", requestOptions)
        .then(response => response.json())
        .then(async (data)=>{
            setLoading(false);
            setActiveState(true);
            if(data.status&&data.code==100){
                setToast({
                    type:true,
                    message:'Thank you. We would inform you once we launch this feature'
                })
                
            }
            else if(data.code==900){
                
                setToast({
                    type:false,
                    message:data.message
                })
            }
            else {
                setToast({
                    type:false,
                    message:'Request Failed at the moment,Please try again'
                })
            }
        })
        .catch(error => { 
            setToast({
                type:false,
                message:'Request Failed at the moment,Please try again'
            })
        });
}
    const AddToWaitlist = async () => {
        if(validateEmail(email)){
            setLoading(true);
            setActiveState(false);
            setToast({
                type:true,
                message:''
            })
            submitEmail(email);
            
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
        const setactive = validateEmail(e.target.value);
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