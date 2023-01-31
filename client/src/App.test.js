import { render, screen } from '@testing-library/react';
import App from './App';

describe("App Component", () => {
  test("Renders Correctly!", () => {
    render(<App />);
    const mainComponent = screen.getByRole('main');
    expect(mainComponent).toBeInTheDocument();
    const navComponent = screen.getByRole('navigation');
    expect(navComponent).toBeInTheDocument();
  });
})


