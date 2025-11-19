/// this is how the website used to be looks like
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import ColorPalette from "./ColorPalette";

export default function ArtPieceDetails({
  art,
  likedArtworkSlugs,
  toggleLiked,
}) {
  return (
    <div>
      <h2>{art.name}</h2>
      <p>{art.artist}</p>
      <FavoriteButton
        slug={art.slug}
        likedArtworkSlugs={likedArtworkSlugs}
        toggleLiked={toggleLiked}
      />
      <Image src={art.imageSource} alt={art.name} width={400} height={420} />
      <p>
        {art.genre}, {art.year}
      </p>
      <ColorPalette colors={art.colors} />
    </div>
  );
}
