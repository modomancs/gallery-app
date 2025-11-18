import { render, screen } from "@testing-library/react";
import SpotlightPage from "@/components/SpotlightPage";

// mock
jest.mock("swr", () => () => ({
  data: [
    {
      slug: "abc",
      name: "Test Art",
      artist: "Test Artist",
      imageSource: "/test.jpg",
      genre: "Genre",
      year: 2020,
    },
  ],
  isLoading: false,
  error: null,
}));

//////// TESTS

test("renders SpotlightPage heading", () => {
  render(<SpotlightPage isLiked={false} toggleLiked={() => {}} />);

  const heading = screen.getByRole("heading", { name: /spotlight page/i });
  expect(heading).toBeInTheDocument();
});

test("renders like button", () => {
  render(<SpotlightPage isLiked={false} toggleLiked={() => {}} />);

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("renders an image", () => {
  render(<SpotlightPage isLiked={false} toggleLiked={() => {}} />);

  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();
});
