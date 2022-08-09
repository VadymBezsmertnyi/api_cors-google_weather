import { TEST_DEFAULT_VALUES_CITY } from 'constants/cities';
import { render, screen } from 'components/testUtils';

import Card from './Card';

describe('Render: Card', () => {
  it('should render', () => {
    render(<Card city={TEST_DEFAULT_VALUES_CITY} />);
    expect(
      screen.getByTestId(`test_card_${TEST_DEFAULT_VALUES_CITY.nameCity.long_name}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(TEST_DEFAULT_VALUES_CITY.weather.temp)
    ).toBeInTheDocument();
  });
});
