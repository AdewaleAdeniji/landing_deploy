import React,{Component} from "react";
import Logo from '../../assets/images/newimages/logo.png';
import {Link} from 'react-router-dom';
import NavLogo from '../../assets/images/navlogo.png';


export default class Header extends Component {
    
    state = {
        mobilemenu:false
    }
    toggleMenu(){
        //console.log(event.target,event.currentTarget);
        
            this.setState({mobilemenu:!this.state.mobilemenu});
        
    }
    handleToggle(event){
        if(event.target===event.currentTarget){
            this.toggleMenu();
        }
    }
    render(){
        return (
            <div>
            <nav className="navbar sticky-top landing animated fadeInDown">
            <Link className="navbar-brand" to="/">
                <img src={Logo} alt="Moneymie Logo"/>
            </Link>
            <button className="menubtn" onClick={this.toggleMenu.bind(this)}>
                <i className="fa fa-bars"></i>
            </button>
            <div className="navlinks">
            <a href="https://medium.com/moneymie" target="_blank"  rel="noopener noreferrer">
                       Blog
            </a>
            <a href="https://moneymie.link/usdcpay" target="_blank"  rel="noopener noreferrer">
                        Get Moneymie for Business <i className="fa fa-angle-right"></i>
            </a>
            </div>
        </nav>
        <div className={this.state.mobilemenu ? 'mobilenav' : 'hidden' } onClick={this.handleToggle.bind(this)}>
            <div className="navcontents">
                <header>
                    <img src={NavLogo} alt="Moneymie Logo"/>
                    <i className="fa fa-times" onClick={this.toggleMenu.bind(this)}></i>
                </header>
                <ul>
                    <li>
                        <a href="https://medium.com/moneymie" target="_blank"  rel="noopener noreferrer">
                                Blog
                        </a>
                    </li>
                    <li>
                        <a href="https://moneymie.link/usdcpay" target="_blank"  rel="noopener noreferrer">
                                Get Moneymie for Business <i className="fa fa-angle-right"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        </div>
        )
    }
}