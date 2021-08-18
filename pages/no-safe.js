import Head from 'next/head'
import Image from 'next/image'
import React, {  useEffect } from 'react';
import styles from '../styles/Home.module.css'
import Layout from './components/Layout';
import HeaderNavBar from './components/Header';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Footer from './components/footer';

const Terms = (props) => {
    const Page_Title = 'No safe harbour for fraud';
    return (
        <Layout pageTitle={`${Page_Title} : Moneymie, digital bank for African migrants`}>
            <HeaderNavBar/>
            <div className="col-md-12 herosection">
            <Bounce left>
                <div className="col-md-6 termspage herotextarea">
                
                <div className="hero-title-text">
                    {Page_Title}
                </div>
           
            <div className='hero-sub-text'>
                <p>
                    Fraud occurs when someone gains, or has the potential to gain, something they are not entitled to through a lie, exaggeration, omission, or other type of deception. Fraud is harmful and it hurts. Moneymie maintains a zero tolerance for fraud. As such, we regard fraud committed against Moneymie users or aided using Moneymie’s technology or systems will be treated by extension as fraud against Moneymie.<br/>
                    Moneymie will take decisive appropriate action against any persons or entities suspected of engaging in fraudulent activity and will always cooperate with local and  international law enforcement agencies in pursuing suspected fraud cases and ensuring they face civil, administrative, and/or criminal actions. 
                </p>
            </div>
                         

            </div>
            </Bounce>
            </div>
            <Footer/>
        </Layout>
    )
}
export default Terms;