import { render, screen } from "@testing-library/react";
import GalleryPage from "./GalleryPage";
import useSWR from "swr";

jest.mock("swr");

// jext mocking image from nextjs
jest.mock("next/image", () => {
  return function MockImage(props) {
    return <img {...props} />;
  };
});

// jest mokcing favorite button
jest.mock("../art-piece/FavoriteButton", () => {
  return function MockFavoriteButton() {
    return <button>Favorite</button>;
  };
});

// jest mocking comments
jest.mock("../comments/Comments", () => {
  return function MockComments() {
    return <div>Comments</div>;
  };
});

test("renders gallery page with art items", () => {
  // same as artpiecedetails, need to make an array in object
  useSWR.mockReturnValue({
    data: [
      {
        name: "Test Art",
        artist: "Tester",
        slug: "test-art",
        imageSource: "/test.jpg",
        year: 2020,
        genre: "Abstract",
      },
    ],
    error: null,
    isLoading: false,
  });

  render(<GalleryPage likedArtworkSlugs={[]} toggleLiked={() => {}} />);
  expect(screen.getByText("Gallery App")).toBeInTheDocument();
  expect(screen.getByText("Test Art")).toBeInTheDocument();
  expect(screen.getByText("Tester")).toBeInTheDocument();
  expect(screen.getByText("Favorite")).toBeInTheDocument();
  expect(screen.getByAltText("Test Art")).toBeInTheDocument();
  expect(screen.getByText("Comments")).toBeInTheDocument();
});
