import React from 'react';
import Button from '@material-ui/core/Button';
import { CustomButtonStyles } from './style';

const CustomButton = (props) => {
    const classes = CustomButtonStyles();
    const { children, color, variant, fullWidth, onClick, disabled, type, fontsize, width } = props;
    return (
        <div>
            <Button
                variant={variant}
                disabled={disabled}
                fullWidth={fullWidth}
                color={color}
                onClick={onClick}
                className={classes.button}
                type={type}
                style={{ fontSize: fontsize && fontsize, width: width && width }}
            >
                {children}
            </Button>
        </div>
    );
};

export default CustomButton;
