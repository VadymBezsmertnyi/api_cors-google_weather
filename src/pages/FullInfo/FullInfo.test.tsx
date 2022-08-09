import { render, screen } from 'components/testUtils';

import FullInfo from './FullInfo';

describe('Render: CardWeather', () => {
  it('should render', () => {
    render(<FullInfo />);
    expect(screen.getByTestId(`test_fullInfo_component`)).toBeInTheDocument();
    expect(screen.getByText('Back')).toBeInTheDocument();
  });
});
