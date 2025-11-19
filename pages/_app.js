import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import Navigation from "@/components/layout/Navigation";
import useLocalStorageState from "use-local-storage-state";

async function fetcher(url) {
  const response = await fetch(url);
  return await response.json();
}
export default function App({ Component, pageProps }) {
  const [likedArtworkSlugs, setLikedArtworkSlugs] = useLocalStorageState(
    "likedArtworkSlugs",
    {
      defaultValue: [],
    }
  );
  function toggleLiked(slug) {
    setLikedArtworkSlugs((liked) =>
      liked.includes(slug)
        ? liked.filter((image) => image !== slug)
        : [...liked, slug]
    );
  }

  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalStyle />
      <Component
        {...pageProps}
        likedArtworkSlugs={likedArtworkSlugs}
        toggleLiked={toggleLiked}
      />
      <Navigation />
    </SWRConfig>
  );
}
