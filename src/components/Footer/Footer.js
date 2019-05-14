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
                <h2>Testing</h2>
                <div className="media">
                <img alt="sharkTankLogo" src={sharkTankLogo}/>
                <img alt="cnnLogo" src={cnnLogo}/>
                <img alt="slateLogo" src={slateLogo}/>
                <img alt="bustleLogo" src={bustleLogo}/>
                <img alt="cdnbc"  src={cdnbc}/>
                <img alt="furtuneLogo" src={furtuneLogo}/>
                </div>
            </div>
        )
    }
}

export default Footer;