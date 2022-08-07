import { useRef, useState } from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from 'react-google-autocomplete';
import { Box, Button, Typography } from '@mui/material';

import { fetchInfoCityGoogle } from 'reducers/fetchGoogle';
import { PlaceIdCityType, StateUseSelectType } from 'interface';
import { DEFAULT_VALUES_CITY } from 'constants/cities';

import useStyles from './EnterCity.styles';

const KEY_GOOGLE = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const DEFAULT_TEMP_CITY: PlaceIdCityType = { place_id: '' };

const EnterCity = () => {
  const [showError, setShowError] = useState(false);
  const dispatch: Function = useDispatch();
  const cities = useSelector(
    (state: StateUseSelectType) => state.fetchGoogle.cities
  );
  const [tempCity, setTempCity] = useState<PlaceIdCityType>(DEFAULT_TEMP_CITY);
  const inputAutocomplete = useRef<HTMLInputElement | null>(null);

  const classes = useStyles();

  const sendInfoCity = async () => {
    const { place_id } = tempCity;
    const cityVerifyList =
      cities.findIndex((city) => city.place_id === place_id) < 0;

    if (inputAutocomplete.current && Boolean(place_id) && cityVerifyList) {
      inputAutocomplete.current.value = '';
      dispatch(fetchInfoCityGoogle({ ...DEFAULT_VALUES_CITY, place_id }));
      setTempCity(DEFAULT_TEMP_CITY);
      setShowError(false);
    } else if (inputAutocomplete.current && !cityVerifyList) {
      inputAutocomplete.current.value = '';
      setShowError(true);
    }
  };

  const changeNameCity = (e: PlaceIdCityType) => {
    setShowError(false);
    setTempCity(e);
  };

  return (
    <Box className={classes.containerEnterCity}>
      <Box className={classes.containerInput}>
        <Autocomplete
          apiKey={KEY_GOOGLE}
          ref={inputAutocomplete}
          onPlaceSelected={changeNameCity}
          className={classes.inputCity}
          language="ukr"
        />
        <Button onClick={sendInfoCity} className={classes.buttonInputCity}>
          Add
        </Button>
      </Box>
      <Typography
        className={clsx(classes.messageError, {
          [classes.showError]: showError,
        })}
      >
        Please enter city
      </Typography>
    </Box>
  );
};

export default EnterCity;
