import React, { Component } from 'react';
import cdnbc from "../../assets/media/cnbc.png";
import bustleLogo from "../../assets/media/bustle-logo.png";
import cnnLogo from "../../assets/media/cnn-logo.png";
import furtuneLogo from "../../assets/media/furtune-logo.png";
import sharkTankLogo from "../../assets/media/shark-tank-logo.png";
import slateLogo from "../../assets/media/slate-logo.png";

import "./Footer.css"


class Footer extends Component {
 
   
    render () {
        return (
            <div className="Footer">
                <h2>FEATURED IN</h2>
                
                <div className="media">
                <img alt="sharkTankLogo" src={sharkTankLogo}/>
                <img alt="cnnLogo" src={cnnLogo}/>
                <img alt="slateLogo" src={slateLogo}/>
                <img alt="bustleLogo" src={bustleLogo}/>
                <img alt="cdnbc"  src={cdnbc}/>
                <img alt="furtuneLogo" src={furtuneLogo}/>
                </div>
                <div classname="footer-end">
                <div className="website">
                    <div>Our Fit</div>
                    <div>Ask Us</div>
                    <div>Terms of Service</div>
                    <div> Privacy Policy</div>
                    
                </div>  
                <div className="connect">
                    <div>Find Your Style Quiz</div>
                    <div>Instagram</div>
                    <div>Facebook</div>
                    <div>Twitter</div>
                </div>  
                <div className="company">
                    <div>Press Kit</div>
                    <div>Testimonials</div>
                </div>  
                <div></div>  
                <div></div>  
                 </div>
            </div>
            
        )
    }
}

export default Footer;