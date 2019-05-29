import React, { Component } from "react";

export default class ReusableInput extends Component {
  render() {
    const { placeholder, type, defaultValue, classNames } = this.props;
    return (
      <label>
        <input
          className={`input-default-class ${classNames}`}
          placeholder={placeholder || ""}
          type={type || "text"}
          defaultValue={defaultValue || ""}
        />
      </label>
    );
  }
}
