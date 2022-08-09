import { CityGoogle } from 'interface';

export const colorMain = {
  backgroundBlueberry: '#5B8CFF',
  backgroundRajah: '#FFA25B',
};

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
  timeUpdate: '',
  address_components: [DEFAULT_VALUES_ADDRESS],
  weather: {
    temp: '',
    wind: 0,
    humidity: 0,
    pressure: 0,
    feels: '',
    icon: '',
    InHeaven: '',
    cold: false,
  },
  diagram: [],
};

export const TEST_DEFAULT_VALUES_CITY: CityGoogle = {
  place_id: 'ChIJBUVa4U7P1EAR_kYBF9IxSXY',
  countryName: {
    long_name: 'Ukraine',
    short_name: 'UA',
    types: ['country', 'political'],
  },
  nameCity: {
    long_name: 'Kyiv',
    short_name: 'Kyiv',
    types: ['locality', 'political'],
  },
  location: {
    lat: 50.4501,
    lng: 30.5234,
  },
  utc_offset: 180,
  timeMillisecond: 1659944316441,
  timeZone: 'Mon, August 8 at 10:38 AM',
  timeUpdate: '8/8/2022, 10:38 AM',
  address_components: [
    {
      long_name: 'Kyiv',
      short_name: 'Kyiv',
      types: ['locality', 'political'],
    },
    {
      long_name: 'Kyiv City',
      short_name: 'Kyiv City',
      types: ['administrative_area_level_2', 'political'],
    },
    {
      long_name: 'Ukraine',
      short_name: 'UA',
      types: ['country', 'political'],
    },
    {
      long_name: '02000',
      short_name: '02000',
      types: ['postal_code'],
    },
  ],
  weather: {
    temp: '+20',
    wind: 4,
    humidity: 84,
    pressure: 1011,
    feels: '+20',
    icon: 'https://openweathermap.org/img/wn/04d.png',
    InHeaven: 'broken clouds',
    cold: false,
  },
  diagram: [
    {
      day: '12',
      temp: 0,
    },
    {
      day: 'Now',
      temp: 20,
    },
    {
      day: '11:00',
      temp: 20,
    },
    {
      day: '12:00',
      temp: 20,
    },
    {
      day: ' 1:00',
      temp: 21,
    },
    {
      day: ' 2:00',
      temp: 22,
    },
    {
      day: ' 3:00',
      temp: 24,
    },
    {
      day: ' 4:00',
      temp: 26,
    },
    {
      day: ' 5:00',
      temp: 26,
    },
    {
      day: ' 6:00',
      temp: 26,
    },
    {
      day: ' 7:00',
      temp: 25,
    },
    {
      day: ' 8:00',
      temp: 23,
    },
    {
      day: ' 9:00',
      temp: 22,
    },
    {
      day: '',
      temp: 0,
    },
  ],
};
