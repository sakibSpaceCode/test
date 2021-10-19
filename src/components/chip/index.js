import React from 'react';
import { CustomChipStyles } from './style';
import Chip from '@material-ui/core/Chip';
import { Grid } from '@material-ui/core';
const CustomChip = (props) => {
    const { dataArray, handleDelete } = props;
    const classes = CustomChipStyles();
    return (
        <Grid conainer>
            {dataArray && (
                <Grid className={classes.chipArray}>
                    {dataArray.map((data) => {
                        let icon;

                        return (
                            <Chip
                                key={data}
                                icon={icon}
                                label={data}
                                onDelete={handleDelete(data)}
                                className={classes.chip}
                            />
                        );
                    })}
                </Grid>
            )}
        </Grid>
    );
};

export default CustomChip;
