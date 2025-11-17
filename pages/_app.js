import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
async function fetcher(url) {
  const response = await fetch(url);
  return await response.json();
}
export default function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalStyle />
      <Component {...pageProps} />
    </SWRConfig>
  );
}
