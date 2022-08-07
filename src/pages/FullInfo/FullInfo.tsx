import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { Box, Button, Typography } from '@mui/material';
import { ArrowBackIosNew as ArrowBackIosNewIcon } from '@mui/icons-material';

import { CardInfoWeather, FullInfoDiagram } from 'components';
import { DEFAULT_VALUES_CITY } from 'constants/cities';
import { fetchInfoCityWeather } from 'reducers/fetchWeather';
import { StateUseSelectType } from 'interface';

import useStyles from './FullInfo.styles';

const FullInfo = () => {
  const [showCity, setShowCity] = useState(DEFAULT_VALUES_CITY);
  const { nameCity, countryName, weather } = showCity;
  const dispatch: Function = useDispatch();
  const navigate = useNavigate();
  const cityState = useSelector(
    (state: StateUseSelectType) => state.fetchWeather.select
  );
  const loading = useSelector(
    (state: StateUseSelectType) => state.fetchWeather.loading
  );
  const cityLocal = JSON.parse(localStorage.getItem('select') || '{}');
  const colorTemp = Number(weather.temp) >= 0 ? 'hot' : 'cold';

  const classes = useStyles();

  useEffect(() => {
    if (Boolean(cityState.place_id)) {
      setShowCity(cityState);
    } else if (Boolean(cityLocal)) {
      setShowCity(cityLocal);
    } else {
      navigate('/fullInfo');
    }
  }, [loading]);

  const clickUpdateCity = () => {
    dispatch(fetchInfoCityWeather(showCity));
  };

  return (
    <Box className={classes.containerFullInfo}>
      <Box className={classes.headerContainer}>
        <Link className={classes.linkBack} to={`/`}>
          <ArrowBackIosNewIcon />
          <Box component="p">Back</Box>
        </Link>
        <Button onClick={clickUpdateCity} className={classes.buttonRefresh}>
          Refresh
        </Button>
        <Typography
          component={'h2'}
          className={clsx(classes.headerTitle, classes[colorTemp])}
        >{`${nameCity.long_name}, ${countryName.long_name}`}</Typography>
      </Box>
      <Box className={classes.fullInfoCity}>
        <CardInfoWeather weather={weather} />
      </Box>
      <FullInfoDiagram />
    </Box>
  );
};

export default FullInfo;
