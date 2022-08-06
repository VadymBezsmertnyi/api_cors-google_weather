import { useSelector } from 'react-redux';
import { Box } from '@mui/material';

import { Card } from 'components';
import { StateUseSelectType } from 'interface';

import useStyles from './Cards.styles';

const Cards = () => {
  const cities = useSelector(
    (state: StateUseSelectType) => state.fetchGoogle.cities
  );
  const classes = useStyles();

  return (
    <Box className={classes.cardsContainer}>
      {cities.map((city) => (
        <Card key={`Card_${city.place_id}`} city={city} />
      ))}
    </Box>
  );
};

export default Cards;
