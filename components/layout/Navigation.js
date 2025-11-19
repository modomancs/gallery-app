import Link from "next/link";
import styled from "styled-components";
const NavStyle = styled.div`
  display: inline-flex;
  gap: 20px;
  margin-bottom: 20px;
  position: sticky;
  bottom: 0;
  background-color: #f9f9f9;
  padding: 10px 0;
  border-bottom: 5px solid #ccc;
  z-index: 1000;
  width: 13%;
  align-items: center;

  a {
    text-decoration: none;
    color: inherit;
  }
  a:hover {
    text-decoration: underline;
  }
`;
export default function Navigation() {
  return (
    <NavStyle>
      <Link href="/">Gallery</Link>
      <Link href="/Spotlight">Spotlight</Link>
      <Link href="/favorites">Favorites</Link>
    </NavStyle>
  );
}
