import { configureStore } from '@reduxjs/toolkit';
import { fetchGoogle, fetchWeather } from 'reducers';

const stringMiddleware = () => (next: Function) => (
  action: string | object
) => {
  if (typeof action === 'string') {
    return next({
      type: action,
    });
  }
  return next(action);
};

const store = configureStore({
  reducer: { fetchGoogle, fetchWeather },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
