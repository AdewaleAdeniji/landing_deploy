import React from 'react';
import Fade from 'react-reveal/Fade';

const Partners = (props) =>{
    return (
        <Fade top>
        <div className="partnersarea">
            <div className="sectiontitle">
                Backers and Partners
            </div>
            <div className="partnerswrapper">
                <div className="partners">
                    <div className="partnersection">
                        <img src="/images/sherpa.svg"/>
                        <img src="/images/vgg.svg"/>
                        <img src="/images/futureafrica.svg"/>
                        <img src="/images/l5.svg"/>
                    </div>
                </div>
                <div className="partners">
                    <div className="partnersection">
                        <img src="/images/sila.svg"/>
                        <img src="/images/flutterwave.svg"/>
                        <img src="/images/circle.svg"/>
                    </div>
                </div>
            </div>
        </div>
        </Fade>
    )
}
export default Partners;