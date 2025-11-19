import Link from "next/link";
import styled from "styled-components";
const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fafafa;
  padding: 10px 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  gap: 30px;
  border-bottom: 2px solid #e6e6e6;
  z-index: 9999;
`;
const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
export default function Navigation() {
  return (
    <NavBar>
      <NavLink href="/">Gallery</NavLink>
      <NavLink href="/Spotlight">Spotlight</NavLink>
      <NavLink href="/favorites">Favorites</NavLink>
    </NavBar>
  );
}
