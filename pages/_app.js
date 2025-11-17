import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import Navigation from "@/components/Navigation";
import { useState } from "react";

async function fetcher(url) {
  const response = await fetch(url);
  return await response.json();
}
export default function App({ Component, pageProps }) {
  const [isLiked, setIsLiked] = useState([]);
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
