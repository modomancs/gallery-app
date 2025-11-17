import GalleryPage from "@/components/GalleryPage";

export default function HomePage({ isLiked, toggleLiked }) {
  return (
    <div>
      <GalleryPage isLiked={isLiked} toggleLiked={toggleLiked} />
    </div>
  );
}
