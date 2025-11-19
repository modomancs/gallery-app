import SpotlightPage from "/components/layout/SpotlightPage";

export default function spotlight({ isLiked, toggleLiked }) {
  return <SpotlightPage isLiked={isLiked} toggleLiked={toggleLiked} />;
}
