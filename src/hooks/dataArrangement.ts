import { CityGoogle, OptionsDateTimeType } from 'interface';
import { DEFAULT_VALUES_ADDRESS } from 'constants/cities';

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
