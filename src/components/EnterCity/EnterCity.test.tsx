import { render, screen, fireEvent } from 'components/testUtils';

import EnterCity from './EnterCity';

describe('Render: EnterCity', () => {
  it('should render', () => {
    render(<EnterCity />);
    const input = screen.getByTestId('input_enter_city');
    expect(screen.getByTestId(`enter_city`)).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'Kiev' } });
    // @ts-ignore
    expect(input.value).toBe('Kiev');
  });
});
