import React,{Component} from 'react';
import './easter.css';
import Header from './components/header.jsx';
import {Link} from 'react-router-dom';


export default class NoSafe extends Component {
    componentDidMount(){
        window.scroll(0,0);   
    }
    render(){
        return (
            <div className="allbody">
                
               <Header/>
               <div className="pagedesc terms">
                <div className="col-md-12 col-12">
                    <div className="col-md-12 col-12 pagetext animated fadeInUp">
                        <h1>
                        No Safe Harbour for Fraud
                        </h1>
                        
                        
                    </div>
                   
                </div>
            </div>
                <div class="faqs termsbox" id="faqs">
                    <h3 className="headertext">
                    No Safe Harbour for Fraud
                    </h3>
                    <div className="faqcontent">
                        <div className="faq terms">
                            
                            <div className='faqtext'>



                            Fraud occurs when someone gains, or has the potential to gain, something they are not entitled to through a lie, exaggeration, omission, or other type of deception. Fraud is harmful and it hurts. Moneymie maintains a zero tolerance for fraud. As such, we regard fraud committed against Moneymie users or aided using Moneymie’s technology or systems will be treated by extension as fraud against Moneymie.
Moneymie will take decisive appropriate action against any persons or entities suspected of engaging in fraudulent activity and will always cooperate with local and  international law enforcement agencies in pursuing suspected fraud cases and ensuring they face civil, administrative, and/or criminal actions. 



                            </div>
                        </div>
                    
                       
                    </div>
                </div>
                </div>
        )
    }
}

