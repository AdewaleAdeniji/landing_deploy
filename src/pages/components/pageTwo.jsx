import React,{Component} from 'react';
import Frame from '../../assets/images/frame1.svg';

class PageTwo extends Component {
    render(){
        return (
            <div className="pagetwo animated fadeInUp">
                <div className="col-md-12">
                    <div className="col-md-6 animated fadeInLeft">
                        <h1>Bank like you never left. </h1>
                        <h6>We are the first borderless bank for Nigerians anywhere. Our multi-currency wallets allow you to spend in Naira from the US.</h6>
                    </div>
                    <div className="col-md-6 animated fadeInRight">
                        <img src={Frame}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default PageTwo;