import { makeStyles } from '@material-ui/core/styles';

export const CustomChipStyles = makeStyles(
    (theme) => (
        {
            chip: {
                margin: '3px 0px',
                marginRight: ' 10px',
                minWidth: '160px',
                height: '45px',
                backgroundColor: theme.palette.colors.gray.light,
                fontSize: '14px',
                borderRadius: '50px',
                '&.MuiChip-root': {
                    padding: '3px  10px',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }
            }
        },
        { index: 1 }
    )
);
