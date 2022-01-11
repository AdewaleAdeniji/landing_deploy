import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";
import Layout from "./components/Layout";
import HeaderNavBar from "./components/Header";
import Hero from "./components/HeroSection";
import Partners from "./components/partners";
import SendUsd from "./components/sendusd";
import TrustSignals from "./components/trust";
import Reviews from "./components/review";
import Download from "./components/download";
import SendLinkForm from "./components/sendlink";
import Footer from "./components/footer";
import SendUSD from "./components/sendusd2";
import { logoutUser } from "../components/user";
import { useRouter } from "next/dist/client/router";
export default function Logout() {
    const history = useRouter();
    useEffect(()=>{
        logoutUser();
            history.push('/login');
        
    })
  return (
    <Layout pageTitle="Better Banking for African Migrants">
      <HeaderNavBar />
      <a className="hidden" id="my_custom_link"></a>
      <div className="col-md-12 herosection loginsection">
        <div className="form-container">
            <h2>
            Logging you out..
            </h2>
        </div>
        </div>
      <Footer />
    </Layout>
  );
}
