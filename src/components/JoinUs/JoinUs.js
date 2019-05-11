import React, { Component } from 'react';
import './JoinUs.css';

class JoinUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
        title: "GET EXCLUSIVE PROMOTIONS, PRODUCT UPDATES, AND MORE BY SIGNING UP FOR OUR NEWSLETTER",
        value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault()
        alert("has been submited");
        
    }

    render() {
        return( 
            <div className="JoinUs">
                <h3>{this.state.title}</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" placeholder="Email address" onChange={this.handleChange} value={this.state.value} />
                    </label>
                    <input className="btn" type="submit" value="JOIN US" />
                    
                </form>
            </div>
        )
    }
}

export default JoinUs;