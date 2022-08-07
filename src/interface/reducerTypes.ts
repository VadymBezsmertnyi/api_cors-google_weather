export interface OptionsDateTimeType {
  weekday: 'short' | 'long' | 'narrow' | undefined;
  month: 'short' | 'long' | 'narrow' | 'numeric' | '2-digit' | undefined;
  day: 'numeric' | '2-digit' | undefined;
  hour: 'numeric' | '2-digit' | undefined;
  minute: 'numeric' | '2-digit' | undefined;
}

type AddressComponentsType = {
  long_name: string;
  short_name: string;
  types: string[];
};

export type weatherType = {
  temp: number | string;
  wind: number;
  humidity: number;
  pressure: number;
  feels: number | string;
  icon: string;
  InHeaven: string;
  cold: Boolean;
};

export interface CityGoogle {
  place_id: string;
  countryName: AddressComponentsType;
  nameCity: AddressComponentsType;
  location: {
    lat: number;
    lng: number;
  };
  utc_offset: number;
  timeMillisecond: number | Date;
  timeZone: string;
  timeUpdate: string;
  address_components: AddressComponentsType[];
  weather: weatherType;
}

export interface ICardPropsType {
  city: CityGoogle;
}

export type StateReducerType = {
  cities: CityGoogle[];
  loading: Boolean;
  error: Boolean;
};

export interface IInitialStateWeatherProps extends StateReducerType {
  select: CityGoogle;
}

export type StateUseSelectType = {
  fetchGoogle: {
    cities: CityGoogle[];
  };
  fetchWeather: IInitialStateWeatherProps;
};

export type PlaceIdCityType = {
  place_id: string;
};
