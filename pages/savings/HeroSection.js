import React,{useEffect, useState} from 'react';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';


const Hero =  (props) => {
    const [active, setActiveState ]=  useState(false);
    const [loading , setLoading] = useState(false);
    const [useremail, setEmail] = useState('');
    const SendSMS = () => {

    } 
    const HandleEmailChange = () => {

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
                <input type="email" className="waitlistmail" placeholder="Enter your email address" value={useremail} onChange={HandleEmailChange}/>
                <button type="button" className={active ? 'active' : ''} onClick={SendSMS}>{loading ? 'Sending...' : 'Join our waitlist '}</button>
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