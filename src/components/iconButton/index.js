import React from 'react';
import IconButton from '@material-ui/core/IconButton';

const CustomButton = (props) => {
    const { src } = props;
    return (
        <IconButton color="primary" component="span">
            <img src={src} alt={''} />
        </IconButton>
    );
};

export default CustomButton;
