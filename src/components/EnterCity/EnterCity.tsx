import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Autocomplete from 'react-google-autocomplete';
import { Box, Button } from '@mui/material';

import { fetchInfoCityGoogle } from 'reducers/fetchGoogle';
import { PlaceIdCityType } from 'interface';
import { DEFAULT_VALUES_CITY } from 'constants/cities';

import useStyles from './EnterCity.styles';

const KEY_GOOGLE = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const DEFAULT_TEMP_CITY: PlaceIdCityType = { place_id: '' };

const EnterCity = () => {
  const dispatch: Function = useDispatch();
  const [tempCity, setTempCity] = useState<PlaceIdCityType>(DEFAULT_TEMP_CITY);
  const inputAutocomplete = useRef<HTMLInputElement | null>(null);

  const classes = useStyles();

  const sendInfoCity = async () => {
    const { place_id } = tempCity;

    if (inputAutocomplete.current && Boolean(place_id)) {
      inputAutocomplete.current.value = '';
      dispatch(fetchInfoCityGoogle({ ...DEFAULT_VALUES_CITY, place_id }));
      setTempCity(DEFAULT_TEMP_CITY);
    }
  };

  return (
    <Box className={classes.contInputCity}>
      <Autocomplete
        apiKey={KEY_GOOGLE}
        ref={inputAutocomplete}
        onPlaceSelected={setTempCity}
        className={classes.inputCity}
        language="uk"
      />
      <Button onClick={sendInfoCity} className={classes.buttonInputCity}>
        Add
      </Button>
    </Box>
  );
};

export default EnterCity;
