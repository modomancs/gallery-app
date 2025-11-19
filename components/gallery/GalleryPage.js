import useSWR from "swr"; // react data fetching
import Image from "next/image";
import Link from "next/link"; // next js link component
import FavoriteButton from "/components/art-piece/FavoriteButton";
import Comments from "/components/comments/Comments";

export default function GalleryPage({
  toggleLiked,
  likedArtworkSlugs /* slug */,
}) {
  const apiUrl = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(apiUrl);
  if (error) {
    return <h2>failed to load: {error}</h2>;
  }
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Gallery App</h1>
      <ul>
        {data.map((art) => (
          <li key={art.slug}>
            <h2>{art.name}</h2>
            <p>{art.artist}</p>
            <FavoriteButton
              toggleLiked={toggleLiked}
              likedArtworkSlugs={likedArtworkSlugs}
              slug={art.slug}
            />
            <Link href={`/${art.slug}`}>
              <Image
                src={art.imageSource}
                alt={art.name}
                width={400}
                height={420}
              />
            </Link>
            <Comments slug={art.slug} />
          </li>
        ))}
      </ul>
    </div>
  );
}
