import { render, screen } from "@testing-library/react";
import ArtPieceDetails from "./ArtPieceDetails";

// jest mocks next/image
jest.mock("next/image", () => {
  const NextImage = (props) => {
    return <img {...props} />;
  };
  return NextImage;
});
//jest mocks the favorite button component
jest.mock("./FavoriteButton", () => {
  return function MockFavoriteButton() {
    return <button>Favorites</button>;
  };
});

test("renders art piece details", () => {
  const art = {
    name: "Test Art",
    artist: "Tester",
    slug: "test-art",
    imageSource: "/test.jpg",
    genre: "Abstract",
    year: 2020,
    colors: ["red", "blue"],
  };

  render(
    <ArtPieceDetails art={art} likedArtworkSlugs={[]} toggleLiked={() => {}} />
  );
  expect(screen.getByText("Test Art")).toBeInTheDocument();
  expect(screen.getByText("Tester")).toBeInTheDocument();

  const img = screen.getByAltText("Test Art");
  expect(img).toBeInTheDocument();
  expect(screen.getByText("Abstract, 2020")).toBeInTheDocument();
  expect(screen.getByText("Favorites")).toBeInTheDocument();
});
