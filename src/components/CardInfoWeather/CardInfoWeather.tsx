import { CustomOtherInfo } from 'components';
import { weatherType } from 'interface';
import useStyles from './CardInfoWeather.styles';

interface ICardInfoWeatherProps {
  weather: weatherType;
}

const CardInfoWeather = ({ weather }: ICardInfoWeatherProps) => {
  const classes = useStyles();
  return (
    <>
      <CustomOtherInfo
        nameTypeInfo={`Temperature:`}
        valueTypeInfo={weather.temp}
        space={true}
        symbolNameTypeInfo={'°C'}
        stateStyle={classes.cardRightTextInfo}
      />
      <CustomOtherInfo
        nameTypeInfo={`In heaven:`}
        valueTypeInfo={weather.InHeaven}
        space={true}
        symbolNameTypeInfo={'icon'}
        icon={weather.icon}
        stateStyle={classes.cardRightTextInfo}
      />
      <CustomOtherInfo
        nameTypeInfo={`Wind:`}
        valueTypeInfo={weather.wind}
        space={true}
        symbolNameTypeInfo={'°C'}
        stateStyle={classes.cardRightTextInfo}
      />
      <CustomOtherInfo
        nameTypeInfo={`Humidity:`}
        valueTypeInfo={weather.humidity}
        symbolNameTypeInfo={'%'}
        stateStyle={classes.cardRightTextInfo}
      />
      <CustomOtherInfo
        nameTypeInfo={`Pressure:`}
        valueTypeInfo={weather.pressure}
        symbolNameTypeInfo={'Pa'}
        stateStyle={classes.cardRightTextInfo}
      />
    </>
  );
};

export default CardInfoWeather;
