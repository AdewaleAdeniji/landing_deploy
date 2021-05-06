import React,{Component} from "react";
import Logo from '../../assets/images/logo.png';
import {Link} from 'react-router-dom';


export default class Header extends Component {
    render(){
        return (
            <nav class="navbar sticky-top landing">
            <Link class="navbar-brand" to="/">
                <img src={Logo} alt="Moneymie Logo"/>
            </Link>
            <div className="navlinks">
            <a href="https://moneymie.link/usdcpay" target="_blank"  rel="noopener noreferrer">
                        Get Moneymie for Business <i class="fa fa-angle-right"></i>
                </a>
            </div>
        </nav>
        
        )
    }
}