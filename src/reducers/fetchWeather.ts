import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { verifyCities, useHttp } from 'hooks';
import { StateReducerType, CityGoogle } from 'interface';
import { DEFAULT_VALUES_CITY } from 'constants/cities';

const KEY_GOOGLE = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const KEY_WEATHER = process.env.REACT_APP_WEATHER_API_KEY;
const URL_WEATHER_API = `https://api.openweathermap.org/data/2.5/weather`;
const URL_WEATHER_DIAGRAM_API = `https://api.openweathermap.org/data/2.5/onecall`;
const URL_WEATHER_ICONS = `https://openweathermap.org/img/wn`;

const initialState: StateReducerType = {
  cities: [],
};

export const fetchInfoCityWeather = createAsyncThunk(
  'weather/fetchInfoCityWeather',
  ({ location }: CityGoogle) => {
    const { request } = useHttp();
    return request(
      `${URL_WEATHER_API}?lat=${location.lat}&lon=${location.lng}&appid=${KEY_WEATHER}&units=metric`
    );
  }
);

const enterCity = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    /* addCity: (state, action) => {
      console.log(state, action);
      state.cities = verifyCities(state.cities, action.payload);
    }, */
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInfoCityWeather.fulfilled, (state, action) => {
        const { payload } = action;

        console.log(state, payload);

        /* state.cities = verifyCities(state.cities, {
          ...DEFAULT_VALUES_CITY,
          place_id: payload.result.place_id,
          location: payload.result.geometry.location,
          utc_offset: payload.result?.utc_offset,
          address_components: payload.result.address_components,
        }); */
      })
      .addCase(fetchInfoCityWeather.pending, (error) => {
        console.log(error);
      })
      .addCase(fetchInfoCityWeather.rejected, (error) =>
        console.log('fetchInfoCityWeather.pending/loading', error)
      );
  },
});

const { actions, reducer } = enterCity;

export default reducer;

//export const { addCity } = actions;
