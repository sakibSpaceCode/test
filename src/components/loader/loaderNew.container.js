import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        // marginTop: 10,
        // overflow: "auto",
        minWidth: 16,
        width: '98%'
    }
});

export default function Loader(props) {
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            {props.type === 'table' ? (
                <>
                    <Skeleton style={{ height: '35px' }} />
                    <Skeleton style={{ height: '35px' }} />
                    <Skeleton style={{ height: '35px' }} />
                    <Skeleton style={{ height: '35px' }} />
                    <Skeleton style={{ height: '35px' }} />
                    <Skeleton style={{ height: '35px' }} />
                    <Skeleton style={{ height: '35px' }} />
                    <Skeleton style={{ height: '35px' }} />
                    <Skeleton style={{ height: '35px' }} />
                    <Skeleton style={{ height: '35px' }} />
                </>
            ) : props.type === 'card' ? (
                <Skeleton variant="rect" style={{ height: '250px' }} />
            ) : (
                <>
                    <Skeleton style={{ height: '25px' }} />
                </>
            )}
        </Grid>
    );
}
