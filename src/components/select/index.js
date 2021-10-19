import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
//import MenuList from '@material-ui/core/MenuList';
import { MenuStyles } from './styles';
import { FormHelperText } from '@material-ui/core';

const SelectOption = (props) => {
    //for menu button
    const { label, onChange, options, value, name, error, onFocus, requiredText, diff, type, ruleType } = props;
    const classes = MenuStyles();

    return (
        <div>
            <FormControl variant="outlined" className={classes.form} fullWidth error={error}>
                <Select
                    displayEmpty
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={classes.root}
                    inputProps={{ 'aria-label': 'Without label' }}
                    onFocus={onFocus}
                    MenuProps={{
                        anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'left'
                        },
                        getContentAnchorEl: null
                    }}
                >
                    <MenuItem value="" disabled>
                        {label}
                    </MenuItem>
                    {options.map((option, i) => (
                        <MenuItem
                            style={{ color: '#777777' }}
                            value={
                                diff
                                    ? option.description
                                    : type
                                    ? option.type
                                    : ruleType
                                    ? option.ruleType
                                    : option.name
                            }
                            key={i}
                        >
                            {diff ? option.description : type ? option.type : ruleType ? option.ruleType : option.name}
                        </MenuItem>
                    ))}
                </Select>
                {error && <FormHelperText>{requiredText} is required</FormHelperText>}
            </FormControl>
        </div>
    );
};
export default SelectOption;
