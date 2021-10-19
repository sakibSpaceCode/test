import React, { useEffect, useState } from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import pageNotFoundImg from '../../assets/404.svg';
import { CONSTANTS, CustomButton } from 'common';
import { useHistory } from 'react-router';
const useStyles = makeStyles((theme) => ({
    mainContainer: {
        width: '55%',
        margin: '0 auto',
        alignItems: 'center',
        gap: '-20px'
    },
    typoGraphy: {
        fontWeight: 'bold',
        color: theme.palette.primary.main
    },
    typoGraphySub: {
        color: theme.palette.label.main,
        marginLeft: -95,
        marginTop: 10
    },
    image: {
        width: '180%',
        marginLeft: '100'
    },
    mainHeading: {
        width: '40%'
    },
    gridImage: {
        width: '55%',
        marginLeft: -150
    },
    backBtn: {
        marginTop: 40,
        marginLeft: -120
    }
}));
const PageNotFound = () => {
    const classes = useStyles();
    const history = useHistory();

    const handleClick = () => {
        history.push('/dashboard');
    };
    return (
        <>
            <Grid container className={classes.mainContainer} align="center">
                <Grid item className={classes.mainHeading}>
                    <Typography variant="h3" className={classes.typoGraphy}>
                        {CONSTANTS.IS_EMPTY}
                    </Typography>
                    <Typography variant="body2" className={classes.typoGraphySub}>
                        {CONSTANTS.IS_EMPTY_SUBHEADING}
                    </Typography>
                    <div className={classes.backBtn}>
                        <CustomButton variant="outlined" color="primary" onClick={handleClick}>
                            Back to Dashboard
                        </CustomButton>
                    </div>
                </Grid>
                <Grid item className={classes.gridImage}>
                    <img src={pageNotFoundImg} alt="notFound" className={classes.image} />
                </Grid>
            </Grid>
        </>
    );
};

export default PageNotFound;
