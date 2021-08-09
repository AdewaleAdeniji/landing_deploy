import React,{Component} from 'react';

export default class VideoPop extends Component {
    constructor(props){
        super();
        this.state = {
            open:props.open,
        }
        console.log(this.state.open);
    }
    handleClose(){

    }
    render(){
        return (
        <div className={this.state.open ? 'popupmodal' : 'hidden' }>
            <div className="popcontent">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/7cAQjU5dQkY" title="How Moneymie Works" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        )
    }
}