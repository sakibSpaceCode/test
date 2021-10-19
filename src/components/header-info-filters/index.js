import React, { useState } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import headerData from './Header.json';
import { headerInfoStyles } from './style';

const HeaderInfo = () => {
    const classes = headerInfoStyles();
    const [selectedButton, setSelectedButton] = useState('');

    const handleButton = (index) => {
        setSelectedButton(index);
    };

    return (
        <Grid container>
            <Grid xs={8} item>
                {headerData.data.map((item, index) => (
                    <Grid
                        className={index < headerData.data.length - 1 ? classes.infoGrid : classes.infoGridlast}
                        key={index.toString()}
                    >
                        <Typography variant="h5" color="primary" align="center" className={classes.leftGridValue}>
                            {item.value}
                        </Typography>
                        <Typography align="center" variant="subtitle1">
                            {item.label}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
            <Grid xs={4} item className={classes.buttonsGrid}>
                {headerData.filters.map((item, index) => (
                    <Button
                        key={index.toString()}
                        className={selectedButton !== index ? classes.buttonStyles : classes.selectedButtonStyles}
                        onClick={() => handleButton(index)}
                    >
                        <Typography variant="h4">{item.value}</Typography>
                        <Typography variant="caption">{item.label}</Typography>
                    </Button>
                ))}
            </Grid>
        </Grid>
    );
};

export default HeaderInfo;
