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
import { isLoggedIn, getUser } from "../components/user";
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
  const Page_Title = "Your Moneymie Profile";
  var user = {}
  if (!isLoggedIn()) {
    if (typeof window !== "undefined") {
      window.location.href = "/login";
      toast.info('You are not logged in',{
        position:'bottom-center'
      })
    }
  }
  else {   
    user = getUser();
  }
  return (
    <Layout pageTitle={`${Page_Title}`}>
      <HeaderNavBar />
      <div className="col-md-12 herosection loginsection">
            <div className='profile-container'>
                <button onClick={()=>history.back()}>
                    <span>&larr;</span> Back
                </button>
                <h4>Your Profile Information</h4>
                <div className="profile-info">
                    <div className="profile-details">
                        <div className="profile-title">
                            First Name
                        </div>
                        <div className="profile-text">
                            {user?.firstname}
                        </div>
                    </div>
                    <div className="profile-details">
                        <div className="profile-title">
                        Last Name
                        </div>
                        <div className="profile-text">
                            {user?.lastname}
                        </div>
                    </div>
                    <div className="profile-details">
                        <div className="profile-title">
                            Email Address
                        </div>
                        <div className="profile-text">
                            {user?.email}
                        </div>
                    </div>
                    <div className="profile-details">
                        <div className="profile-title">
                            Phone Number
                        </div>
                        <div className="profile-text">
                            {user?.phone}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FloatingButton/>
      <Footer />
    </Layout>
  );
};
export default Terms;
