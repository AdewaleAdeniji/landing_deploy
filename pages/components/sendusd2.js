import React, { useState } from 'react';
import Image from 'next/image';
import MakeUSD from '../../public/images/makeusd.png';
import SendUSDImage from '../../public/images/sendusd.png';
import Fade from 'react-reveal/Fade';
//import './sendusd.css';

const SendUSD = (props) => {
    const ImageHeight = useState(760);
    const ImageWidth = useState(400);
    return (
        <>
        <div className="col-md-12 sendusdsection big-screen">
        <Fade duration={500} bottom>
            <div className="col-md-6">
                <img src='/images/sendusd4.png' className="sendusd" alt="You can send digital dollars to anyone one. Digital dollars can be converted through licensed payout partners to multiple currencies."/>
            </div>
            </Fade>
            <Fade duration={500} bottom>
            <div className="col-md-6">
                <div className="makeusdcontainer">
                    <div className="smalltext">
                        <img src="/images/arrowusd.png" alt="Make wire transfers from your digital dollar wallet to any dollar bank account in the US and over 90 countries."/>
                        Domestic and International wire transfers
                    </div>
                    <h1 className="title-text">
                     Make USD payments 
                    </h1>   
                    <div className="text-sm-text">
                        Make wire transfers from your digital dollar wallet to any dollar bank account in the US and over 90 countries.
                    </div>
                    <img src="/images/wire.gif"/>
                </div>
            </div>
            </Fade>
        </div>
        <img src="/images/img-flash.svg" className="flash-bg-1 navdesktop"/>
        </>
    )
}
export default SendUSD;