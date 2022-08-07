import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '22rem',
    height: '16rem',
    padding: '10px',
    borderRadius: '4px',
    background: theme.palette.custom?.main.floralWhite,
    boxShadow: '0px 4px 5px 0px rgb(34 60 80 / 20%)',
    boxSizing: 'border-box',
  },
  timeUpdate: {
    fontSize: '8px',
  },
  cardContainerSetting: {
    width: '100%',
    height: '0px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  buttonsCard: {
    padding: 0,
    minWidth: 0,
    color: theme.palette.common.black,
    zIndex: '1001',

    '&:hover': {
      color: theme.palette.custom?.main.blueberry,
      transition: 'color 0.2s linear',
    },
  },
  iconButtonsCard: {
    width: '18px',
  },
  cardClick: {
    cursor: 'pointer',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '0 20px 0 0',
  },
  cardMainInfo: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardCityInfo: {},
  cardCityCountry: {
    fontSize: '15px',
  },
  cardCityData: {
    fontSize: '17px',
    marginTop: '0.3rem',
  },
  cardTempInfo: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  cardIconSun: {
    height: '1.5rem',
  },
  cardTempType: {
    maxWidth: '3.3rem',
    fontSize: '12px',
    margin: '0 0 0 0.5rem',
    textTransform: 'capitalize',
    textAlign: 'right',
  },
}));

export default useStyles;
