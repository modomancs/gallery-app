import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import FavoriteButton from "/components/art-piece/FavoriteButton";
import Comments from "/components/comments/Comments";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 40px auto;
  max-width: 900px;
  padding: 20px;
  font-size: 1.2rem;
  text-align: center;
`;

const StyledH1 = styled.h1`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  border-bottom: 2px solid #e6e6e6;
  padding-bottom: 10px;
  padding-top: 10px;
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
  background: #f2f2f2;
  border: 5px solid #ccc;
  padding: 30px;
  margin: 10px;
  flex: 1 1 calc(33.333% - 40px);
  max-width: calc(33.333% - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: relative;

  @media (max-width: 768px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`;

const ImageWrap = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
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

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export default function FavoritesPage({ likedArtworkSlugs, toggleLiked }) {
  const apiUrl = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(apiUrl);

  if (error) return <h2>failed to load: {error}</h2>;
  if (isLoading) return <h2>Loading...</h2>;

  const favoriteArts = data.filter((art) =>
    likedArtworkSlugs.includes(art.slug)
  );

  if (favoriteArts.length === 0) {
    return (
      <StyledDiv>
        No liked pictures, please add some from the Gallery page.
      </StyledDiv>
    );
  }

  return (
    <div>
      <StyledH1>Favorites</StyledH1>

      <StyledUl>
        {favoriteArts.map((art) => (
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

            <Comments slug={art.slug} />
          </StyledLi>
        ))}
      </StyledUl>
    </div>
  );
}
