import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import { DEFAULT_VALUES_CITY } from 'constants/cities';

import { addedDiagramInfo, addedWeatherInfo, useHttp } from 'hooks';
import { IInitialStateWeatherProps, CityGoogle } from 'interface';
const KEY_WEATHER = process.env.REACT_APP_WEATHER_API_KEY;

const initialState: IInitialStateWeatherProps = {
  cities: [],
  loading: false,
  error: false,
  select: DEFAULT_VALUES_CITY,
};

export const fetchInfoCityWeather = createAsyncThunk(
  'weather/fetchInfoCityWeather',
  ({ location, place_id }: CityGoogle) => {
    const { request } = useHttp();
    return request(
      `http://localhost:8080/weather/info?lat=${location.lat}&lon=${location.lng}&appid=${KEY_WEATHER}&place_id=${place_id}`,
      'GET'
    );
  }
);

export const fetchDiagramCityWeather = createAsyncThunk(
  'weather/fetchDiagramCityWeather',
  ({ location, place_id }: CityGoogle) => {
    const { request } = useHttp();
    return request(
      `http://localhost:8080/weather/diagram?lat=${location.lat}&lon=${location.lng}&appid=${KEY_WEATHER}&place_id=${place_id}`,
      'GET'
    );
  }
);

const enterCity = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    selectCity: (state, action) => {
      const { payload } = action;
      localStorage.setItem('select', JSON.stringify(payload));
      state.select = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInfoCityWeather.fulfilled, (state, action) => {
        const { payload } = action;
        if (payload.place_id) {
          const listCities = JSON.parse(
            localStorage.getItem('listCities') || '[]'
          ) || [DEFAULT_VALUES_CITY];
          const cityAddWeather: CityGoogle = listCities.find(
            ({ place_id }: CityGoogle) => place_id === payload.place_id
          );
          const fullCityData = addedWeatherInfo(cityAddWeather, payload);
          const newListCities = listCities.map((city: CityGoogle) =>
            city.place_id === fullCityData.place_id ? fullCityData : city
          );

          if (
            Boolean(current(state.select)) ||
            state.select.place_id === fullCityData.place_id
          ) {
            localStorage.setItem('select', JSON.stringify(fullCityData));
            state.select = fullCityData;
          }

          localStorage.setItem('listCities', JSON.stringify(newListCities));
          state.cities = newListCities;
          state.loading = false;
          state.error = false;
        } else {
          state.error = true;
        }
      })
      .addCase(fetchInfoCityWeather.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchDiagramCityWeather.fulfilled, (state, action) => {
        const { payload } = action;
        if (payload.place_id) {
          const listCities = JSON.parse(
            localStorage.getItem('listCities') || '[]'
          ) || [DEFAULT_VALUES_CITY];
          const cityAddDiagram: CityGoogle = listCities.find(
            ({ place_id }: CityGoogle) => place_id === payload.place_id
          );
          const fullCityData = addedDiagramInfo(cityAddDiagram, payload.hourly);
          const newListCities = listCities.map((city: CityGoogle) =>
            city.place_id === fullCityData.place_id ? fullCityData : city
          );

          if (
            Boolean(current(state.select)) ||
            state.select.place_id === fullCityData.place_id
          ) {
            localStorage.setItem('select', JSON.stringify(fullCityData));
            state.select = fullCityData;
          }

          localStorage.setItem('listCities', JSON.stringify(newListCities));
          state.cities = newListCities;
          state.loading = false;
          state.error = false;
        } else {
          state.error = true;
        }
      })
      .addCase(fetchDiagramCityWeather.pending, (state) => {
        state.loading = true;
      });
  },
});

const { actions, reducer } = enterCity;

export default reducer;

export const { selectCity } = actions;
