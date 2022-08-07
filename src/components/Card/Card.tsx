import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';
import {
  Close as CloseIcon,
  RotateRight as RotateRightIcon,
} from '@mui/icons-material';

import { selectCity, fetchInfoCityWeather } from 'reducers/fetchWeather';
import { deleteCity } from 'reducers/fetchGoogle';
import { ICardPropsType, StateUseSelectType } from 'interface';

import useStyles from './Card.styles';
import { CardWeather } from 'components';
import { useNavigate } from 'react-router-dom';

const Card = ({ city }: ICardPropsType) => {
  const cities = useSelector(
    (state: StateUseSelectType) => state.fetchWeather.cities
  );
  const showCity =
    cities.find(({ place_id }) => place_id === city.place_id) || city;
  const { nameCity, countryName, timeZone, timeUpdate, weather } = showCity;
  const dispatch: Function = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const clickDeleteCity = () => {
    dispatch(deleteCity(city));
  };

  const clickUpdateCity = () => {
    dispatch(fetchInfoCityWeather(city));
  };

  useEffect(() => {
    dispatch(fetchInfoCityWeather(city));
  }, []);

  const enterCard = () => {
    console.log({ select: showCity });
    dispatch(selectCity(showCity));
    navigate('/fullInfo');
  };

  return (
    <Box className={classes.card}>
      <Box className={classes.cardContainerSetting}>
        <Button onClick={clickUpdateCity} className={classes.buttonsCard}>
          <RotateRightIcon className={classes.iconButtonsCard} />
        </Button>
        <Button onClick={clickDeleteCity} className={classes.buttonsCard}>
          <CloseIcon className={classes.iconButtonsCard} />
        </Button>
      </Box>
      <Box className={classes.cardClick} onClick={enterCard}>
        <Box className={classes.cardMainInfo}>
          <Box className={classes.cardCityInfo}>
            <Typography className={classes.cardCityCountry}>
              {`${nameCity.long_name}, ${countryName.short_name}`}
            </Typography>
            <Typography className={classes.cardCityData}>{timeZone}</Typography>
          </Box>
          <Box className={classes.cardTempInfo}>
            <Box
              component="img"
              className={classes.cardIconSun}
              src={weather.icon}
              alt={'InHeaven'}
            />
            <Typography className={classes.cardTempType}>
              {weather.InHeaven}
            </Typography>
          </Box>
        </Box>
        <CardWeather city={showCity} />
        <Typography
          className={classes.timeUpdate}
        >{`Оновлено: ${timeUpdate}`}</Typography>
      </Box>
    </Box>
  );
};

export default Card;
