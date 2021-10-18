import React from 'react';
import Fade from 'react-reveal/Fade';
import '../../styles/how.module.css';

const HowItWorks = (props) => {
    return (
        <div className="trustsection savings-sp">
            <Fade duration={3000} bottom>
                <div className="trust-title">
                    How it works
                </div>
            </Fade>
            <Fade duration={3000}bottom>
            <div className="trust-content savings-area">
                
                <div className="feature-item">
                    <div className="feature-item-image">
                        <img src="/images/savings/one.png" alt="Coin Image"/>
                    </div>
                    <div className="trust-text">
                        <div>
                        Connect to your bank account
                        </div>

                    </div>
                </div>

                <div className="feature-item">
                    <div className="feature-item-image">
                        <img src="/images/savings/two.png" alt="Coin Image"/>
                    </div>
                    <div className="trust-text">
                        <div>
                        Set a savings goal
                        </div>

                    </div>
                </div>

                <div className="feature-item">
                    <div className="feature-item-image">
                        <img src="/images/savings/three.png" alt="Coin Image"/>
                    </div>
                    <div className="trust-text">
                        <div>
                        You are set to go
                        </div>

                    </div>
                </div>
             
            
            </div>
                
            </Fade>
           
        </div>
    )
}
export default HowItWorks;