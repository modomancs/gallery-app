import { Heart } from "lucide-react";
export default function FavoriteButton({
  toggleLiked,
  likedArtworkSlugs,
  slug,
}) {
  const liked = likedArtworkSlugs.includes(slug);
  return (
    <button onClick={() => toggleLiked(slug)}>
      <Heart fill={liked ? "red" : "none"} />
    </button>
  );
}
