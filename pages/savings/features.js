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
                        <img src="/images/laptop.svg" alt="Coin Image"/>
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
                        <img src="/images/man.svg" alt="Coin Image"/>
                    </div>
                    <div className="trust-text">
                        <h4>Merchants</h4>
                        <div>
                        Pay or recieve payments from foreign distributors and retailers
                        </div>

                    </div>
                </div>

                <div className="feature-item">
                    <div className="feature-item-image">
                        <img src="/images/car.svg" alt="Coin Image"/>
                    </div>
                    <div className="trust-text">
                        <h4>Car Dealers</h4>
                        <div>
                        Buy from car marketplaces
                        </div>

                    </div>
                </div>

                <div className="feature-item">
                    <div className="feature-item-image">
                        <img src="/images/money.svg" alt="Coin Image"/>
                    </div>
                    <div className="trust-text">
                        <h4>Investors</h4>
                        <div>
                        Make payments globally
                        </div>
                    </div>
                </div>

                <div className="feature-item">
                    <div className="feature-item-image">
                        <img src="/images/student.svg" alt="Coin Image"/>
                    </div>
                    <div className="trust-text">
                        <h4>Students</h4>
                        <div>
                        Pay for school abroad
                        </div>

                    </div>
                </div>
                
             
            
            </div>
                
            </Fade>
           
        </div>
    )
}
export default Features;