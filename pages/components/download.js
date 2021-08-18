import React from 'react';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const Download = (props) => {
    return (
        <Fade right>
        <div className="downloadsection">
            <Fade top>
                <div className="downloadtext">
                    Thousands of people are already saving more with moneymie. Secure your bag. Sign up now.
                </div>
            </Fade>
            
            <div className="downloadbuttons">
                <Fade left>
                    <a href='https://play.google.com/store/apps/details?id=moneymie.bank.nigeria.remit.sendmoney'>
                        <img src="/images/androidownload.svg"/>
                    </a>
                </Fade>
                <Fade right>
                    <a href='https://apps.apple.com/us/app/moneymie/id1538278032'>
                        <img className="ios" src="/images/iosdownload.svg"/>
                    </a>
                </Fade>
            </div>
        </div>
        <img src="/images/flash-bg-1.png" className="flash-bg-1 flash-3 navdesktop"/>
        </Fade>
    )
}
export default Download;