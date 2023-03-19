import styled from "@emotion/styled";

export const HeroContainer = styled.div`
  overflow: hidden;

  padding: 20px;
  width: 280px;
  @media (min-width: 768px) {
    width: 728px;
  }
  @media (min-width: 1200px) {
    width: 1160px;
  }
`;

export const HeroBtn = styled.button`
  padding: 10px 20px;
  margin: 20px;
`;
