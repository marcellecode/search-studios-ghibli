import React from "react";

const InputField = ({ getInputFromComponent }) => {
  return (
    <>
      <input onChange={(event) => getInputFromComponent(event.target.value)} />
    </>
  );
};

export default InputField;
