import { Box, Typography } from '@mui/material';
import { CustomOtherInfo, CardInfoWeather } from 'components';
import { ICardPropsType } from 'interface';
import useStyles from './CardWeather.styles';

const CardWeather = ({ city }: ICardPropsType) => {
  const { temp, feels } = city.weather;
  const classes = useStyles();

  return (
    <Box className={classes.cardFullInfo}>
      <Box className={classes.cardLeftInfo}>
        <Box className={classes.cardTemp}>
          <Typography className={classes.cardLeftTemp}>{temp}</Typography>
          <Box className={classes.cardLeftTypeTemp}>
            <Typography className={classes.cardTextTypeTemp}>°C</Typography>
          </Box>
        </Box>
        <CustomOtherInfo
          key={'FeelsLike'}
          nameTypeInfo={`Feels like: `}
          valueTypeInfo={feels}
          space={true}
          symbolNameTypeInfo={'°C'}
          stateStyle={classes.cardTextLikeTemp}
          styleMarker={classes.cardTextLikeTempMarker}
        />
      </Box>
      <Box className={classes.cardRightInfo}>
        <CardInfoWeather weather={city.weather} />
      </Box>
    </Box>
  );
};

export default CardWeather;
