import { makeStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core';

export const useCustomStyle = makeStyles((theme: Theme) => ({
    cell: {
        border: 'none',
        color: theme.palette.primary.main,
        cursor: 'move',
        zIndex: '1000',
        padding: '5px'
    }
}));
