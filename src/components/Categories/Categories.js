import React, { Component } from 'react';
import springCollection from '../../assets/categories/ButtonSpring.jpg';
import buttonJeans from '../../assets/categories/ButtonJeans.jpg';
import springShirtsGreen from '../../assets/categories/EverydayShirtsGreen.jpg';

import './Categories.css';

class Categories extends Component {
    render() {
        return (
            // future components
            <ul className="Categories">
                <li><img src={springCollection} alt="springCollection" /></li>
                <li><img src={buttonJeans} alt="buttonJeans"/></li>
                <li><img src={springShirtsGreen} alt="spingShirtGreen"/></li>
            </ul>
        )
    }
}

export default Categories;