import React from "react";
import ReusableForm from "../JoinUs/ReusableForm";

const Newsletter = () => {
  const joinUsProps = {
    formTitle:
      "GET EXCLUSIVE PROMOTIONS, PRODUCT UPDATES, AND MORE BY SIGNING UP FOR OUR NEWSLETTER",
    buttonLabel: "JOIN US",
    inputs: [
      {
        type: "text",
        defaultValue: "this is a value that will be prepopulated if necessary",
        placeholder: "Email Address",
        classNames: "input-1 this-is-input input-input-input"
      }
      // // your can use multiple inputs, just make sure that the data structure for each input is the same
      // {
      //   type: "password",
      //   defaultValue: "pre-saved password? :D",
      //   placeholder: "Your Password",
      //   classNames: "input-2 this-is-password password-password-password"
      // }
    ]
  };
  const { formTitle, inputs, buttonLabel } = joinUsProps;

  return (
    <ReusableForm
      formTitle={formTitle}
      inputs={inputs}
      buttonLabel={buttonLabel}
    />
  );
};

export default Newsletter;
