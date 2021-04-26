import React, {useState} from 'react';
import './LandingPage.css';
import Logo from '../assets/images/moneymie-logo.png';
import MobileApp from '../assets/images/mobile-app.png';
import Arrow from '../assets/images/arrow.png';
import Instagram from '../assets/images/instagram.png';
import AppStore from '../assets/images/appstore.png';
import PlayStore from '../assets/images/playstore.png';
import Telegram from '../assets/images/telegram.png';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Link} from 'react-router-dom';
import Email from '../assets/images/footer_email.png';
import FInstagram from '../assets/images/footer_instagram.png';
import Twitter from '../assets/images/footer_twitter.png';
import Facebook from '../assets/images/footer_facebook.png';

const useStyles = makeStyles(theme => ({
    'input': {
        '&::placeholder': {
            color: '#182CD1',
            opacity: '1'
        }
    }
}));

export const LandingPage = () => {
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({isError: false, message: ''});
    const [isSuccess, setIsSuccess] = useState(false);



    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const submitForm = (event) => {
        event.persist();
        setError({...error, isError: false});
        setIsSuccess(false);

        if(email === '') {
            setError({isError: true, message: 'Email or phone number is required.'});
            return;
        }

        if(isNaN(email)){
            if(!validateEmail(email)) {
                setError({isError: true, message: 'Please enter a valid email address.'});
                return;
            }
        }else{
            if(email.length >= 10 && email.length <= 11){

            }else{
                setError({isError: true, message: 'Please enter a valid phone number (1234567890, no +)'});
                return;
            }

            if(validatePhoneNumber(email)){
                setError({isError: true, message: 'Please enter a valid phone number (1234567890, no +)'});
                return;
            }
        }

       setError({isError: false, message: ''});
        setIsLoading(true);

        fetch(`https://staging.moneymie.com/api/v1/wait/add/${email}`, {
            method: 'post'
        })
            .then(response => response.json())
            .then(res => {
                if(res.code === 100){
                    setIsLoading(false);
                    setIsSuccess(true);
                }else{
                    setIsLoading(false);
                    setError({isError: true, message: res.message});
                }

            })
            .catch(error => {
                setIsLoading(false);
                setError({isError: true, message: 'Failed. Try again.'});
            })
    };

    const validatePhoneNumber = (number) => {
        let phoneRe = /^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
        let digits = number.replace(/\D/g, "");
        return phoneRe.test(digits);
    };

    function validateEmail(emailField){
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,20})$/;
        return reg.test(emailField) != false;
    }

    return (
        <div>
        <div className='container'>
            <div className='logo'><img src={Logo} alt='Moneymie logo'/>
            <h2>
                <a href="https://moneymie.link/usdcpay" target="_blank"  rel="noopener noreferrer">Get Moneymie for Business  <i class="fa fa-angle-double-right"></i> </a>
            </h2>
            
            </div>

            <div className='content'>
                <div>
                    <div className='title'>
                    Digital Bank for African Migrants 
                    </div>

                    <div className='description'>
                    Seamless banking across borders.
                    Instant NGN and USD wallets so you can bank in both worlds for FREE.
                    </div>

                    <div className='launching'>
                        Available to US persons only.
                    </div>

                    <div className='waitlist'>

                        <a href='https://apps.apple.com/us/app/moneymie/id1538278032'><img src={AppStore} alt={'App Store image'} style={{marginRight: '10px'}} /></a>
                        <a href='https://play.google.com/store/apps/details?id=moneymie.bank.nigeria.remit.sendmoney'><img src={PlayStore} alt={'Play Store image'} /></a>

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
                </div>
                <div className='mobile-app'>
                    <img src={MobileApp} alt='Moneymie Mobile App' className="imgapp"/>
                    
                </div>
            </div>
        </div>
        
        <div className='footer'>
            <div></div>
            <div className='bg1'></div>
            <div className='bg2'></div>
        </div>
    </div>
    );
};