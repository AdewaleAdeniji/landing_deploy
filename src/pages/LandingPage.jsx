import React, {useState} from 'react';
import './LandingPage.css';
import Logo from '../assets/images/logo.png';
import MobileApp from '../assets/images/mobile-app.jpg';
import Instagram from '../assets/images/instagram.png';
import Twitter from '../assets/images/twitter.png';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

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
        console.log(email.length);
        event.persist();
        setError({...error, isError: false});

        if(email === '') {
            setError({isError: true, message: 'Email or phone number is required.'});
            return;
        }

        if(isNaN(email)){
            if(!validateEmail(email) === false) {
                setError({isError: true, message: 'Please enter a valid email address.'});
                return;
            }
        }else{
            if(email.length >= 10 && email.length <= 11){

            }else{
                setError({isError: true, message: 'Please enter a valid phone number.'});
                return;
            }

            if(validatePhoneNumber(email)){
                setError({isError: true, message: 'Please enter a valid phone number.'});
                return;
            }
        }

       setError({isError: false, message: ''});
        setIsLoading(true);

        fetch(`https://beta.elta.com.ng/mailerlite/?email=${email}`)
            .then(response => {
                setIsLoading(false);
                setIsSuccess(true);
            })
            .catch(error => {
                setIsLoading(false);
                setError({isError: false, message: 'Failed. Try again.'});
            })
    };

    const validatePhoneNumber = (number) => {
        let phoneRe = /^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
        let digits = number.replace(/\D/g, "");
        return phoneRe.test(digits);
    };

    function validateEmail(emailField){
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,20})$/;

        return reg.test(emailField.email) != false;
    }

    return (
        <div>
        <div className='container'>
            <div className='logo'><img src={Logo} alt='Moneymie logo'/></div>

            <div className='content'>
                <div>
                    <div className='title'>
                        The digital bank for <br/>Nigerians in Diaspora
                    </div>

                    <div className='description'>
                        $ and ₦ wallets, transfers from $ to ₦ and back, Naira debit cards, savings and more...
                    </div>

                    <div className='launching'>
                        Launching in the US this fall.
                    </div>

                    <div className='waitlist'>
                        <div className='textfield'>
                            <TextField
                                id="outlined-helperText"
                                placeholder='Enter email address or US phone no.'
                                type='text'
                                variant="outlined"
                                fullWidth={true}
                                defaultValue={email}
                                error={error.isError}
                                onChange={handleChange}
                                InputProps={
                                    { classes: {input: classes['input']} }
                                }
                            />
                        </div>
                        <div className='join-waitlist' style={{backgroundColor: isLoading ? '#423AB9' : '#3A3391'}} onClick={submitForm}>
                            {
                                isLoading ? <CircularProgress size={30} color='white' /> : 'Join Waitlist'
                            }
                        </div>

                    </div>

                    {
                        error.isError &&
                        <div className='error'>
                            {error.message}
                        </div>
                    }

                    {
                        isSuccess &&
                        <div className='success'>
                            You’re in! We will inform you once we launch.
                        </div>
                    }

                    <div className='social-media'>
                        Follow us on instagram / twitter
                        <div>
                            <a href='http://instagram.com/moneymieapp' target='_blank'><img src={Instagram} alt='Instagram'/></a>
                        </div>
                        <div>
                            <a href='https://twitter.com/moneymieadvisor' target='_blank'><img src={Twitter} alt='Twitter'/></a>
                        </div>

                    </div>
                </div>
                <div className='mobile-app'>
                    <img src={MobileApp} alt='Moneymie Mobile App'/>
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