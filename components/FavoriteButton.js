import { Heart } from "lucide-react";
export default function FavoriteButton({ toggleLiked, isLiked, slug }) {
  const liked = isLiked.includes(slug);
  return (
    <button onClick={() => toggleLiked(slug)}>
      <Heart fill={liked ? "red" : "none"} />
    </button>
  );
}
