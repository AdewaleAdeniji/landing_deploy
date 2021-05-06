import React,{Component} from 'react';
import USA from '../../assets/images/usa.png';
import Nigeria from '../../assets/images/nigeria.png';
import RateArrow from '../../assets/images/ratearrow.png';
import {httpGet} from '../httpRequest';
class Rate extends Component {
    constructor(props){
        super();
        this.state = {
            buy:0,
            sell:0,
            rates:false
        }
        
    }
    async componentDidMount(){
       
        await httpGet(`https://apis.moneymie.com/api/v1/wallet/forex`)
        .then(response=> response.json())
        .then((data)=>{
            if(data.status){
                
                this.setState({buy:data.data.buy,sell:data.data.sell,rates:true});
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
            <div  className={!this.state.rates  ? ' hidden' : 'ratesection'}>
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
                            <h3>&#8358; {this.state.buy} </h3>
                            <div className="currencyname">
                                <img src={Nigeria}/> NGN
                            </div>
                        </div>
                    </div>
                    <div className="rate">
                        <div className="currency">
                            <h3>&#8358; {this.state.sell} </h3>
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