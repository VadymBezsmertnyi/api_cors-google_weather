import { TEST_DEFAULT_VALUES_CITY } from 'constants/cities';
import { render, screen } from 'components/testUtils';

import CardWeather from './CardWeather';

describe('Render: CardWeather', () => {
  it('should render', () => {
    render(<CardWeather city={TEST_DEFAULT_VALUES_CITY} />);
    expect(
      screen.getByTestId(`test_weather_${TEST_DEFAULT_VALUES_CITY.nameCity.long_name}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(TEST_DEFAULT_VALUES_CITY.weather.temp)
    ).toBeInTheDocument();
  });
});
