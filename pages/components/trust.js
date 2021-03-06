import React from 'react';
import Fade from 'react-reveal/Fade';

const TrustSignals = (props) => {
    return (
        <div className="trustsection">
            <Fade duration={500} bottom>
            <div className="trust-title">
                Why you should trust moneymie?
            </div>
            </Fade>
            <Fade duration={500}bottom>
            <div className="trust-content">
                <Fade duration={500} bottom>
                <div className="trust-item">
                    <div className="trust-item-image">
                        <img src="/images/coin.svg" alt="Coin Image"/>
                    </div>
                    <div className="trust-text">
                        <h4>Your money is insured</h4>
                        <div>
                        The money you bring into Moneymie is FDIC insured.
                        </div>

                    </div>
                </div>
                </Fade>
                <Fade duration={500}bottom>
                <div className="trust-item">
                    <div className="trust-item-image">
                        <img src="/images/data.svg" alt="Data image"/>
                    </div>
                    <div className="trust-text">
                        <h4>Your data is secured</h4>
                        <div>
                        Multiple levels of security and <br/>military grade encryption. 
                        </div>

                    </div>
                </div>
                </Fade>
                <Fade duration={500}bottom>
                <div className="trust-item">
                    <div className="trust-item-image">
                        <img src="/images/trusted.svg" alt="Trusted Image"/>
                    </div>
                    <div className="trust-text">
                        <h4>Trusted by 5k+ people</h4>
                        <div>
                        Over 5000 Africans  in the United States 🇺🇸 already use Moneymie.
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