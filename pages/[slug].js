import ArtPieceDetails from "@/components/ArtPieceDetails";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function ImageDetails() {
    const router = useRouter() 
    const {slug} = router.query

    const apiUrl = "https://example-apis.vercel.app/api/art";
    const { data, error, isLoading } = useSWR(apiUrl);
  if (error) {
    return <h2>failed to error: {error}</h2>;
  }
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  const dataResults = data.find(art => art.slug === slug);
  return (<div>
            <ArtPieceDetails art={dataResults}/>
              <Link href="/">
                <button>Go Back</button>
              </Link>     
         </div>
  )
}