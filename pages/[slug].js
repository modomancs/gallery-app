import ArtPieceDetails from "/components/art-piece/ArtPieceDetails";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import Comments from "/components/comments/Comments";
import styled from "styled-components";

const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #f2f2f2;
  min-height: 100vh;
`;

const StyledCommentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 20px;
`;

const StyledCard = styled.div`
  width: 100%;
  max-width: 900px;
  border: 5px solid #ccc;
  padding: 30px;
  margin: 20px auto;
  border-radius: 10px;
  background: #f2f2f2; /* same as your StyledLi */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    padding: 15px;
    border-width: 3px;
  }
`;

const StyledBackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 20px;
`;

export default function ImageDetails({ likedArtworkSlugs, toggleLiked }) {
  const router = useRouter();
  const { slug } = router.query;

  const apiUrl = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(apiUrl);

  if (error) return <h2>failed to load: {error.message}</h2>;
  if (isLoading) return <h2>Loading...</h2>;

  const dataResults = data?.find((art) => art.slug === slug);
  if (!dataResults) return <h2>Failed to load...</h2>;

  return (
    <StyledPageWrapper>
      <StyledCard>
        <ArtPieceDetails
          art={dataResults}
          likedArtworkSlugs={likedArtworkSlugs}
          toggleLiked={toggleLiked}
        />

        <StyledCommentsWrapper>
          <Comments slug={slug} />
        </StyledCommentsWrapper>
      </StyledCard>

      <Link href="/">
        <StyledBackButton>
          <Image
            src="/arrow-left.png"
            alt="arrow back"
            width={20}
            height={20}
          />
        </StyledBackButton>
      </Link>
    </StyledPageWrapper>
  );
}
