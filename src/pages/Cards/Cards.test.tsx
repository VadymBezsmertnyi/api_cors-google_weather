import { render, screen } from 'components/testUtils';

import Cards from './Cards';

describe('Render: CardWeather', () => {
  it('should render', () => {
    render(<Cards />);
    expect(
      screen.getByTestId(`test_card_component`)
    ).toBeInTheDocument();
    expect(
      screen.getByText('Not select cities')
    ).toBeInTheDocument();
  });
});
