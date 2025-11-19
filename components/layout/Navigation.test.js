import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

test("render navigation links", () => {
  render(<Navigation />);
  const Gallery = screen.getByText("Gallery");
  const Spotlight = screen.getByText("Spotlight");
  const Favorites = screen.getByText("Favorites");

  expect(Gallery).toBeInTheDocument();
  expect(Spotlight).toBeInTheDocument();
  expect(Favorites).toBeInTheDocument();
});
