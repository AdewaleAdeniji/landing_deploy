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
            <Fade duration={3000}left>
            <div className="col-md-6">
                {/* <div className="sendusdimg"> */}
                    {/* <Image className="sendusd" src={SendUSD} layout="intrinsic"/> */}
                    <img src='/images/sendusd2.png' className="sendusd"/>
                {/* </div> */}
            </div>
            </Fade>
            <Fade duration={3000}right>
            <div className="col-md-6">
                {/* <div className="makeusdimg"> */}
                    {/* <Image className="makeusd" src={MakeUSD} layout="intrinsic"/> */}
                    <img src='/images/makeusd.png' className="makeusd"/>
                {/* </div> */}
            </div>
            </Fade>
        </div>
        <img src="/images/img-flash.svg" className="flash-bg-1 navdesktop sm-screen"/>
        </>
    )
}
export default SendUsd;