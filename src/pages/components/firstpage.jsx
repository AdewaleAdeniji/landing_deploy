import React,{Component} from 'react';
import AppStore from '../../assets/images/ios.png';
import PlayStore from '../../assets/images/android.png';
import MoneyMieApp from '../../assets/images/moneyapp.png';
import BgApp from '../../assets/images/bgmoney.png';
import DescImage from '../../assets/images/desc.png';

export default class Page extends Component {
    
    render(){
        return (
            <div className="pagedesc">
                <div className="col-md-12 col-12">
                    <div className="col-md-6 col-6 pagetext">
                        <h1>
                        The Digital Bank for African Migrants 
                        </h1>
                        <h6>
                        Open instant Naira and USD wallets. Experience seamless banking in Nigeria from the US. ZERO fees.
                        </h6>
                        <div className="appstores">
                        <a href='https://apps.apple.com/us/app/moneymie/id1538278032'>
                            <img src={PlayStore} alt="Google PlayStore"/>
                        </a>
                            <img src={AppStore} alt="Ios Playstore"/>
                        </div>
                    </div>
                    <div className="col-md-6 col-6 bgapp">
                        <img src={DescImage} className="bgimg"/>
                        
                    </div>
                </div>
            </div>
        )
    }
}