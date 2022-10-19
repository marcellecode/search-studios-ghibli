import React from "react";
import './input-field.css';

const InputField = ({ getInputFromComponent }) => {
  return (
    <div className="input-container">
      <input onChange={(event) => getInputFromComponent(event.target.value)} placeholder="Search"/>
    </div>
  );
};

export default InputField;
