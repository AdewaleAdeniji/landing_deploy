import React from 'react';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const Download = (props) => {
    return (
        <Fade duration={3000}right>
        <div className="downloadsection">
            <Fade duration={3000}top>
                <div className="downloadtext">
                    Thousands of people are already saving more with moneymie. Secure your bag. Sign up now.
                </div>
            </Fade>
            
            <div className="downloadbuttons">
                <Fade duration={3000}left>
                    <a href='https://play.google.com/store/apps/details?id=moneymie.bank.nigeria.remit.sendmoney'>
                        <img src="/images/androidownload.svg"/>
                    </a>
                </Fade>
                <Fade duration={3000}right>
                    <a href='https://apps.apple.com/us/app/moneymie/id1538278032'>
                        <img className="ios" src="/images/iosdownload.svg"/>
                    </a>
                </Fade>
            </div>
        </div>
        <img src="/images/img-flash.svg" className="flash-bg-1 flash-3 navdesktop"/>
        </Fade>
    )
}
export default Download;