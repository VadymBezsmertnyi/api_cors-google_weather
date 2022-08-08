import { TEST_DEFAULT_VALUES_CITY } from 'constants/cities';
import { ICardPropsType } from 'interface';
import { act, render, screen, fireEvent } from 'testUtils';

import Card from './Card';

describe('Atom: Tab', () => {
  it('should render', () => {
    render(<Card city={TEST_DEFAULT_VALUES_CITY} />);

    expect(
      screen.getByTestId(`test_${TEST_DEFAULT_VALUES_CITY.nameCity.long_name}`)
    ).toBeInTheDocument();
    expect(screen.getByText('Tab')).toBeInTheDocument();
  });
});
