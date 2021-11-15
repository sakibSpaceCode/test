import CheckboxComponent from "./checkbox.component";
import React from "react";

const CustomCheckbox = (props) => {
  const {
    label,
    checked,
    size = "small",
    handleChange,
    name,
    defaultChecked,
  } = props;
  return (
    <CheckboxComponent
      label={label}
      size={size}
      handleChange={handleChange}
      checked={checked}
      name={name}
    />
  );
};

export default CustomCheckbox;
