import { render, screen } from "@testing-library/react";
import SpotlightPage from "./SpotlightPage";
import useSWR from "swr";

jest.mock("swr");

// prevent import issues from Comments had to google this 😢
jest.mock("components/comments/Comments", () => {
  return function MockedComments() {
    return <div>Comments</div>;
  };
});

test("renders spotlight page", () => {
  useSWR.mockReturnValue({
    //return data as array in object so test works
    data: [
      {
        name: "Test Art",
        artist: "Tester",
        slug: "test-art",
        genre: "test genre",
        year: 1234,
        imageSource: "/test.jpg",
      },
    ],
    error: null,
    isLoading: false,
  });

  render(<SpotlightPage likedArtworkSlugs={[]} toggleLiked={() => {}} />);

  const heading = screen.getByText("Spotlight Page");
  expect(heading).toBeInTheDocument();
});
