import React,{Component} from 'react';
import Video from '../../assets/images/newimages/videoimg.png';


export default class HowItWorks extends Component {
    constructor(props){
        super();
        this.state = {
            openmodal:false
        }
        this.handleToggleModal = this.handleToggleModal.bind(this);
    }
    async handleToggleModal(){
        
        await this.setState({openmodal:!this.state.openmodal});
        // if(!this.state.openmodal){
        //     let player = document.getElementsByClassName('video-stream html5-main-video')[0];
        //     player.pause();
        // }
    }
    render(){
        return ( 

            <React.Fragment>
            <div className="how-itworks animated bounce">
                <h1>How Moneymie works</h1>
            <img src={Video} className="videosection" alt="How it works Image Placeholder" title="Watch How It works" onClick={this.handleToggleModal}/>
                
            </div>

            <div className={this.state.openmodal ? 'popupmodal' : 'hidden' }>
                <i className="fa fa-close" onClick={this.handleToggleModal}></i>
                <div className="popcontent">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/7cAQjU5dQkY" title="How Moneymie Works" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            </React.Fragment>
        )
    }
}