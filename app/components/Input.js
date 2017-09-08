import React from "react";

const Input = ({onChange, value, type = "text"}) => (
   <input type={type} onChange={onChange} value={value} />
);

export default Input;