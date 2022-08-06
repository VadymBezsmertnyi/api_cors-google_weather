import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';
import {
  Close as CloseIcon,
  RotateRight as RotateRightIcon,
} from '@mui/icons-material';

import { fetchInfoCityWeather } from 'reducers/fetchWeather';
import { CityGoogle } from 'interface';

import useStyles from './Card.styles';

interface ICardPropsType {
  city: CityGoogle;
}

const Card = ({ city }: ICardPropsType) => {
  console.log(city);
  const { nameCity, countryName, timeZone } = city;
  const dispatch: Function = useDispatch();
  const classes = useStyles();

  const clickDeleteCity = () => {
    console.log('clickDeleteCity');
  };

  const clickUpdateCity = () => {
    console.log('clickUpdateCity');
  };

  useEffect(() => {
    dispatch(fetchInfoCityWeather(city));
  }, [city]);

  return (
    <Box className={classes.card}>
      <Box className={classes.cardContainerSetting}>
        <Button onClick={clickDeleteCity}>
          <CloseIcon />
        </Button>
        <Button onClick={clickUpdateCity}>
          <RotateRightIcon />
        </Button>
      </Box>
      <Box className={classes.cardMainInfo}>
        <Box className={classes.cardCityInfo}>
          <Typography className={classes.cardCityCountry}>
            {`${nameCity.long_name}, ${countryName.short_name}`}
          </Typography>
          <Typography
            className={classes.cardCityData}
          >{`${timeZone} за містом`}</Typography>
        </Box>
        <Box className={classes.cardTempInfo}>
          <Box
            component="img"
            className={classes.cardIconSun}
            src={'icon'}
            alt={'InHeaven'}
          />
          <Typography className={classes.cardTempType}>InHeaven</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
