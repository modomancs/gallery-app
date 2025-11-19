import GalleryPage from "/components/gallery/GalleryPage.js";

export default function HomePage({ likedArtworkSlugs, toggleLiked }) {
  return (
    <div>
      <GalleryPage
        likedArtworkSlugs={likedArtworkSlugs}
        toggleLiked={toggleLiked}
      />
    </div>
  );
}
