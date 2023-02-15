import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  z-index: 1;
  border-top: 3px solid #2b2d7f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px;
  width: 280px;
  @media (min-width: 768px) {
    width: 728px;
  }
  @media (min-width: 1200px) {
    width: 1160px;
  }
`;

export const CopyrightTag = styled.p`
  font-style: 30px;
  font-weight: 700;
  color: #2b2d7f;
`;
