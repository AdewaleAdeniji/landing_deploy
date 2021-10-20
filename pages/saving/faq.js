import React,{Component} from 'react';

export default class FAQ extends Component {
    constructor(props){
        super();
        this.state = {
            faqone:true,
            faqtwo:false
        }
        this.handleToggle = this.handleToggle.bind(this);
        this.handleToggleAll = this.handleToggleAll.bind(this);
    }
    handleToggleAll(){
        this.setState({faqtwo:false,faqone:false})
    }
    handleToggle(num){
        this.handleToggleAll();
        if(num==1){
            this.setState({faqone:!this.state.faqone});
        }
        else if(num==2){
            this.setState({faqtwo:!this.state.faqtwo});
        }
        else if(num==3){
            this.setState({faqthree:!this.state.faqthree});
        }
        else {
            this.setState({faqfour:!this.state.faqfour});
        }
        
    }
    render(){
        return (
        <>
            <div className="col-md-12 faqsection">
                <div className="col-md-8 faqs">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faqcontent">
                        <div className="faq">
                            <div className="faqtitle" onClick={() => this.handleToggle(1)}>
                                Who can use this?
                                <i>{
                                        this.state.faqone  ? '-' : '+'
                                    }</i>
                            </div>
                            <div className={this.state.faqone  ? 'faqtext' : 'hidden'}>
                            Anyone outside the US.
                            </div>
                        </div>
                    
                        <div className="faq">
                            <div className="faqtitle" onClick={() => this.handleToggle(2)}>
                            What if my vendor is not on your list?
                                <i>{
                                        this.state.faqtwo  ? '-' : '+'
                                    }</i>
                            </div>
                            <div className={this.state.faqtwo  ? 'faqtext' : 'hidden'}>
                            We add new vendors on a rolling basis. Let us know about this vendor and we will let you know if we are able to add them or not.
                            As a guide, we only deal with notable vendors to avoid money laundering and other financial crimes. We also do not help with payments to related third parties or personal accounts.
                            </div>  
                        </div>
                        
                    </div>
                </div>
                <img src="/images/img-flash.svg" className="flash-bg-1 flash-3 navdesktop" alt="image flash"/>
            </div>
        </>
        )
    }
}