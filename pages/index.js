import GalleryPage from "/components/gallery/GalleryPage.js";

export default function HomePage({ isLiked, toggleLiked }) {
  return (
    <div>
      <GalleryPage isLiked={isLiked} toggleLiked={toggleLiked} />
    </div>
  );
}
