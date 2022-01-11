import axios from "axios";
import { loginUser } from "./user";
const api_url = 'https://staging.moneymie.com/api/v1/';
const base_api_url = 'https://staging.moneymie.com/api/v2/';

export const login = async (email,password) => {
    try {
        const res = await axios.post(`${api_url}user/login`,{email,password})
        return res;
    }
    catch(err){
        return err.response;
    }
}
export const signup  = async (payload) => {
    try {
        const res = await axios.post(`${base_api_url}user/app/create`,payload)
        return res;
    }
    catch(err){
        return err.response;
    }
}
export const verifyOTPcode =  async (otp) => {
    try {
        const res = await axios.get(`${base_api_url}user/validateVerificationOTP?token=${otp}`)
        return res;
    }
    catch(err){
        return err.response;
    }
}