import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
    makeStyles,
    Tooltip,
    Typography
} from '@material-ui/core';
import { CONSTANTS, CustomButton } from 'common';
import React from 'react';
import EditIcon from '@material-ui/icons/Edit';

const CustomDialog = (props) => {
    const {
        open,
        onClose,
        title,
        children,
        onCancelClick,
        onNextClick,
        onCompleteClick,
        onSaveClick,
        isSave,
        disabled,
        editDetails,
        setInputDisabled,
        inputDisabled,
        tabIndex
    } = props;

    const useStyles = makeStyles(() => ({
        typoGraphy: {
            fontWeight: 600,
            textTransform: 'capitalize'
        }
    }));

    const classes = useStyles();

    return (
        <Dialog
            open={open}
            maxWidth="md"
            PaperProps={{
                style: {
                    borderRadius: '10px',
                    backgroundColor: CONSTANTS.COLOR_SECONDARY_MAIN,
                    padding: 20,
                    minWidth: '950px'
                }
            }}
            onClose={onClose}
        >
            <DialogTitle>
                <Grid container justify="space-between">
                    <Typography color="primary" variant="h5" className={classes.typoGraphy}>
                        {title}
                    </Typography>
                    {editDetails && (
                        <Tooltip title="Edit Details">
                            <IconButton onClick={() => setInputDisabled(false)}>
                                <EditIcon color="primary" />
                            </IconButton>
                        </Tooltip>
                    )}
                </Grid>
            </DialogTitle>
            <DialogContent>{children}</DialogContent>
            {tabIndex !== 1 ? (
                <>
                    {editDetails ? (
                        <DialogActions style={{ marginTop: 10, marginRight: 20 }}>
                            <CustomButton onClick={onCancelClick} variant="outlined" color="primary">
                                {CONSTANTS.CANCEL}
                            </CustomButton>
                            {inputDisabled || (
                                <CustomButton onClick={onCancelClick} variant="contained" color="primary">
                                    {CONSTANTS.SAVE}
                                </CustomButton>
                            )}
                        </DialogActions>
                    ) : (
                        <DialogActions style={{ marginTop: 10, marginRight: 20 }}>
                            <CustomButton onClick={onCancelClick} variant="outlined" color="primary">
                                {CONSTANTS.CANCEL}
                            </CustomButton>
                            {isSave ? null : (
                                <CustomButton
                                    disabled={disabled}
                                    variant="contained"
                                    color="primary"
                                    onClick={onNextClick}
                                >
                                    {CONSTANTS.NEXT_RECORD}
                                </CustomButton>
                            )}
                            {isSave ? (
                                <CustomButton
                                    disabled={disabled}
                                    variant="contained"
                                    color="primary"
                                    onClick={onSaveClick}
                                >
                                    {CONSTANTS.SAVE}
                                </CustomButton>
                            ) : (
                                <CustomButton
                                    disabled={disabled}
                                    variant="contained"
                                    color="primary"
                                    onClick={onCompleteClick}
                                >
                                    {CONSTANTS.COMPLETE}
                                </CustomButton>
                            )}
                        </DialogActions>
                    )}
                </>
            ) : (
                <>
                    <DialogActions style={{ marginTop: 10, marginRight: 20 }}>
                        <CustomButton onClick={onCancelClick} variant="outlined" color="primary">
                            {CONSTANTS.CANCEL}
                        </CustomButton>
                        <CustomButton disabled={disabled} variant="contained" color="primary" onClick={onSaveClick}>
                            {CONSTANTS.SAVE}
                        </CustomButton>
                    </DialogActions>
                </>
            )}
        </Dialog>
    );
};

export default CustomDialog;
