import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  containerEnterCity: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '5rem 0 7.7rem 0 ',
    boxSizing: 'border-box',
  },
  containerInput: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    boxSizing: 'border-box',
    padding: '0 10%',
  },
  inputCity: {
    width: '520px',
    height: '2.3rem',
    border: 0,
    borderRadius: '4px',
    boxShadow: '0px 2px 4px 1px rgb(34 60 80 / 20%)',
    paddingLeft: '0.5rem',
    '&focus-visible': {
      border: 0,
      outline: 0,
    },
  },
  buttonInputCity: {
    width: '7rem',
    height: '2.5rem',
    border: 0,
    borderRadius: '4px',
    boxShadow: '0px 2px 4px 1px rgb(34 60 80 / 20%)',
    fontSize: '12px',
    color: theme.palette.common.white,
    background: theme.palette.custom?.other.tuftsBlue,
    textTransform: 'initial',
    marginLeft: '10px',
  },
  messageError: {
    color: theme.palette.custom?.font.error,
    opacity: 0,
  },
  showError: {
    opacity: 1,
    transition: 'opacity 0.2s linear',
  },
}));

export default useStyles;
