import { CityGoogle, OptionsDateTimeType } from 'interface';
import { DEFAULT_VALUES_ADDRESS } from 'constants/cities';

const URL_WEATHER_ICONS = `https://openweathermap.org/img/wn`;

const OPTIONS_DATE_TIME: OptionsDateTimeType = {
  weekday: 'short',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

const addInfoCity = (newCity: CityGoogle) => {
  const { address_components } = newCity;
  const nameCity =
    address_components.find(
      ({ types }) => types.findIndex((type) => type === 'locality') >= 0
    ) || DEFAULT_VALUES_ADDRESS;
  const countryName =
    address_components.find(
      ({ types }) => types.findIndex((type) => type === 'country') >= 0
    ) || DEFAULT_VALUES_ADDRESS;
  return { nameCity, countryName };
};

const dateTimeZoneCity = (newCity: CityGoogle) => {
  const userOffSetMillisecond = new Date().getTimezoneOffset() * 1000 * 60;
  const cityOffSetMillisecond = newCity.utc_offset * 1000 * 60;
  const timeGreenwich =
    new Date().valueOf() + userOffSetMillisecond + cityOffSetMillisecond;
  const dataStandard = new Date(timeGreenwich);
  const timeZone = dataStandard.toLocaleDateString('uk', OPTIONS_DATE_TIME);

  return {
    ...newCity,
    ...addInfoCity(newCity),
    timeMillisecond: dataStandard.valueOf(),
    timeZone,
  };
};

export const verifyCities = (stateList: CityGoogle[], newCity: CityGoogle) => {
  const verifyNewCity =
    stateList.findIndex(({ place_id }) => place_id === newCity.place_id) < 0;

  return verifyNewCity ? [...stateList, dateTimeZoneCity(newCity)] : stateList;
};

type WeatherDateType = {
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  wind: { deg: number; gust: number; speed: number };
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  }[];
};

export const addedWeatherInfo = (
  city: CityGoogle,
  weatherDate: WeatherDateType
) => {
  const { main, wind, weather } = weatherDate;
  const tempRound = Math.round(main.temp);
  const showTextTemperature =
    tempRound === 0 ? 0 : tempRound > 0 ? `+${tempRound}` : tempRound;
  const feelsLikeRound = Math.round(main.feels_like);
  const showTextFeelsLike =
    feelsLikeRound === 0
      ? 0
      : feelsLikeRound > 0
      ? `+${feelsLikeRound}`
      : feelsLikeRound;

  return {
    ...city,
    weather: {
      temp: showTextTemperature,
      wind: Math.round(wind.speed),
      humidity: main.humidity,
      pressure: main.pressure,
      feels: showTextFeelsLike,
      icon: `${URL_WEATHER_ICONS}/${weather[0].icon}.png`,
      InHeaven: weather[0].description,
      cold: tempRound <= 0,
    },
  };
};
