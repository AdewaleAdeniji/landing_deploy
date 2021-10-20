import React from 'react';
import Fade from 'react-reveal/Fade';
import '../../styles/features.module.css';

const Features = (props) => {
    return (
        <div className="trustsection features">
            <Fade duration={3000} bottom>
                <div className="trust-title">
                Great ways to save
                </div>
            </Fade>
            <Fade duration={3000}bottom>
            <div className="trust-content">
                
                <div className="feature-item">
                    <div className="feature-item-image">
                        <img src="/images/savings/lock.png" alt="Coin Image"/>
                    </div>
                    <div className="trust-text">
                        <h4> Fixed savings</h4>
                        <div>
                          Lock money away so you are not tempted to touch it.
                        </div>

                    </div>
                </div>

                <div className="feature-item">
                    <div className="feature-item-image">
                        <img src="/images/savings/auto.png" alt="Coin Image"/>
                    </div>
                    <div className="trust-text">
                        <h4>Automated savings</h4>
                        <div>
                        Set how much you want to save per period, for how long and you’re all set.
                        </div>

                    </div>
                </div>

                <div className="feature-item">
                    <div className="feature-item-image">
                        <img src="/images/savings/goal.png" alt="Coin Image"/>
                    </div>
                    <div className="trust-text">
                        <h4>Goal Based</h4>
                        <div>
                        Save towards that property, school, vacation or supporting family back home.
                        </div>

                    </div>
                </div>

                <div className="feature-item">
                    <div className="feature-item-image">
                        <img src="/images/savings/card.png" alt="Coin Image"/>
                    </div>
                    <div className="trust-text">
                        <h4>Ease in Ease out</h4>
                        <div>
                        Withdrawals are instant to your debit card or 2-3 days via ACH.
                        </div>
                    </div>
                </div>

                
             
            
            </div>
                
            </Fade>
           
        </div>
    )
}
export default Features;