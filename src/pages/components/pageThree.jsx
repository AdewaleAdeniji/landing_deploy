import React,{Component} from 'react';
import Frame from '../../assets/images/frame2.svg';

class PageThree extends Component {
    render(){
        return (
            <div className="pagetwo animated fadeInDown">
                <div className="col-md-12">
                    <div className="col-md-6 animated fadeInRight">
                        <img src={Frame}/>
                    </div>
                    <div className="col-md-6 animated fadeInLeft">
                        <h1>One App. Two Worlds.</h1>
                        <h6>Moneymie lets you do more than any other digital bank. SPEND, SAVE and INVEST in multiple currencies.</h6>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default PageThree;