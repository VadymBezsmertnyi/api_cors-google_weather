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
        key={'Temp'}
        nameTypeInfo={`Temperature:`}
        valueTypeInfo={weather?.temp}
        space={true}
        symbolNameTypeInfo={'°C'}
        stateStyle={classes.cardRightTextInfo}
      />
      <CustomOtherInfo
        key={'InHeaven'}
        nameTypeInfo={`In heaven:`}
        valueTypeInfo={weather?.InHeaven}
        space={true}
        symbolNameTypeInfo={'icon'}
        icon={weather?.icon}
        stateStyle={classes.cardRightTextInfo}
      />
      <CustomOtherInfo
        key={'Wind'}
        nameTypeInfo={`Wind:`}
        valueTypeInfo={weather?.wind}
        space={true}
        symbolNameTypeInfo={'°C'}
        stateStyle={classes.cardRightTextInfo}
      />
      <CustomOtherInfo
        key={'Humidity'}
        nameTypeInfo={`Humidity:`}
        valueTypeInfo={weather?.humidity}
        symbolNameTypeInfo={'%'}
        stateStyle={classes.cardRightTextInfo}
      />
      <CustomOtherInfo
        key={'Pressure'}
        nameTypeInfo={`Pressure:`}
        valueTypeInfo={weather?.pressure}
        symbolNameTypeInfo={'Pa'}
        stateStyle={classes.cardRightTextInfo}
      />
    </>
  );
};

export default CardInfoWeather;
