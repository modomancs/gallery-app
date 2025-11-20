import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import ColorPalette from "./ColorPalette";
import styled from "styled-components";

const ImageContainer = styled.div`
  position: relative;
  width: fit-content;
`;
const StyledFavoriteButtonWrapper = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  z-index: 10;
`;
const StyledDiv = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;
const Styledh2 = styled.h2`
  margin: 0;
  background-color: #f0f0f0;
  padding: 5px 12px;
  border-radius: 5px;
  text-align: center;
`;
export default function ArtPieceDetails({
  art,
  likedArtworkSlugs,
  toggleLiked,
}) {
  return (
    <StyledDiv>
      <Styledh2>{art.name}</Styledh2>
      <p>{art.artist}</p>
      <ImageContainer>
        <StyledFavoriteButtonWrapper>
          <FavoriteButton
            slug={art.slug}
            likedArtworkSlugs={likedArtworkSlugs}
            toggleLiked={toggleLiked}
          />
        </StyledFavoriteButtonWrapper>
        <Image src={art.imageSource} alt={art.name} width={400} height={420} />
      </ImageContainer>
      <p>
        {art.genre}, {art.year}
      </p>
      <ColorPalette colors={art.colors} />
    </StyledDiv>
  );
}
