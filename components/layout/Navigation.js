import Link from "next/link";

export default function Navigation() {
  return (
    <div>
      <Link href="/">Gallery</Link>
      <Link href="/Spotlight">Spotlight</Link>
      <Link href="/favorites">Favorites</Link>
    </div>
  );
}
