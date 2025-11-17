import useSWR from "swr";
import Image from "next/image";

export default function HomePage() {
  const apiUrl = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(apiUrl);
  if (error) {
    return <h2>failed to error: {error}</h2>;
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
            <img
              src={art.imageSource}
              alt={art.name}
              width={400}
              height={420}
            />
            <p>
              {art.genre}, {art.year}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
