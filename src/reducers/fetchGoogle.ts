import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { verifyCities, useHttp } from 'hooks';
import { StateReducerType, CityGoogle } from 'interface';
import { DEFAULT_VALUES_CITY } from 'constants/cities';

const KEY_GOOGLE = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const initialState: StateReducerType = {
  cities: [],
};

export const fetchInfoCityGoogle = createAsyncThunk(
  'cities/fetchInfoCityGoogle',
  ({ place_id }: CityGoogle) => {
    const { request } = useHttp();
    return request(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=${KEY_GOOGLE}`
    );
  }
);

const enterCity = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    /* addCity: (state, action) => {
      console.log(state, action);
      state.cities = verifyCities(state.cities, action.payload);
    }, */
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInfoCityGoogle.fulfilled, (state, action) => {
        const { payload } = action;
        state.cities = verifyCities(state.cities, {
          ...DEFAULT_VALUES_CITY,
          place_id: payload.result.place_id,
          location: payload.result.geometry.location,
          utc_offset: payload.result?.utc_offset,
          address_components: payload.result.address_components,
        });
      })
      .addCase(fetchInfoCityGoogle.rejected, () =>
        console.log('fetchInfoCityGoogle.pending/loading')
      );
  },
});

const { actions, reducer } = enterCity;

export default reducer;

//export const { addCity } = actions;
