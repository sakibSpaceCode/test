import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import noData from '../../assets/nodata.png';
import { useStyles } from './style';

const NoData = () => {
    const classes = useStyles();
    return (
        <Grid conainer align="center" spacing={3} className={classes.container}>
            <img src={noData} className={classes.img} />
            <Typography color="primary" variant="subtitle1" className={classes.typography}>
                No records found.
            </Typography>
        </Grid>
    );
};

export default NoData;
