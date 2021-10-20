import React,{useEffect, useState} from 'react';
import Fade from 'react-reveal/Fade';
import Joi from 'joi';
import Swal from 'sweetalert2'
// import toastr from 'toastr';
import { countries,getEmojiFlag } from 'countries-list';
import $ from "jquery";
import ShowToast from './toast';
import sortArray from 'sort-array';
// import { message } from 'statuses';
const SendLinkForm = (props) => {
    // console.log(JSON.stringify(countries));
    // console.log(countrieslist);
    
   
    const [countrylist, setList] = useState([]);
    const [usernumber,setPhoneNumber] = useState('');
    const [error,setError] = useState(false);
    const [active,setActiveButton] = useState(false);
    const [loading,setLoading] = useState(false)
    const [phoneCode,setPhoneCode] = useState("+1");
    const [countryCode,setCountryCode] = useState("us");
    const [showSelect,setSelect] = useState(false);
    const [showtoast,setToast] = useState(false);
    const [toastMessage,setMessage] = useState('');
    const [toastType,setToastType] = useState(false);
    
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
                if(st==searchTerm){
                    return true;
                }
            });
            setCountry(newc);
        }

    }
    return (
        <Fade duration={3000}bottom>
            <div className="sendsection">
            <div className="sendwrapper ghanas">
                <div className="sendtitle">
                Send money to Ghana the easy way. Create your Moneymie account.   
                </div>
                <div className="downloadbuttons">
                    <a href='https://play.google.com/store/apps/details?id=moneymie.bank.nigeria.remit.sendmoney'>
                        <img src="/images/ghana/android-app.png" alt="Android Download Image"/>
                    </a>
                    <a href='https://apps.apple.com/us/app/moneymie/id1538278032'>
                        <img className="ios" src="/images/ghana/ios.svg" alt="Ios Download Image"/>
                    </a>
                </div>
            </div>
            

        </div>
        <ShowToast message={toastMessage} type={toastType} show={showtoast}/>
        </Fade>
    )
}
export default SendLinkForm;