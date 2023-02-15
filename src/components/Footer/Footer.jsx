import { LogoUZ } from "../SVG/svgLogoUZ";
import { FooterContainer, CopyrightTag } from "./Footer.styled";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <a href="/">
          <LogoUZ />
        </a>
        <div>
          <a
            style={{ padding: "0 5px" }}
            href="https://github.com/ArvisCode"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub size={35} fill={"#2b2d7f"} />
          </a>
          <a
            style={{ padding: "0 5px" }}
            href="https://www.linkedin.com/in/vladimir-gorbatiuk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin size={35} fill={"#2b2d7f"} />
          </a>
        </div>
        <CopyrightTag>&copy; ArvisCode 2023</CopyrightTag>
      </FooterContainer>
    </>
  );
};
