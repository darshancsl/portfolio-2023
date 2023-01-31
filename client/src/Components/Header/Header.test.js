import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { navBarList } from '../../Utils/navbarlist';
import Header from './Header';

describe('Header Component', () => {
  test("Renders Correctly", () => {
    render(<Header />, { wrapper: MemoryRouter });
    const imgTag = screen.getByRole('img');
    expect(imgTag).toBeInTheDocument();
  });
  test("Renders all Navbar lists", () => {
    render(<Header />, { wrapper: MemoryRouter });
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(navBarList.length);
  });
});