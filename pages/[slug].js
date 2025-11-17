import ArtPieceDetails from "@/components/ArtPieceDetails";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function ImageDetails({ isLiked, toggleLiked }) {
  const router = useRouter();
  const { slug } = router.query;

  const apiUrl = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(apiUrl);
  if (error) {
    return <h2>failed to error: {error.message}</h2>;
  }
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  const dataResults = data?.find((art) => art.slug === slug);
  if (!dataResults) return <h2>Loading...</h2>;
  return (
    <div>
      <ArtPieceDetails
        art={dataResults}
        isLiked={isLiked}
        toggleLiked={toggleLiked}
      />
      <Link href="/">
        <button>
          <Image
            src="/arrow-left.png"
            alt="arrow back"
            width={20}
            height={20}
          ></Image>
        </button>
      </Link>
    </div>
  );
}
