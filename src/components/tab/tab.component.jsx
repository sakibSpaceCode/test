import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import { useStyles, tabStyle } from './tab.style';
import { Paper } from '@material-ui/core';
import CONSTANTS from 'common/constants';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`
    };
}

const MovableTabComponent = (props) => {
    const { value, onChangeTab, tabList, tabPanelItem, tabPanelItemObj } = props;
    //tabList => Item which display on tab bar it should be array
    //tabPanelItem => pass as a prop name of component in array
    //tabPanelItemObj => pass component as a object
    //if any doudt please check add unit page

    const [flipped, setFlipped] = React.useState(false);
    const [rfidtag, setRfidTag] = React.useState(false);
    const classes = useStyles();
    const classesTab = tabStyle();
    return (
        <div className={classes.root} style={{ backgroundColor: 'transparent' }}>
            <Grid container justify="space-between" alignItems="center">
                <Grid item>
                    <Tabs
                        value={value}
                        onChange={onChangeTab}
                        aria-label="scrollable auto tabs example"
                        variant="scrollable"
                        scrollButtons="auto"
                        stickyHeader
                    >
                        {tabList &&
                            tabList.map((item, index) => {
                                return (
                                    <Tab
                                        key={index}
                                        label={item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()}
                                        {...a11yProps(index)}
                                        onClick={() => {
                                            setFlipped(!flipped);
                                            if (item !== 'BarCode') {
                                                setRfidTag(true);
                                            } else {
                                                setRfidTag(false);
                                            }
                                        }}
                                        className={value === index ? classesTab.tab1 : classesTab.tab2}
                                    />
                                );
                            })}
                    </Tabs>
                </Grid>
                {rfidtag && (
                    <Grid item>
                        <Typography variant="body2" color="primary" className={classes.text}>
                            {CONSTANTS.NAME_RFID_READER}
                            <span className={classes.span}>{CONSTANTS.NAME_SPACECODE_NUMBER}</span>
                        </Typography>
                    </Grid>
                )}
            </Grid>
            {/*<ReactCardFlip isFlipped={flipped}>*/}
            {tabPanelItem.map((item, index) => {
                return (
                    <Paper key={index} elevation="0" style={{ borderRadius: '0.3%' }}>
                        <TabPanel index={index} value={value}>
                            <List dense={false}>
                                <Grid container direction="row" justify="space-between" alignItems="center">
                                    {tabPanelItemObj[item]}
                                </Grid>
                            </List>
                        </TabPanel>
                    </Paper>
                );
            })}
            {/*</ReactCardFlip>*/}
        </div>
    );
};

export default MovableTabComponent;
