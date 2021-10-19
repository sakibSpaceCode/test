import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { CustomButton, Filter } from 'common';
import VerticalDivider from 'components/verticalDivider';
import CustomIcon from '../../components/iconButton';
import samplePdf from '../../common/samplePdf.pdf';
import sampleExcel from '../../common/sampleExcel.xlsx';
import IconPDF from '../../assets/pdfIcon.svg';
import IconExcel from '../../assets/excelIcon.svg';
import { useStyles } from './style';

const HeaderIcons = (props) => {
    const {
        showIcons,
        handleDownloadData,
        label,
        handleOpenAdd,
        response,
        setFilterKeys,
        handleFilters,
        handleResetFilters,
        name,
        totalCount,
        filterCount
    } = props;
    const classes = useStyles();
    return (
        <Grid container alignItems={'flex-end'} justify={'flex-end'}>
            {showIcons.includes('excell') ? (
                <>
                    <Grid item className={classes.iconStyles}>
                        <a href={sampleExcel} download="sampleExcel.xlsx" onClick={handleDownloadData}>
                            <CustomIcon src={IconExcel} />
                        </a>
                    </Grid>
                    <Grid item>
                        <VerticalDivider />
                    </Grid>
                </>
            ) : null}

            {showIcons.includes('pdf') ? (
                <>
                    <Grid item className={classes.iconStyles}>
                        <a href={samplePdf} download="samplePdf.pdf">
                            <CustomIcon src={IconPDF} />
                        </a>
                    </Grid>
                    <Grid item>
                        <VerticalDivider />
                    </Grid>
                </>
            ) : null}

            {showIcons.includes('filters') ? (
                <>
                    <Grid item className={classes.iconStyles}>
                        <Filter
                            screenId={2}
                            response={response}
                            setFilterKeys={setFilterKeys}
                            handleFilters={handleFilters}
                            handleResetFilters={handleResetFilters}
                        />
                    </Grid>
                    <Grid item>
                        <VerticalDivider />
                    </Grid>
                </>
            ) : null}
            {showIcons.includes('addButton') ? (
                <Grid item className={classes.addButton}>
                    <CustomButton variant="contained" color="primary" fontsize={14} onClick={handleOpenAdd}>
                        Add {label}
                    </CustomButton>
                </Grid>
            ) : null}
        </Grid>
    );
};

export default HeaderIcons;
