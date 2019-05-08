import React, { Component } from 'react';
import { ReactComponent as Logo } from '../../assets/logo/logo.svg';
import Shop from './Shop/Shop'
import './Header.css'
import '../../assets/logo/logo.css'


//eslint-disable-next-line
class Header extends Component {
    render () {
        return (
            <div className="Header">
                <Logo className="Logo"/>
                
                <ul>
                    <li>  <Shop /></li>
                    
                    <li><a href="#">Gift Cards</a></li>
                    <li><a href="#">Our Fit</a></li>
                    <li><a href="#">Ask Us</a></li>
                    <li  id="card"><a href="#"><i className="fa fa-shopping-cart"></i>Card (0) Items</a></li>
                
                    
                </ul>
                
                
                

            </div>
        )
    }
}


export default Header;