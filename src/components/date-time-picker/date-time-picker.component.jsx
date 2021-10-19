/* eslint-disable no-useless-escape */

import React from 'react';
// import TodayIcon from '@material-ui/icons/Today';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDateTimePicker } from '@material-ui/pickers';
import { dateTimePickerStyles } from './date-time-picker.style';
import CONSTANTS from 'common/constants';
//import { TextField } from '@material-ui/core';

const DateTimePickerComponent = (props) => {
    const {
        value,
        handleDate,
        format,
        disableFuture,
        disablePast,
        disableToolbar,
        color,
        width,
        inputVariant,
        size,
        bgColor,
        height,
        helperTextLabel,
        error,
        allowKeyboardControl,
        maxDate,
        onBlur,
        onFocus,
        regx
        //     showInput
    } = props;
    const classes = dateTimePickerStyles();

    //  const renderInput = () => <TextField variant="outlined" type="text" onChange={(e) => console.log(e.target.value)} />;
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDateTimePicker
                className={classes.textFeild}
                value={value}
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
                maxDate={maxDate}
                //  inputValue = 'ss'
                refuse={regx ? /^[0-9-+()]*$/ : /[^\d]+/gi}
                //     mask={showInput ? '____________' : '__/__/____ __:__'}
                InputProps={{
                    disableunderline: 'true',
                    placeholder: 'DD/MM/YYYY hh:mm',

                    style: {
                        fontWeight: '500',
                        fontSize: '14px',
                        height: height,
                        color: color,
                        backgroundColor: bgColor
                    }
                }}
                error={error}
                helperText={error && `${CONSTANTS.INVALID} ${helperTextLabel}`}
                okLabel={'Done'}
                onBlur={onBlur}
                onFocus={onFocus}
                //    renderInput={renderInput}
                //     TextFieldComponent={renderInput}
            />
        </MuiPickersUtilsProvider>
    );
};

export default DateTimePickerComponent;
