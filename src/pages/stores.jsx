import React,{Component} from 'react';
import './easter.css';
import Logo from '../assets/images/logo.png';
import {Link} from 'react-router-dom';
import ReactHtmlParser from "react-html-parser";

export default class EasterPromo extends Component {
    constructor(props){
        super();
        this.state = {
            showresponse:false, 
            failed:false,
            showButton:false,
            errorMessage:'',
            inputValue:'',
            buttonText:'Check User'
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleRetry = this.handleRetry.bind(this);
    }
    handleInput(event){
        let input = event.target.value;
        this.setState({inputValue:input});
        if(input.length>3){
            this.setState({showButton:true});
        }
        else {
            this.setState({showButton:false});
        }
    }
    handleRetry(){
        this.setState({
            showresponse:false, 
            failed:false,
            showButton:false,
            errorMessage:'',
            inputValue:'',
            buttonText:'Check User'
        })
    }
    handleCheck(e){
        e.preventDefault();
        if(this.state.showButton){
            this.setState({showButton:false,buttonText:'<i class="fa fa-spinner fa-spin"></i>'});
        }
        if(this.state.inputValue==="jesu"){
            this.setState({showresponse:true,failed:false,errorMessage:'Error'});
        }
    }
    render(){
        return (
            <div className="allbody">
                
                <nav class="navbar sticky-top store">
                    <Link class="navbar-brand" to="/">
                        <img src={Logo} alt="Moneymie Logo"/>
                    </Link>
                    
                </nav>
                <div className="moneymieintro store">
                    <div  className='introtext'>
                        In Store Rewards
                    </div>
                   
                </div>
                <div  className='how-it-works store' id="how-it-works">
                    <h3 className="hheader">
                            Check User details
                    </h3>
                    <div className={this.state.showresponse  ? 'hidden' : 'card-center'}>
                        <form onSubmit={this.handleCheck}>
                        <label>
                            Enter Phone Number, Email or Username :
                        </label>   
                        <input type="text" placeholder="Phone Number,Email or Username" value={this.state.inputValue} onChange={this.handleInput.bind(this)}/>
                        <button type="submit" value="Check User" className="checkbtn" disabled={!this.state.showButton}>{ReactHtmlParser(this.state.buttonText)}</button>
                        </form>
                    </div>
                    <div className={this.state.showresponse  ? 'card-center store' : 'hidden '}>
                    <div className="responses">
                            <div  className={this.state.failed  ? 'hidden' : 'namelabel'}>
                                DevFeranmi is confirmed
                            </div>
                            <div  className={this.state.failed  ? 'hidden' : 'confirmlabel'}>
                                <button className="rewardbtn">
                                    I have given reward 
                                </button>
                            </div>
                            <div className={this.state.failed  ? 'errorlabel' : 'hidden'}>
                               {this.state.errorMessage}
                            </div>
                            <button className="rewardbtn tryagain" onClick={this.handleRetry}>
                                    Try again <i className='fa fa-refresh'></i>
                            </button>
                        </div>
                   
                    </div>
                </div>
              
                 </div>
        )
    }
}

