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
import OtpInput from "react-otp-input";
import { useRouter } from "next/dist/client/router";
import { toast } from "react-toastify";
import { verifyOTPcode } from "../components/api";
import { loginUser } from "../components/user";
const VerifyOTP = (props) => {

  useEffect(function () {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "UA-155055672-1");

    // window.dataLayer = window.dataLayer || [];
    // function gtag(){dataLayer.push(arguments);}
    // gtag('js', new Date());

    // gtag('config', 'UA-155055672-1');

    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );
    fbq("init", "2443278019308080");
    fbq("track", "PageView");

    (function () {
      var w = window;
      var ic = w.Intercom;
      if (typeof ic === "function") {
        ic("reattach_activator");
        ic("update", w.intercomSettings);
      } else {
        var d = document;
        var i = function () {
          i.c(arguments);
        };
        i.q = [];
        i.c = function (args) {
          i.q.push(args);
        };
        w.Intercom = i;
        var l = function () {
          var s = d.createElement("script");
          s.type = "text/javascript";
          s.async = true;
          s.src = "https://widget.intercom.io/widget/v63lode2";
          var x = d.getElementsByTagName("script")[0];
          x.parentNode.insertBefore(s, x);
        };
        if (w.attachEvent) {
          w.attachEvent("onload", l);
        } else {
          w.addEventListener("load", l, false);
        }
      }
    })();
    window.intercomSettings = {
      app_id: "v63lode2",
      custom_launcher_selector: "#my_custom_link",
    };
  }, []);
  const history = useRouter();
  const Page_Title = "Verify otp to Moneymie";
  const [otp, setOTP] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (otp) => {
    setOTP(otp);
  };
  var signup = {};
  if (typeof window !== "undefined") {
    const profile = localStorage.getItem("moneymie_landing_signup");
    console.log(profile);
    if (profile) {
      signup = JSON.parse(profile);
    } else {
      history.push("/signup");
    }
  }
  const verifyCode = async () => {
    if (otp.length !== 4) {
      return toast.error("OTP must be four characters in length");
    } else {
      try {
        //setLoading(true);
        toast.loading('Verifying OTP...');
        const verify = await verifyOTPcode(otp);
        setLoading(false);
        toast.dismiss();
        console.log(verify);
        if(verify.status==200){
          const res = verify;
          const data = res.data.data;
        const token = res.data.token;
        data.token = token;
        loginUser(data);
        toast.success('Account Verified Successfully.');
        setTimeout(()=>{
          history.push('/support');
        },2000);
        }
        else {
          toast.error(verify?.data?.message=='OTP not found'?'Invalid OTP code':verify?.data?.message||'Error Occured while trying to create your account, please try again later');
        }
      } catch (err) {
        toast.dismiss();
        toast.error("Error Occured");
        setLoading(false);
        return;
      }
    }
  };
  return (
    <Layout pageTitle={`${Page_Title}`}>
      <HeaderNavBar />
      <div className="col-md-12 herosection loginsection">
        <div className="form-container">
          <h2>Enter OTP code</h2>
          <div className="form-area">
            <div className="m-text">
              A one time password has been sent to +{signup?.phoneNumber}.
              <br /> Please enter the code to proceed.
            </div>

            <FormField className="otp">
              <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={4}
                separator={<span></span>}
              />
            </FormField>
            <button className="submit-form" onClick={verifyCode}>
              {loading && <i className="fa fa-spinner fa-spin"></i>}Verify Code
            </button>
            {/* <div className="m-text">
              Didn&#39;t get the code? <Link href="/signup">Verify Code</Link>
              
            </div>
            <button>Edit your phone Number</button> */}
          </div>
          <FloatingButton />
        </div>
      </div>
      <Footer />
    </Layout>
  );
};
export default VerifyOTP;
