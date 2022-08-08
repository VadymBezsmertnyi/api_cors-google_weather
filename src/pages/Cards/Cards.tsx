import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography } from '@mui/material';

import { Card } from 'components';
import { CityGoogle, StateUseSelectType } from 'interface';
import { fetchInfoCityGoogle } from 'reducers/fetchGoogle';

import useStyles from './Cards.styles';

const Cards = () => {
  const dispatch: Function = useDispatch();
  const listCities = JSON.parse(localStorage.getItem('listCities') || '[]');
  const cities = useSelector(
    (state: StateUseSelectType) => state.fetchGoogle.cities
  );
  const classes = useStyles();

  if (listCities.length && !cities.length) {
    listCities.forEach((city: CityGoogle) =>
      dispatch(fetchInfoCityGoogle(city))
    );
  }

  return (
    <Box className={classes.cardsContainer}>
      {!cities.length && <Typography>Not select cities</Typography>}
      {cities.map((city: CityGoogle) => (
        <Card key={`Card_${city.place_id}`} city={city} />
      ))}
    </Box>
  );
};

export default Cards;
