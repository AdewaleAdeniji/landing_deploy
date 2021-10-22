import React from 'react';
import Fade from 'react-reveal/Fade';

const TrustSignals = (props) => {
    return (
        <div className="trustsection">
            <Fade duration={3000} bottom>
            <div className="trust-title">
                Why you should trust moneymie?
            </div>
            </Fade>
            <Fade duration={3000}bottom>
            <div className="trust-content">
                <Fade duration={3000} bottom>
                <div className="trust-item">
                    <div className="trust-item-image">
                        <img src="/images/ghana/menu.svg" alt="Coin Image"/>
                    </div>
                    <div className="trust-text">
                        <h4>Simple and Convenient</h4>
                        <div>
                        Create a Moneymie account and send money to Nigeria in 5 minutes. No stress or delays. 
                        </div>

                    </div>
                </div>
                </Fade>
                <Fade duration={3000}bottom>
                <div className="trust-item">
                    <div className="trust-item-image">
                        <img src="/images/ghana/fees.svg" alt="Data image"/>
                    </div>
                    <div className="trust-text">
                        <h4>Low transfer fees </h4>
                        <div>
                        Send Naira directly to a Nigerian bank account at the lowest possible cost. 

                        </div>

                    </div>
                </div>
                </Fade>
                <Fade duration={3000}bottom>
                <div className="trust-item">
                    <div className="trust-item-image">
                        <img src="/images/trusted.svg" alt="Trusted Image"/>
                    </div>
                    <div className="trust-text">
                        <h4>Safe and Trusted </h4>
                        <div>
                        More than 5,000 Africans in the US use Moneymie to send money to Nigeria. Here is what they have to say about Moneymie
                        </div>

                    </div>
                </div>   
                </Fade>         
            </div>
                
            </Fade>
            <img src="/images/flash-bg-2.png" className="flash-bg-2 navdesktop" alt="Dollar Icon"/> 
        </div>
    )
}
export default TrustSignals;