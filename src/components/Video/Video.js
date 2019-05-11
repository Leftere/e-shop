import React, { Component } from 'react';
import './Video.css'
class Video extends Component {
    render () {
        return (
          <div className="Video" >
            <iframe title="myFrame" src="https://www.youtube.com/embed/65QJOUCzfCI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        )
    }
}

export default Video;