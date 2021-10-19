import { makeStyles } from '@material-ui/core';

export const dateTimePickerStyles = makeStyles(
    () => ({
        textFeild: {
            fontSize: '15px',
            '& .MuiOutlinedInput-input': {
                padding: '14px 12px'
            }
        }
    }),
    { index: 1 }
);
