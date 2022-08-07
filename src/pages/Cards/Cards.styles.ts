import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  cardsContainer: {
    width: '100%',
    padding: '0 20px;',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    boxSizing: 'border-box',
    gap: '10px 10px',
  },
}));

export default useStyles;
