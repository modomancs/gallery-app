import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../art-piece/FavoriteButton";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  padding: 20px;
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
  }
`;

const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 0;
`;

const StyledLi = styled.li`
  list-style: none;
  border: 5px solid #ccc;
  background: #f2f2f2;
  padding: 30px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex: 1 1 calc(33.333% - 40px);
  max-width: calc(33.333% - 40px);

  @media (max-width: 900px) {
    flex: 1 1 calc(50% - 40px);
    max-width: calc(50% - 40px);
  }

  @media (max-width: 600px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`;

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  border-bottom: 2px solid #e6e6e6;
  padding-bottom: 10px;
`;

const ImageWrap = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export default function GalleryPage({ toggleLiked, likedArtworkSlugs }) {
  const apiUrl = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(apiUrl);

  if (error) return <h2>failed to load: {error}</h2>;
  if (isLoading) return <h2>Loading...</h2>;

  return (
    <StyledDiv>
      <StyledH1>Art Gallery App</StyledH1>

      <StyledUl>
        {data.map((art) => (
          <StyledLi key={art.slug}>
            <FavWrapper>
              <FavoriteButton
                toggleLiked={toggleLiked}
                likedArtworkSlugs={likedArtworkSlugs}
                slug={art.slug}
              />
            </FavWrapper>

            <h2>{art.name}</h2>
            <p>{art.artist}</p>

            <ImageWrap>
              <Link href={`/${art.slug}`}>
                <StyledImage
                  src={art.imageSource}
                  alt={art.name}
                  width={400}
                  height={420}
                />
              </Link>
            </ImageWrap>
          </StyledLi>
        ))}
      </StyledUl>
    </StyledDiv>
  );
}
