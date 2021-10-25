import React from 'react';
import constants from './constants';
import { httpPost } from './requests';
const formsubmit = {};

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const submitEmail = async (email) => {
        const payload = { 
            "email":email,
            "waitlist-group-key":"moneymie-savings"
        };
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(payload);

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        await fetch("https://staging.moneymie.com/api/v2/public/user/waitlists", requestOptions)
        .then(response => response.json())
        .then(async (data)=>{
            if(data.status&&data.code==100){
                return true;
            }
            else {
                return data.message;
            }
        })
        .catch(error => { return false});
}
export {validateEmail, submitEmail};