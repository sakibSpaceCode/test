import MovableTabComponent from './tab.component';
import React, { useState } from 'react';

const MovableTab = (props) => {
    const { tabList, tabPanelItem, tabPanelItemObj } = props;
    const [value, setValue] = useState(0);
    const onChangeTab = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <MovableTabComponent
            value={value}
            onChangeTab={onChangeTab}
            tabList={tabList}
            tabPanelItem={tabPanelItem}
            tabPanelItemObj={tabPanelItemObj}
        />
    );
};

export default MovableTab;
