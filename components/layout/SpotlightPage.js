import useSWR from "swr";
import Image from "next/image";
import FavoriteButton from "components/art-piece/FavoriteButton";
import Comments from "components/comments/Comments";
import styled from "styled-components";

const StyledPage = styled.div`
  margin: 0 auto;
  max-width: 900px;
  padding: 20px;
  font-size: 1.2rem;
  text-align: center;
`;

const StyledCard = styled.div`
  background: #f2f2f2;
  border: 5px solid #ccc;
  padding: 30px;
  margin: 20px auto;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FavWrapper = styled.div`
  position: absolute;
  top: -15px;
  right: -15px;
  z-index: 999;

  button {
    background: white;
    border-radius: 8px;
    padding: 5px;
    cursor: pointer;
    border: none;
  }
`;

const ImageWrap = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledH1 = styled.h1`
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);

  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;

  border-bottom: 2px solid #e6e6e6;
  padding-bottom: 10px;
  margin-bottom: 30px;
`;
export default function SpotlightPage({ likedArtworkSlugs, toggleLiked }) {
  const apiUrl = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(apiUrl);
  if (error) {
    return <h2>failed to load: {error}</h2>;
  }
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const randomIndex = Math.floor(Math.random() * data.length);
  const spotlightPicture = data[randomIndex];

  return (
    <StyledPage>
      <StyledH1>Spotlight</StyledH1>

      <StyledCard>
        <FavWrapper>
          <FavoriteButton
            toggleLiked={toggleLiked}
            likedArtworkSlugs={likedArtworkSlugs}
            slug={spotlightPicture.slug}
          />
        </FavWrapper>

        <h2>{spotlightPicture.name}</h2>
        <p>{spotlightPicture.artist}</p>

        <ImageWrap>
          <StyledImage
            src={spotlightPicture.imageSource}
            alt={spotlightPicture.name}
            width={600}
            height={620}
          />
        </ImageWrap>

        <p>
          {spotlightPicture.genre}, {spotlightPicture.year}
        </p>

        <Comments slug={spotlightPicture.slug} />
      </StyledCard>
    </StyledPage>
  );
}
