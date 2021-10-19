import CheckboxComponent from './checkbox.component';
import React from 'react';

const Checkbox = (props) => {
    const { label, checked, size = 'small', handleChange, name } = props;

    return <CheckboxComponent label={label} size={size} handleChange={handleChange} checked={checked} name={name} />;
};

export default Checkbox;
