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
            datetoday:''
        }
    }
    componentDidMount(){
        var d = new Date();
        var month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";
        let monthname = month[d.getMonth()];
        let day = d.getDay();
        let year = d.getFullYear;
        let datestring = `${monthname} ${day}, ${year}`;
        this.setState({datetoday:datestring});
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
            <img src={Logo} className="logo"/>
            <br/>
            <div className="dates">March 24,2021</div>
                <div className="col-md-12 cards">
                    <div className="col-md-6">
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
                    <div className="col-md-6">
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
        )
    }
}
