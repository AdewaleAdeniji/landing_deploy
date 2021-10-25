import React from 'react';
import constants from './constants';
import { httpPost } from './requests';
const formsubmit = {};

formsubmit.validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
formsubmit.submitEmail = (email) => {
    const payload = { 
        "email":email,
        "waitlist-group-key":"moneymie-savings"
    };
    httpPost(`${constants.API_URL}/api/v2/wait/lists`,payload)
    .then(response=>response.json())
    .then((data)=>{
        if(data.status&&data.code==100){
            return true;
        }
        else {
            return false;
        }
    })
    .catch((err)=>{
        throw err;
    })
}
export default formsubmit;