import React from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";

const CheckboxComponent = (props) => {
  const { size, checked, defaultChecked, handleChange, label, name } = props;
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={handleChange}
          color='primary'
          size={size}
          name={name}
        />
      }
      label={label}
    />
  );
};

export default CheckboxComponent;
