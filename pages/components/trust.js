import React from 'react';
import Fade from 'react-reveal/Fade';

const TrustSignals = (props) => {
    return (
        <div className="trustsection">
            <Fade bottom>
            <div className="trust-title">
                Why you should trust moneymie?
            </div>
            </Fade>
            <Fade top>
            <div className="trust-content">
                <Fade left>
                <div className="trust-item">
                    <div className="trust-item-image">
                        <img src="/images/coin.svg"/>
                    </div>
                    <div className="trust-text">
                        <h4>Your coins are secured</h4>
                        <div>
                        Digital dollars are tokens<br/> pegged to the value of real dollars.
                        </div>

                    </div>
                </div>
                </Fade>
                <Fade top>
                <div className="trust-item">
                    <div className="trust-item-image">
                        <img src="/images/data.svg"/>
                    </div>
                    <div className="trust-text">
                        <h4>Your data is secured</h4>
                        <div>
                        Multiple levels of security and <br/>military grade encryption. 
                        </div>

                    </div>
                </div>
                </Fade>
                <Fade right>
                <div className="trust-item">
                    <div className="trust-item-image">
                        <img src="/images/trusted.svg"/>
                    </div>
                    <div className="trust-text">
                        <h4>Trusted by 5k+ people</h4>
                        <div>
                        Over 5000 Nigerians 🇳🇬  in the United States 🇺🇸 already use Moneymie.
                        </div>

                    </div>
                </div>   
                </Fade>         
            </div>
                
            </Fade>
            <img src="/images/flash-bg-2.png" className="flash-bg-2 navdesktop"/>
        </div>
    )
}
export default TrustSignals;