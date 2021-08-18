import React from 'react';
import Fade from 'react-reveal/Fade';
import Link from 'next/link';

const Footer = (props) => {
    return (
        <Fade top>
        <div className="footersection">
            <div className="footer-top">
                <div className="footer-item">
                    <img src="/images/logo.svg"/>
                </div>
                <div className="footer-item">
                    <ul>
                        <li className="link-title">
                            COMPANY
                        </li>
                        <li><a href="https://medium.com/moneymie" target="_blank"  rel="noopener noreferrer">Blog</a></li>
                        <li><a href="https://moneymie.link/usdcpay" target="_blank"  rel="noopener noreferrer">Moneymie for Business</a></li>
                    </ul>
                </div>
                <div className="footer-item">
                    <ul>
                        <li className="link-title">
                            Resources
                        </li>
                        <li><Link href="terms">Terms and Conditions</Link></li>
                        <li><Link href="privacy">Privacy Policy</Link></li>
                        <li><Link href="no-safe">No safe harbour for fraud</Link></li>
                        {/* <li><a href="#">Security</a></li> */}
                        
                    </ul>
                </div>
                <div className="footer-item">
                    <ul>
                        <li className="link-title">
                            CONTACT US
                        </li>
                        <li>
                            <a  href="mailto:hello@moneymie.com" target="_blank" rel="noopener noreferrer" className="contacticon" >
                                <img src="/images/@.png"/>
                            </a>
                            <a  href="https://facebook.com/moneymie/" target="_blank" rel="noopener noreferrer" className="contacticon">
                                <img src="/images/facebooknew.png" className="fb"/>
                            </a>
                            <a href="https://twitter.com/getMoneymie" target="_blank" rel="noopener noreferrer" className="contacticon">
                                <img src="/images/twitternew.png"/>
                            </a>
                            <a href="https://www.instagram.com/moneymieapp" target="_blank" rel="noopener noreferrer" className="contacticon">
                                <img src="/images/instanew.png"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-text">
                Moneymie is a financial technology company and not a bank. Moneymie offers its products and services in partnership with custodial wallet provider, Circle, banking software provider Sila and Evolve Bank & Trust (Member FDIC).  Crypto to fiat conversions are done via payout partners in compliance with rules in different jurisdictions.
                </div>
                <div className="footer-text">
                Digital currency is not legal tender, is not backed by any federal government and Moneymie accounts are not FDIC insured. While Moneymie and its custodial partners make every effort to keep your money safe and covered, please note that any purchase and use of digital dollars entails risk. 
                </div>
            </div>
        </div>
        </Fade>
    )
}
export default Footer;