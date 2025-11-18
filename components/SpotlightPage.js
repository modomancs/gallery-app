import useSWR from "swr";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import Comments from "./Comments";

export default function SpotlightPage({ isLiked, toggleLiked }) {
  const apiUrl = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(apiUrl);
  if (error) {
    return <h2>failed to error: {error}</h2>;
  }
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const randomIndex = Math.floor(Math.random() * data.length);
  const spotlightPicture = data[randomIndex];
  return (
    <div>
      <h1>Spotlight Page</h1>
      <h2>{spotlightPicture.name}</h2>
      <p>{spotlightPicture.artist}</p>
      <FavoriteButton
        toggleLiked={toggleLiked}
        isLiked={isLiked}
        slug={spotlightPicture.slug}
      />
      <Image
        src={spotlightPicture.imageSource}
        alt={spotlightPicture.name}
        width={600}
        height={620}
      />
      <p>
        {spotlightPicture.genre}, {spotlightPicture.year}
      </p>
      <Comments />
    </div>
  );
}
