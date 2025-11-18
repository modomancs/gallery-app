import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

export default function FavoritesPage({ isLiked }) {
  const apiUrl = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(apiUrl);
  if (error) {
    return <h2>failed to error: {error}</h2>;
  }
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const favoriteArt = data.filter((art) => isLiked.includes(art.slug));

  if (favoriteArt.length === 0) {
    return <h2>No liked pictures</h2>;
  }

  return (
    <div>
      <h1>Favorites</h1>
      <ul>
        {favoriteArt.map((art) => (
          <li key={art.slug}>
            <h2>{art.name}</h2>
            <p>{art.artist}</p>

            <Link href={`/${art.slug}`}>
              <Image
                src={art.imageSource}
                alt={art.name}
                width={400}
                height={420}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
