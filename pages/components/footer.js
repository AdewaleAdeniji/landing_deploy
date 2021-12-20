import React from 'react';
import Fade from 'react-reveal/Fade';
import Link from 'next/link';

const Footer = (props) => {
    return (
        <Fade duration={3000}bottom>
        <div className="footersection">
            <div className="footer-top">
                <div className="footer-item">
                    <img src="https://tech-244-new-design.d3std8zbt7sjj7.amplifyapp.com/static/media/moneymie-logo.e19bcead.png" alt="Moneymie Logo"/>
                </div>
                <div className="footer-item">
                    <ul>
                        <li className="link-title">
                            COMPANY
                        </li>
                        <li><a href="https://medium.com/moneymie" target="_blank"  rel="noopener noreferrer">Blog</a></li>
                        <li>
                            <a href="https://business.moneymie.com" target="_blank"  rel="noopener noreferrer">Moneymie for Business</a>
                        </li>
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
                                <img src="/images/@.png" alt="Email Icon"/>
                            </a>
                            <a  href="https://facebook.com/moneymie/" target="_blank" rel="noopener noreferrer" className="contacticon">
                                <img src="/images/facebooknew.png" className="fb" alt="Facebook Image"/>
                            </a>
                            <a href="https://twitter.com/getMoneymie" target="_blank" rel="noopener noreferrer" className="contacticon">
                                <img src="/images/twitternew.png" alt="Twitter Image"/>
                            </a>
                            <a href="https://www.instagram.com/moneymieapp" target="_blank" rel="noopener noreferrer" className="contacticon">
                                <img src="/images/instanew.png" alt="Instagram Icon"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-text">
                Moneymie is a financial technology company and not a bank. Moneymie offers its products and services in partnership with custodial wallet provider, Circle, banking software provider Sila and Evolve Bank & Trust (Member FDIC).  
                </div>
                <div className="footer-text">
                
                </div>
            </div>
        </div>
        </Fade>
    )
}
export default Footer;