// import { useRouter } from "next/router";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

export default function ArtPieceDetails({ art, isLiked, toggleLiked }) {
  return (
    <div>
      <h2>{art.name}</h2>
      <p>{art.artist}</p>
      <FavoriteButton
        slug={art.slug}
        isLiked={isLiked}
        toggleLiked={toggleLiked}
      />
      <Image src={art.imageSource} alt={art.name} width={400} height={420} />
      <p>
        {art.genre}, {art.year}
      </p>
    </div>
  );
}
