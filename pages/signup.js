import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Layout from "./components/Layout";
import HeaderNavBar from "./components/Header";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Footer from "./components/footer";
import FloatingButton from "./components/FloatButton";
import { FormField } from "../components/form";
import Link from "next/link";
import { countries } from "../components/countries";
import { countryNames } from "../components/countries";
import sortArray from "sort-array";
import { toast } from "react-toastify";
import { valid } from "joi";
import validator from "validator";
import moment from "moment";
import { passwordStrength } from "check-password-strength";
import { signup } from "../components/api";
import { useRouter } from "next/dist/client/router";
const Register = (props) => {
  const history = useRouter();
  const Page_Title = "Register an account on Moneymie";
  const allcountries = countries();
  const countrynames = countryNames();

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmailAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneCode, setCode] = useState("");
  const [country, setCountry] = useState("");
  const [dob, setDOB] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const register = () => {
    vali(firstname, lastname, email, phone, phoneCode, country, dob, password);
  };
  const vali = async (
    firstname,
    lastname,
    email,
    phone,
    phoneCode,
    country,
    dob,
    password
  ) => {
    ////console.log(dob);
    const passtext = 'Password should contain 8 characters, an uppercase, and at least one number';
   const  passwordstrength = passwordStrength(password);
   ////console.log(passwordstrength);
   const diff = moment().diff(moment(dob),'years');
   
   var pwd = passwordstrength.contains;
    if(passwordstrength.contains<2||passwordstrength.length<8){
      return toast.error(passtext);
    }
    else if(pwd.indexOf('uppercase')<0||pwd.indexOf('number')<0){
      return toast.error(passtext);
    }
    else if (firstname == "") {
      return toast.warning("First Name is empty");
    } else if (lastname == "") {
      return toast.warning("Last Name is empty");
    } else if (email == "" || !validator.isEmail(email)) {
      return toast.error("Please enter a valid email address");
    } else if (phone == "" || !validator.isNumeric(phone)) {
      return toast.error("Phone Number is empty or contains unsupported characters");
    }
    else if(phoneCode==""){
      return toast.error('Please choose your country dialing code');
    }
    else if(password!==confirmpassword){
      return toast.error('Password does match confirm password');
    }
    else if(phone.length<5){
      return toast.error('Invalid Phone Number length');
    }
    else if(country==''){
      return toast.error('Please choose your country of origin');
    }
    else if(dob==''){
      return toast.error('Date of Birth is empty');
    }
    else if(diff>100){
      return toast.error('Invalid Date of Birth');
    }
    else {
      ////console.log('good')
      //setLoading(true);
      const payload = {
        "password" : password,
        "firstName" : firstname,
        "lastName" : lastname,
        "email" : email,
        "dob" : dob,
        "phoneNumber" : phoneCode+phone,
        "country" : JSON.parse(country).countrycode
    }
    //console.log(payload);
    try {
      toast.loading('Signing up...');
    const register = await signup(payload);
    setLoading(false);
    toast.dismiss();
    //console.log(register);
    if(register.status==201){
      //console.log(register.data);
      toast.success('Account created successfully.');
      payload.password = '';
      localStorage.setItem('moneymie_landing_signup',JSON.stringify(payload));
      history.push('/verify-otp');
    }
    else {
      toast.error(register?.data?.message||'Error Occured while trying to create your account, please try again later');
    }
  }
  catch(err){
    setLoading(false);
    toast.dismiss();
    toast.error('Error Occured');
  }
    }
  };
  return (
    <Layout pageTitle={`${Page_Title}`}>
      <HeaderNavBar />
      <div className="col-md-12 herosection loginsection">
        <div className="form-container">
          <h2>
            Register an account <br />
            to speak to an advisor
          </h2>
          <div className="form-area">
            <h4>Lets get you started</h4>
            <div className="f-form">
              <FormField title="First Name" className="emaileft">
                <input
                  type="text"
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </FormField>
              <FormField title="Last Name">
                <input
                  type="text"
                  placeholder="Last name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </FormField>
            </div>

            <FormField title="Email Address">
              <input
                type="email"
                placeholder="Enter your Email Address"
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </FormField>
            <div className="form-field phoneInput">
              <label htmlFor="input">Phone Number</label>
              <div className="inputwrap">
                <select onChange={(e) => setCode(e.target.value)}>
                  <option value=""></option>
                  {allcountries.map((country, index) => {
                    return (
                      <option value={country.phone.split(",")[0]} key={index}>
                        {country.emoji} +{country.phone.split(",")[0]}
                      </option>
                    );
                  })}
                </select>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <FormField title="Date of Birth">
              <input
                type="date"
                placeholder="Last name"
                max={"2004-12-31"}
                min={"1900-01-01"}
                onChange={(e) => setDOB(e.target.value)}
              />
            </FormField>
            <FormField title="Country of Origin">
              <select onChange={(e) => setCountry(e.target.value)}>
                <option value=""></option>
                {countrynames.map((country, index) => {
                  return (
                    <option value={JSON.stringify(country)} key={index}>
                      {country.name}
                    </option>
                  );
                })}
              </select>
            </FormField>
            <FormField title="Password">
              <input
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <h6>
                Password should contain 8 characters, an uppercase, and at least
                one number
              </h6>
            </FormField>
            <FormField title="Confirm Password">
              <input
                type="password"
                placeholder="Confirm your password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </FormField>
            <button className="submit-form" onClick={register} disabled={loading}>
              {loading&&<i className="fa fa-spinner fa-spin"></i>}
              Continue
            </button>
            <div className="m-text shortinfo">
              By clicking on the continue button you agree to our &nbsp;
              <Link href="/terms">Terms & Conditions</Link>
            </div>
            <div className="m-text">
              Already have an account? <Link href="/login">Sign in</Link>
            </div>
          </div>
          <FloatingButton />
        </div>
      </div>
      <Footer />
    </Layout>
  );
};
export default Register;
