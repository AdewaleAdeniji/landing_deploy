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
import Link from 'next/link';
import { login } from "../components/api";
import validator from "validator";
import { toast } from "react-toastify";
import { loginUser } from "../components/user";
import { useRouter } from "next/dist/client/router";
const Terms = (props) => {
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
  const Page_Title = "Login to Moneymie";
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const submit = async () => {
    if(!validator.isEmail(email)){
        return toast.warning('Please enter a valid email address');
    }
    setLoading(true);
    toast.loading('Logging you in...');
    const res = await login(email,password);
    toast.dismiss()
    setLoading(false);
    if(res.status===200){
        const data = res.data.data;
        const token = res.data.token;
        data.token = token;
        loginUser(data);
        history.push('/support');
        toast.success('Login Successful');
    }
    else {
        toast.error(res?.data?.message||'Unknown Error occured')
    }
  }
  return (
    <Layout pageTitle={`${Page_Title}`}>
      <HeaderNavBar />
      <div className="col-md-12 herosection loginsection">
        <div className="form-container">
            <h2>
            Login to your account <br/> to talk to an advisor 
            </h2>
            <div className="form-area">
                <FormField title="Email Address">
                    <input type="email" autoComplete="email" placeholder="Enter your Email Address" onChange={(e)=>setEmail(e.target.value)}/>
                </FormField>
                <FormField title="Password">
                    <input type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
                    <Link href="/forgot">Forgot Password</Link>
                </FormField>
                <button className='submit-form' onClick={submit} disabled={loading}>Login</button>
                <div className='m-text'>
                New here? <Link href="/signup">Create an Account</Link>
                </div>
                
            </div>
          
        </div>
      </div>
      <Footer />
    </Layout>
  );
};
export default Terms;
