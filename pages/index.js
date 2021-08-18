import Head from 'next/head'
import Image from 'next/image'
import React, {  useEffect } from 'react';
import styles from '../styles/Home.module.css'
import Layout from './components/Layout';
import HeaderNavBar from './components/Header';
import Hero from './components/HeroSection';
import Partners from './components/partners';
import SendUsd from './components/sendusd';
import TrustSignals from './components/trust';
import Reviews from './components/review';
import Download from './components/download';
import SendLinkForm from './components/sendlink';
import Footer from './components/footer';
import SendUSD from './components/sendusd2';


export default function Home() {
  useEffect(function() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-175808544-1');

    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '2443278019308080');
    fbq('track', 'PageView');
    
    (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/v63lode2';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
    window.intercomSettings = {app_id: "v63lode2"};
  }, []);
  return (
    <Layout pageTitle="Moneymie, digital bank for African migrants">
        <HeaderNavBar/>
        <Hero/>
        <Partners/>
        <SendUSD/>
        <SendUsd/>
        <TrustSignals/>
        <Reviews/>
        <Download/>
        <SendLinkForm/>
        <Footer/>
    </Layout>
  )
}
