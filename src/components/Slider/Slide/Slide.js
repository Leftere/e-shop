import React from "react";

const Slide = props => {
  console.log(props.slide);
  return <img alt="" src={props.slide} />;
};

export default Slide;
