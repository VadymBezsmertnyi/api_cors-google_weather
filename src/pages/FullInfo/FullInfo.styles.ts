import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  containerFullInfo: {
    padding: '0 20px',
    boxSizing: 'border-box',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: '24px',
    marginRight: '20px',
    '@media (max-width: 400px)': {
      fontSize: '16px',
      marginRight: '0px',
    },
  },
  hot: {
    color: theme.palette.custom?.main.rajah,
  },
  cold: {
    color: theme.palette.custom?.main.blueberry,
  },
  linkBack: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    width: '65px',
    justifyContent: 'space-between',
    color: theme.palette.common.black,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.custom?.main.blueberry,
      transition: 'color 0.2s linear',
    },
  },
  buttonRefresh: {
    color: theme.palette.common.black,

    '&:hover': {
      color: theme.palette.custom?.main.blueberry,
      transition: 'color 0.2s linear',
    },
  },
  fullInfoCity: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
}));

export default useStyles;
