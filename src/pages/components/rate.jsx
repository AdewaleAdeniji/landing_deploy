import React,{Component} from 'react';
import USA from '../../assets/images/usa.png';
import Nigeria from '../../assets/images/nigeria.png';
import RateArrow from '../../assets/images/ratearrow.png';
class Rate extends Component {
    render(){
        return (
            <div className="ratesection">
                <h1>
                    Today's Rate
                </h1>
                <div className="rates">
                    <div className="rate">
                        <div className="currency">
                            <h3>$1</h3>
                            <div className="currencyname">
                                <img src={USA}/> USD
                            </div>
                        </div>
                        <img src={RateArrow} className="ratearrow"/>
                        <div className="currency">
                            <h3>&#8358; 455 </h3>
                            <div className="currencyname">
                                <img src={Nigeria}/> NGN
                            </div>
                        </div>
                    </div>
                    <div className="rate">
                        <div className="currency">
                            <h3>&#8358; 455 </h3>
                            <div className="currencyname">
                                <img src={Nigeria}/> NGN
                            </div>  
                        </div>
                            <img src={RateArrow} className="ratearrow"/>
                        <div className="currency">
                            <h3>$1</h3>
                            <div className="currencyname">
                                <img src={USA}/> USD
                            </div>
                        </div>
                        
                       
                    </div>
                
                </div>
            </div>
        )
    }
}
export default Rate;