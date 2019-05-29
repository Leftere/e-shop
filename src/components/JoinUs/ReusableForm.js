import React, { Component } from "react";
import "./JoinUs.css";

import ReusableInput from "./ReusableInput";

class JoinUs2 extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    // submit handler can be writter in parent and passed as prop just to be executed
    // if (this.props.submitter) {
    //   this.props.submitter(event.target.value);
    // }
    console.log("submit");
  }

  render() {
    return (
      <div className="JoinUs">
        <h3>{this.props.formTitle}</h3>
        <form onSubmit={this.handleSubmit}>
          {this.props.inputs ? (
            <>
              {this.props.inputs.map((inputData, i) => {
                const {
                  placeholder,
                  type,
                  defaultValue,
                  classNames
                } = inputData;
                return (
                  <ReusableInput
                    key={i}
                    placeholder={placeholder}
                    type={type}
                    defaultValue={defaultValue}
                    classNames={classNames}
                  />
                );
              })}
              <input
                className="btn"
                type="submit"
                value={this.props.buttonLabel}
              />
            </>
          ) : null}
        </form>
      </div>
    );
  }
}

export default JoinUs2;
