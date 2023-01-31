import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

describe("Home Component", () => {
  test("renders correctly", () => {
    render(<Home />, { wrapper: MemoryRouter });
    const headingText = screen.getByRole("heading", {
      level: 1,
    });
    expect(headingText).toBeInTheDocument();
  });

  test("redirects to different page", () => {
    render(<Home />, { wrapper: MemoryRouter });
    const button = screen.getByRole("link");
    fireEvent.click(button);
    const contactText = screen.getByRole("heading", { level: 1 });
    expect(contactText).toBeInTheDocument();
  });
});
