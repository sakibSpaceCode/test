import React from 'react';
import { IconButton, InputAdornment, TextField } from '@material-ui/core';
import { useInputStyles } from './styles';

const CustomInput = (props) => {
    const classes = useInputStyles();

    const {
        name,
        label,
        value,
        onChange,
        size,
        focus,
        fullWidth,
        helperText,
        error,
        onFocus,
        onBlur,
        onEnterPress,
        width,
        bgColor,
        inputRef,
        textTransform,
        ref,
        id,
        Icon,
        disabled
    } = props;
    return (
        <TextField
            variant="outlined"
            error={error}
            helperText={helperText}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            id={id}
            className={size === 'md' ? classes.md : classes.lg}
            autoComplete="off"
            // autoFocus={focus}
            fullWidth={fullWidth}
            // inputProps={{ autoFocus: focus }}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    if (onEnterPress) {
                        onEnterPress();
                    }
                }
            }}
            style={{ width: width, backgroundColor: bgColor }}
            inputProps={{
                autoFocus: focus,
                style: {
                    textTransform: textTransform
                }
            }}
            onFocus={onFocus}
            onBlur={onBlur}
            inputRef={inputRef}
            ref={ref}
            disabled={disabled}
            InputProps={{
                endAdornment: Icon && (
                    <InputAdornment position="end">
                        <IconButton>
                            {' '}
                            <Icon />
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    );
};
export default CustomInput;
