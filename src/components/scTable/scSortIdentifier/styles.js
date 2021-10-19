import { makeStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core';

export const useCustomStyle = makeStyles((theme: Theme) => ({
    top: {
        height: 4,
        position: 'relative',
        top: '-5px',
        background: theme.palette.label.main
    },
    bottom: {
        height: 4,
        position: 'relative',
        bottom: '-6px',
        background: theme.palette.label.main
    }
}));
