import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  cardFullInfo: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardTemp: {
    width: '10rem',
    display: 'flex',
  },
  cardLeftInfo: {},
  cardLeftTemp: {
    fontSize: '42.5px',
  },
  cardLeftTypeTemp: {
    display: 'flex',
    fontSize: '42.5px',
  },
  cardTextTypeTemp: {
    fontSize: '1.5rem',
    lineHeight: '1.2',
    cursor: 'default',
  },
  cardTextLikeTemp: {
    display: 'flex',
    fontSize: '13px',
    lineHeight: '0.5',
    opacity: 0.5,
  },
  cardTextLikeTempMarker: {
    fontWeight: 1000,
  },
  cardRightInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    margin: '0.7rem 0.4rem 0 0',
  },
  cardRightTextInfo: {
    display: 'flex',
    fontSize: '11.5px',
    lineHeight: 2,
  },
}));

export default useStyles;
