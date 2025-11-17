// import { useRouter } from "next/router";
import Image from "next/image";

export default function ArtPieceDetails({art}) {
    return (<div>
            <h2>{art.name}</h2>
            <p>{art.artist}</p>
            <Image
              src={art.imageSource}
              alt={art.name}
              width={400}
              height={420}
            />
            <p>
              {art.genre}, {art.year}
            </p>
            </div>)
            }