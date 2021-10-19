import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';

const CustomCheckBox = (props) => {
    return (
        <TableCell align="center" key={props.key}>
            <Checkbox name={props.name} onClick={props.onClick} color={'primary'} />
        </TableCell>
    );
};
export default CustomCheckBox;
