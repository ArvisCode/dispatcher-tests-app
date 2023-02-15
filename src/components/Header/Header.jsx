import { LogoUZ } from "../SVG/svgLogoUZ";
import { HeaderContainer } from "./Header.styled";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <a href="/">
          <LogoUZ />
        </a>
        <p>Menu</p>
        <button>Login</button>
      </HeaderContainer>
    </>
  );
};
