import React,{Component} from 'react';
import Video from '../../assets/images/videoimg.png';

export default class HowItWorks extends Component {
    render(){
        return ( 
            <div className="how-itworks">
                <h1>How Moneymie works</h1>
                <img src={Video} className="videosection" alt="How it works Image Placeholder" title="Watch How It works"/>
                
            </div>
        )
    }
}