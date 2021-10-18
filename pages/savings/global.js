import React,{useEffect, useState} from 'react';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';


const Global =  (props) => {
   
    return (
        <>
        <div className="col-md-12 herosection global">
            <Bounce left>
                <div className="col-md-6 herotextarea">
                
                <h1 className="hero-title-text">
                Make stressfree transactions
                </h1>
                <h6 className="hero-sub-text" id="subtext">
                Leverage a truly global infrastructure to meet business obligations. Let us help you make payments globally. Wire transfers, ACH, mass payouts and more.
                </h6>
                <a href="https://forms.gle/ySvFJKkw9w234T3a9">
                    <button className="btn btn-primary btn-hero">
                        CONTACT SALES
                    </button>
                </a>
                
            </div>
            </Bounce>
            <div className="col-md-6 hero-image">
                <Fade duration={3000}right>
                    <div className="img-section">
                        {/* <img src="/images/loop.gif" className="loop"/> */}
                        <img src="/images/countries.png" className="heroimg" alt="Moneymie Available Countries"/>
                    </div>
                </Fade>
            </div>
        </div>
        
        </>
    )
}
export default Global;