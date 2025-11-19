import SpotlightPage from "/components/layout/SpotlightPage";

export default function spotlight({ likedArtworkSlugs, toggleLiked }) {
  return (
    <SpotlightPage
      likedArtworkSlugs={likedArtworkSlugs}
      toggleLiked={toggleLiked}
    />
  );
}
