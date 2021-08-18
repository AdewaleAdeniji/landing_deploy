import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
const ShowToast = (props) => {
    // console.log(props);
    // const [showToast,setToastShow] = useState(false);
    // if(showToast!=props.show){
    //     setToastShow(props.show);
    // }
    var showToast = props.show;
    const closeToast= () => {
        //setToastShow(false);
        // props.show = false;
    }
    
    console.log(showToast,props.show);
    return (
        <Fade top>
        <div id={props.show ? "toast-container" : 'hidden'} className="toast-top-right" onClick={closeToast}>
                <div className={!props.type ? "toast toast-success" : "toast toast-warning"} aria-live="polite">
                    <div className="toast-message">
                        {props.message}
                    </div>
                </div>
        </div>
        </Fade>
    )
}
export default ShowToast;