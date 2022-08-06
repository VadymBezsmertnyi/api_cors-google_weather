import { CityGoogle } from 'interface';

export const DEFAULT_VALUES_ADDRESS = {
  long_name: '',
  short_name: '',
  types: [''],
};

export const DEFAULT_VALUES_CITY: CityGoogle = {
  place_id: '',
  countryName: DEFAULT_VALUES_ADDRESS,
  nameCity: DEFAULT_VALUES_ADDRESS,
  location: {
    lat: 0,
    lng: 0,
  },
  utc_offset: 0,
  timeMillisecond: 0,
  timeZone: '',
  address_components: [DEFAULT_VALUES_ADDRESS],
};
