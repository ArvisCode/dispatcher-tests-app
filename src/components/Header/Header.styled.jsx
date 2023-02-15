import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  z-index: 1;
  border-bottom: 3px solid #2b2d7f;
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
