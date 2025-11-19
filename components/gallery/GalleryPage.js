import useSWR from "swr"; // react data fetching
import Image from "next/image";
import Link from "next/link"; // next js link component
import FavoriteButton from "../art-piece/FavoriteButton";
import Comments from "../comments/Comments";
import styled from "styled-components";
const StyledDiv = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  padding: 20px;
`;
const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 0;
`;
const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 5px solid #ccc;
  padding: 30px;
  margin: 10px;
  flex: 1 1 calc(33.333% - 40px);
  max-width: calc(33.333% - 40px);
`;
const StyledH1 = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;
const ImageWrap = styled.div`
  width: 100%;
  padding: 20px;
`;
const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export default function GalleryPage({
  toggleLiked,
  likedArtworkSlugs /* slug */,
}) {
  const apiUrl = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(apiUrl);
  if (error) {
    return <h2>failed to load: {error}</h2>;
  }
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <StyledDiv>
      <StyledH1>Gallery App</StyledH1>
      <StyledUl>
        {data.map((art) => (
          <StyledLi key={art.slug}>
            <h2>{art.name}</h2>
            <p>{art.artist}</p>
            <FavoriteButton
              toggleLiked={toggleLiked}
              likedArtworkSlugs={likedArtworkSlugs}
              slug={art.slug}
            />
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
    </StyledDiv>
  );
}
