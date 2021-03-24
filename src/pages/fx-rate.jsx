import React, {useState,Component} from 'react';
import './LandingPage.css';
import './fxrate.css';
import Logo from '../assets/images/moneymie-logo.png';
import USA from '../assets/images/usa.svg';
import Nigeria from '../assets/images/nigeria.svg';
import {httpGet} from './httpRequest';

export default class FxRate extends Component {
    constructor(props){
        super();
        this.state = {
            buy:0,
            sell:0,
        }
    }
    componentDidMount(){
        httpGet(`https://staging.moneymie.com/api/v1/wallet/forex`)
        .then(response=> response.json())
        .then((data)=>{
            if(data.status){
                this.setState({buy:data.data.buy});
                this.setState({sell:data.data.sell});
            }
            else {
                throw "error";
            }
        })
        .catch((err)=>{
            window.location.reload();
        })
    }
    render(){
        return (
        <div className="fullpage">
           <div className="container">
            <div className="bglogo">
                <div className="bg-logo">
                    <img src={Logo}/>
                </div>
            </div>
               
               <div className="col-md-10 cardsection">
                    <div className="datesection">
                        March 20,2021
                    </div>
                    <div className="ratescard">
                        <div className="col-md-12">
                            <div className="col-md-10">
                                <div className="cardrate">
                                    <img src={USA} width="40px" height="40px"/>
                                    <div className="cardbody">
                                        <div className="amount">1.00</div>
                                        <div className="country">USD</div>
                                    </div>
                                </div>
                                <div className="cardratearrow">
                                    <i className="fa fa-arrow-right"></i>
                                </div>
                                <div className="cardrate">
                                    <img src={Nigeria} width="40px" height="40px"/>
                                    <div className="cardbody">
                                        <div className="amount">{this.state.sell}</div>
                                        <div className="country">NGN</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-10">
                            <div className="cardrate">
                                    <img src={Nigeria} width="40px" height="40px"/>
                                    <div className="cardbody">
                                        <div className="amount">{this.state.buy}</div>
                                        <div className="country">NGN</div>
                                    </div>
                                </div>
                                <div className="cardratearrow">
                                    <i className="fa fa-arrow-right"></i>
                                </div>
                                <div className="cardrate">
                                    <img src={USA} width="40px" height="40px"/>
                                    <div className="cardbody">
                                        <div className="amount">1.00</div>
                                        <div className="country">USD</div>
                                    </div>
                                </div>
                                
                               
                            </div>
                        </div>
                    </div>
               </div>   
           </div>
        </div>
        )
    }
}
