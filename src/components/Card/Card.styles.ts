import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '22rem',
    height: '16rem',
    margin: '0rem 0.9rem 2rem 0.8rem',
    borderRadius: '4px',
    background: '#fffaf1',
    boxShadow: '0px 4px 5px 0px rgb(34 60 80 / 20%)',
    boxSizing: 'border-box',
  },
  cardContainerSetting: {
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardMainInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 2rem 0 1rem',
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
