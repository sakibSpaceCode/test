import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { datePickerStyles } from './date-picker.styles';

const DatePickerComponent = (props) => {
    const classes = datePickerStyles();
    const {
        value,
        handleDate,
        format,
        disableFuture,
        disablePast,
        disableToolbar,
        width,
        inputVariant,
        size,
        fontWeight,
        allowKeyboardControl,
        color,
        height,
        onFocus,
        onBlur,
        error,
        maxDate,
        helperText,
        minDate,
        variant,
        id,
        fontSize,
        placeholder,
        disabled
    } = props;
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                id={id}
                className={classes.root}
                value={value}
                autoOk={true}
                allowKeyboardControl={allowKeyboardControl}
                inputVariant={inputVariant}
                size={size}
                style={{ width: width }}
                format={format}
                onChange={handleDate}
                disableFuture={disableFuture}
                disablePast={disablePast}
                ampm={true}
                disableToolbar={disableToolbar}
                InputProps={{
                    disableunderline: 'true',
                    placeholder: placeholder ? placeholder : format,
                    style: {
                        fontWeight: fontWeight,
                        height: height,
                        fontSize: fontSize ? fontSize : '14px',
                        color: color,
                        backgroundColor: 'white'
                    }
                }}
                okLabel={'Done'}
                onBlur={onBlur}
                onFocus={onFocus}
                error={error}
                // helperText={error && `${CONSTANTS.INVALID} ${helperText}`}
                maxDate={maxDate}
                minDate={minDate}
                variant={variant}
                disabled={disabled}
            />
        </MuiPickersUtilsProvider>
    );
};

export default DatePickerComponent;
