import React from 'react';

import Dialog from '@material-ui/core/Dialog';

import DialogContent from '@material-ui/core/DialogContent';

// or
import { DialogTitle, Grid, makeStyles, Typography } from '@material-ui/core';
import { CONSTANTS } from 'common';

//import { CustomButtonStyles } from '../button/style';

const ConfirmationDialog = ({ dialogOpen, handleDialogClose, children, title, deleteLabel }) => {
    //const classes = CustomButtonStyles();

    const useStyles = makeStyles((theme) => ({
        typographyRed: {
            fontWeight: 400,
            textAlign: 'center',
            color: theme.palette.colors.red
        },
        typographyGray: {
            fontWeight: 400,
            textAlign: 'center',
            color: theme.palette.colors.gray.veryDarkGray
        }
    }));
    const classes = useStyles();
    return (
        <Dialog
            open={dialogOpen}
            onClose={handleDialogClose}
            maxWidth="sm"
            PaperProps={{
                style: {
                    borderRadius: '10px',
                    backgroundColor: CONSTANTS.COLOR_SECONDARY_MAIN,
                    padding: '25px 0px'
                }
            }}
        >
            <DialogTitle>
                <Grid container justify="center">
                    <Grid item xs={8}>
                        <Typography
                            variant="h5"
                            className={deleteLabel ? classes.typographyRed : classes.typographyGray}
                            // style={{
                            //     fontWeight: 400,
                            //     textAlign: 'center',
                            //     color: deleteLabel ? CONSTANTS.COLOR_FREE_SPEECH_RED : '#707070'
                            // }}
                        >
                            {title}
                        </Typography>
                    </Grid>
                </Grid>
            </DialogTitle>

            <DialogContent>{children}</DialogContent>
        </Dialog>
    );
};

export default ConfirmationDialog;
