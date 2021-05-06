import React,{Component } from 'react';
import './index.css';
import Header from './components/header.jsx';
import Desc from './components/firstpage';
import Rate from './components/rate';
import PageTwo from './components/pageTwo';
import PageThree from './components/pageThree';
import HowItWorks from './components/howItWorks';
import Footer from './components/footer';

class Landing extends Component {


    render(){
            return (
                <div>
                    <Header/>
                    <Desc/>
                    <Rate/>
                    <PageTwo/>
                    <PageThree/>
                    <HowItWorks/>
                    <Footer/>
                </div>

            )
    }
}
export default Landing;