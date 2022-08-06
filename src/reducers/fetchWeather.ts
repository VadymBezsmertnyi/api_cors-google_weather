import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { useHttp } from 'hooks';
import { StateReducerType, CityGoogle } from 'interface';
const KEY_WEATHER = process.env.REACT_APP_WEATHER_API_KEY;

const initialState: StateReducerType = {
  cities: [],
};

export const fetchInfoCityWeather = createAsyncThunk(
  'weather/fetchInfoCityWeather',
  ({ location, place_id }: CityGoogle) => {
    const { request } = useHttp();
    return request(
      /* `${URL_WEATHER_API}?lat=${location.lat}&lon=${location.lng}&appid=${KEY_WEATHER}&units=metric` */
      `http://localhost:8080/weather/info?lat=${location.lat}&lon=${location.lng}&appid=${KEY_WEATHER}&place_id=${place_id}`,
      'GET'
    );
  }
);

const enterCity = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInfoCityWeather.fulfilled, (state, action) => {
        const { payload } = action;

        console.log(state, payload);
      })
      .addCase(fetchInfoCityWeather.pending, (error) => {
        console.log('fetchInfoCityWeather.pending/loading');
      })
      .addCase(fetchInfoCityWeather.rejected, (error) =>
        console.log('fetchInfoCityWeather.rejected', error)
      );
  },
});

const { actions, reducer } = enterCity;

export default reducer;

//export const { addCity } = actions;
