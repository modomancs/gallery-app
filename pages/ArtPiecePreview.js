import { Image } from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  const apiUrl = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(apiUrl);
  if (error) {
    return <h2>failed to error: {error}</h2>;
  }
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <article>
      <Image
        src={data.imageSource}
        alt={data.name}
        height={data.dimensions.height}
        width={data.dimensions.width}
      />

      <h2>{data.name}</h2>
      <p>{data.artist}</p>
      <p>{data.year}</p>
      <p>{data.genre}</p>
    </article>
  );
}
