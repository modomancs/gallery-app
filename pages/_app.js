import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import Navigation from "@/components/Navigation";
import useLocalStorageState from "use-local-storage-state";

async function fetcher(url) {
  const response = await fetch(url);
  return await response.json();
}
export default function App({ Component, pageProps }) {
  const [isLiked, setIsLiked] = useLocalStorageState("isLiked", {defaultValue: []});
  function toggleLiked(slug) {
    setIsLiked((liked) =>
      liked.includes(slug)
        ? liked.filter((image) => image !== slug)
        : [...liked, slug]
    );
  }

  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalStyle />
      <Component {...pageProps} isLiked={isLiked} toggleLiked={toggleLiked} />
      <Navigation />
    </SWRConfig>
  );
}
