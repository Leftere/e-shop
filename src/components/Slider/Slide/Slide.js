import React from 'react';

const Slide = (props) => {
    console.log(props);
    return (
        <img src={props.slide} />
    )
        
}

export default Slide;