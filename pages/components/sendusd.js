import React, { useState } from 'react';
import Image from 'next/image';
import MakeUSD from '../../public/images/makeusd.png';
import SendUSD from '../../public/images/sendusd.png';
import Fade from 'react-reveal/Fade';
const SendUsd = (props) => {
    const ImageHeight = useState(760);
    const ImageWidth = useState(400);
    return (
        <>
        <div className="col-md-12 sendusdsection sm-screen">
        <Fade duration={500} bottom>
            <div className="col-md-6">
                {/* <div className="sendusdimg"> */}
                    {/* <Image className="sendusd" src={SendUSD} layout="intrinsic"/> */}
                    <img src='/images/sendusd4.png' className="sendusd" alt="You can send digital dollars to anyone one. Digital dollars can be converted through licensed payout partners to multiple currencies."/>
                {/* </div> */}
            </div>
            </Fade>
            <Fade duration={500} bottom>
            <div className="col-md-6">
                {/* <div className="makeusdimg"> */}
                    {/* <Image className="makeusd" src={MakeUSD} layout="intrinsic"/> */}
                    <img src='/images/makeusd.png' className="makeusd" alt="Make wire transfers from your digital dollar wallet to any dollar bank account in the US and over 90 countries."/>
                {/* </div> */}
            </div>
            </Fade>
        </div>
        <img src="/images/img-flash.svg" className="flash-bg-1 navdesktop sm-screen"/>
        </>
    )
}
export default SendUsd;