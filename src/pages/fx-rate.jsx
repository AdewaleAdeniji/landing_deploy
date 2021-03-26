import React, {useState,Component} from 'react';
import './LandingPage.css';
import './fxrate.css';
import Logo from '../assets/images/money.png';
import {httpGet} from './httpRequest';
import Swal from 'sweetalert2';

export default class FxRate extends Component {
    constructor(props){
        super();
        this.state = {
            buy:0,
            sell:0,
            datetoday:'',
            loaded:false,
            generated:false
        }
        this.generate = this.generate.bind(this);
    }
    async componentDidMount(){
        Swal.fire({
            text:'Fetching rates',
            footer:'<i class="fa fa-spinner fa-spin"></i>',
            allowOutsideClick:false,
            showConfirmButton:false,
            allowEscapeKey:false
        })
        var d = new Date();
        var month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";
        let monthname = month[d.getMonth()];
        let day = d.getDate();
        let year = d.getFullYear();
        let datestring = `${monthname} ${day}, ${year}`;
        this.setState({datetoday:datestring});
        await httpGet(`https://apis.moneymie.com/api/v1/wallet/forex`)
        .then(response=> response.json())
        .then((data)=>{
            if(data.status){
                this.setState({buy:data.data.buy});
                this.setState({sell:data.data.sell});
            }
            else {
                throw "error";
            }
        })
        .catch((err)=>{
            window.location.reload();
        })
        // Swal.fire({
        //     text:'Constructing Image',
        //     footer:'<i class="fa fa-spinner fa-spin"></i>',
        //     allowOutsideClick:false,
        //     showConfirmButton:false,
        //     allowEscapeKey:false
        // })
        
        //this.generate();
    }
    componentDidUpdate(){
        if(this.state.loaded){
            
            Swal.close();
            this.generate();
        }
    }
    loadImage(url) {
        return new Promise((resolve, revoke) => {
          let img = new Image()
          
          img.onload = () => {
            resolve(img)
          }
          
          img.crossOrigin = 'Anonymous'
          img.src = url
        })
    }
    sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
      }
    async generate() {
        
        //this.sleep(10000);
        if(this.state.loaded&&!this.state.generated){
            
            this.setState({generated:true});
            let canvas = document.createElement('canvas')
        
        canvas.height = 1000
        canvas.width  = 888
        
        let context = canvas.getContext('2d')
        //var poster = await this.loadImage('https://www.moneymie.com/static/media/money.72abcedc.png');
        
        //context.drawImage(poster, 0, 0);
        var img = this.refs.imge;
        
        context.drawImage(img, 0, 0, img.width,    img.height,     // source rectangle
                     0, 0, canvas.width, canvas.height);
        context.font = "bold 50px DM Sans"
        context.textAlign = 'center'
        context.textBaseline = 'top'
        context.fillStyle = "#fff";
        context.fillText('1.0', 245, 450);
        context.fillText(this.state.buy, 650, 450);
        context.fillText(this.state.sell, 245, 700);
        context.fillText('1.0', 650, 700);
        context.fillText(this.state.datetoday, 444, 200);
        this.refs.img.src = canvas.toDataURL('image/jpeg');
        canvas.toBlob(blob => {
          let data = window.URL.createObjectURL(blob)
          let link = document.createElement('a')
          link.href = data
          link.download ='rates-'+this.state.datetoday+'.jpg'
          link.click()
          }, 'image/jpeg')
          
        }
        
      }
      
    render(){
        return (
        <div>
        <div className="fullpage">
            <img src={Logo} className="img" id="img" ref="img"/>
            <img src={Logo} className="d-none" id="imge" ref="imge" onLoad={() => this.setState({loaded: true})}/>
        </div>
        <canvas ref="canvas" className="d-none"></canvas>
        </div>
        )
    }
}
