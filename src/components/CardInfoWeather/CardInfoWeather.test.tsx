import { TEST_DEFAULT_VALUES_CITY } from 'constants/cities';
import { render, screen } from 'components/testUtils';

import CardInfoWeather from './CardInfoWeather';

describe('Render: CardInfoWeather', () => {
  it('should render', () => {
    render(<CardInfoWeather weather={TEST_DEFAULT_VALUES_CITY.weather} />);
    expect(
      screen.getByText(`${TEST_DEFAULT_VALUES_CITY.weather.temp} °C`)
    ).toBeInTheDocument();
    expect(screen.getByText('Wind:')).toBeInTheDocument();
    expect(screen.getByText('Pressure:')).toBeInTheDocument();
  });
});
