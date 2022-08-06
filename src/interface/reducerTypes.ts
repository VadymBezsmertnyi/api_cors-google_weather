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
  address_components: AddressComponentsType[];
}

export type StateReducerType = {
  cities: CityGoogle[];
};

export type StateUseSelectType = {
  fetchGoogle: {
    cities: CityGoogle[];
  };
};

export type PlaceIdCityType = {
  place_id: string;
};
