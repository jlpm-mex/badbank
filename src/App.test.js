import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';


test('Routing with Fire_Event',() => {
  render(<App/>);
  fireEvent.click(screen.getByText('AllData'));
  screen.getByText('{"users":[{"name":"abel","email":"abel@mit.edu","password":"secret","balance":100}]}')
});