import React,{Component} from 'react';
import AppStore from '../../assets/images/ios.png';
import PlayStore from '../../assets/images/android.png';
import MoneyMieApp from '../../assets/images/moneyapp.png';
import Email from '../../assets/images/footer_email.png';
import FInstagram from '../../assets/images/footer_instagram.png';
import Twitter from '../../assets/images/footer_twitter.png';
import Facebook from '../../assets/images/footer_facebook.png';
import FooterImage from '../../assets/images/newimages/f11a.png';
import {Link} from 'react-router-dom';
export default class Footer extends Component {
    render(){
        return (
            <footer>
                <div className="col-md-12 animated bounce">
                    <div class="col-md-6 animated fadeInLeft">
                        <h1>
                        Start banking without borders today. 
                        </h1>
                        <div className="appstores">
                            <a href='https://play.google.com/store/apps/details?id=moneymie.bank.nigeria.remit.sendmoney'>
                                <img src={PlayStore} alt="Google PlayStore"/>
                            </a>
                            <a href='https://apps.apple.com/us/app/moneymie/id1538278032'>
                                <img src={AppStore} alt="Ios Playstore"/>
                            </a>
                        </div>
                        <div className='social-media'>
                            <div className="row">
                                <h2>CONTACT US ON</h2>
                                <a href="mailto:hello@moneymie.com" target="_blank" rel="noopener noreferrer">
                                    <img src={Email}/>
                                </a>
                                <a href="https://facebook.com/moneymie/" target="_blank" rel="noopener noreferrer">
                                `<img src={Facebook}/>
                                </a>
                                <a href="https://twitter.com/getMoneymie" target="_blank" rel="noopener noreferrer">
                                    <img src={Twitter}/>
                                </a>
                                <a href="https://www.instagram.com/moneymieapp" target="_blank" rel="noopener noreferrer">
                                    <img src={FInstagram}/>
                                </a>
                            </div>
                            Moneymie is a financial technology company. Moneymie offers its products and services in partnership with banking software provider Sila and Evolve Bank & Trust (Member FDIC).

                        </div>
                        <div className="footerlinks">
                            <Link to="/terms">
                                Terms and Conditons
                            </Link>
                            <Link to="/privacy">
                                Privacy Policy
                            </Link>
                            <Link to="/nosafe">
                                No safe harbour for fraud
                            </Link>
                            <a href="#">
                                Security
                            </a>
                        </div>
                        <div className="mobilefooterlinks">
                        <Link to="/terms">
                                Terms and Conditons
                            </Link>
                            <Link to="/privacy">
                                Privacy Policy
                            </Link>
                        </div>
                        <div className="mobilefooterlinks">
                        <Link to="/nosafe">
                                No safe harbour for fraud
                            </Link>
                            <a href="#">
                                Security
                            </a>
                        </div>
                    </div>
                    <div class="col-md-6 animated shake">
                        <img src={FooterImage} className="footerimg"/>
                    </div>
                </div>
            </footer>
        )
    }
}