import React,{useEffect, useState} from 'react';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Joi from 'joi';
import Swal from 'sweetalert2'
import { countries,getEmojiFlag } from 'countries-list';
import ShowToast from './toast';
import sortArray from 'sort-array';
import Typewriter from 'typewriter-effect/dist/core';

const Hero =  (props) => {
    const [active,setActiveButton] = useState(false);
    const [loading,setLoading] = useState(false)
    const [phoneCode,setPhoneCode] = useState("+1");
    const [countryCode,setCountryCode] = useState("us");
    const [showSelect,setSelect] = useState(false);
    const [showtoast,setToast] = useState(false);
    const [toastMessage,setMessage] = useState('');
    const [toastType,setToastType] = useState(false);
    useEffect(()=>{
       
        
        var app = document.getElementById('subtext');

        // var typewriter = new Typewriter(app, {
        // loop: true,
        // delay: 75,
        // });
        // typewriter
        // .pauseFor(1000)
        // .typeString('Send and receive digital dollars with <span style="color: #533DB5;">anyone</span> anywhere, make online payments and earn yield.')
        // .pauseFor(1000)
        // .deleteAll()
        // .typeString('Every cent saved by a <span style="color: #533DB5;">migrant</span> helps do more back home. So we built a bank that helps migrants thrive everywhere. <strong>Zero monthly fees. Zero remittance fees. </strong>')
        // .pauseFor(1000)
        // .start();


    },[])
    const HandleNumberChange = async (e) => {
        setPhoneNumber(e.target.value);
        const usernum = e.target.value=='' ? '' : e.target.value
        const number = Joi.number();
        try {
            if(usernum!=''){
                await number.validateAsync(usernum)
                setPhoneNumber(usernum);
                // console.log('here');
                setActiveButton(true);
            }
        }
        catch(err){
            setActiveButton(false);
            setError(true);
            inform('Please ensure your input contains valid phone number',true)
        }
        
    }
    const inform = (message,type) => {
        setToast(true);
        setToastType(type ? type : false);
        setMessage(message);
        // Swal.fire({
        //     icon: type ? 'error' : 'success',
        //     text:message,
        //     showConfirmButton:false
        // })
        setInterval(()=>{
            setToast(false);
        },5000)
    }
    const SendSMS = (props) => {
    if(usernumber.length<6){
        setActiveButton(false);
    }
    else if(usernumber!=''){
        
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
        "phone": usernumber,
        "country": countryCode
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };
        setLoading(true);
        fetch("https://apis.moneymie.com/api/v2/public/route/sendDownloadLink", requestOptions)
        .then(response => response.json())
        .then(result => {
            setLoading(false);

            if(result.code==100&&result.status){
                inform("Download link has been sent to your phone number");
                setPhoneNumber('');
                setActiveButton(false);
            }
            else {
                throw "Download Link failed to send to your number, Please check and try again";
            }
        })
        .catch(error =>{
            setLoading(false);
            inform("Error Occured",true)
        });
        }
        else {
            inform("Please fill in your number and ensure remove your country code",true);
        }
    }
    const handleFillInput = () => {
        setPhoneNumber(phoneCode);
    }
    const handleClickCountry = (e) => {
        
        let countrydata = e.target.attributes.getNamedItem('data-country').value;
        let country = e.target.attributes.getNamedItem('data-val').value;
        // console.log(countrydata,val);
        setSelect(false);
        var countryarray = country.split(":");
        var phonecode = "+"+countryarray[0];
        var countrycode = (countryarray[1]).toLowerCase();
        setPhoneCode(phonecode);
        setCountryCode(countrycode);
        setPhoneNumber(phonecode);
    }
    const handleCountries = (country) => {
        setSelect(true);
        // document.getElementById("selectcountry").click();
    }
    const countryChange = (e) => {
        let country = e.target.value;
        setSelect(false);
        var countryarray = country.split(":");
        var phonecode = "+"+countryarray[0];
        var countrycode = (countryarray[1]).toLowerCase();
        setPhoneCode(phonecode);
        setCountryCode(countrycode);
    }
    const searchForm = (e) => {
        const searchTerm = e.target.value;
        if(searchTerm==''){
            setCountry(countrylist);
        }
        else {
            const countries = co;
            const len = searchTerm.length;
            const newc = countries.filter((country) =>{
                const st = country.name.substr(0,len).toLowerCase();
                console.log(st,searchTerm,len);
                if(st==searchTerm){
                    return true;
                }
            });
            setCountry(newc);
        }

    }
    return (
        <>
        <div className="col-md-12 herosection sa">
            <Bounce left>
                <div className="col-md-12 herotextarea">
                
                <h1 className="hero-title-text">
                 The fastest and easiest way to send money to South Africa
                </h1>
                <h6 className="hero-sub-text" id="subtext">
                 No hidden fees, no ridiculous delays. Thousands of Africans in the US trust us.
                </h6>
                <div className="downloadbuttons">
                    <a href='https://play.google.com/store/apps/details?id=moneymie.bank.nigeria.remit.sendmoney'>
                        <img src="/images/androidownload.svg" alt="Android Download Image"/>
                    </a>
                    <a href='https://apps.apple.com/us/app/moneymie/id1538278032'>
                        <img className="ios" src="/images/iosdownload.svg" alt="Ios Download Image"/>
                    </a>
                    <button className="btn btn-how-it-works">
                        <i className="fa fa-play"></i> See How It works
                    </button>
                </div>
        
                <div className="hero-smalltext">
                    No government ID required to get started.
                </div>
            </div>
            </Bounce>
            
        </div>
        <ShowToast message={toastMessage} type={toastType} show={showtoast}/>
        </>
    )
}
export default Hero;