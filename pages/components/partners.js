import React from 'react';
import Fade from 'react-reveal/Fade';

const Partners = (props) =>{
    return (
        <Fade duration={3000}top>
        <div className="partnersarea">
            <div className="sectiontitle">
                Backers and Partners
            </div>
            <div className="partnerswrapper">
                <div className="partners">
                    <div className="partnersection">
                        <img src="/images/sherpa.svg" alt="Sherpa - Moneymie Business Partners"/>
                        <img src="/images/vgg.svg" alt="VGG - Moneymie Business Partners"/>
                        <img src="/images/futureafrica.svg" alt="Future Africa  - Moneymie Business Partners"/>
                        <img src="/images/l5.svg" alt="L5 - Moneymie Business Partners"/>
                    </div>
                </div>
                <div className="partners">
                    <div className="partnersection">
                        <img src="/images/sila.svg" alt="Sila  - Moneymie Business Partners"/>
                        <img src="/images/flutterwave.svg" alt="Flutterwave  - Moneymie Business Partners"/>
                        <img src="/images/circle.svg" alt="Circle  - Moneymie Business Partners"/>
                    </div>
                </div>
            </div>
        </div>
        </Fade>
    )
}
export default Partners;