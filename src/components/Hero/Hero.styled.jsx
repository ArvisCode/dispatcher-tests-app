import styled from "@emotion/styled";

export const HeroContainer = styled.div`
  padding: 90px 20px;
  width: 280px;
  @media (min-width: 768px) {
    width: 728px;
  }
  @media (min-width: 1200px) {
    width: 1160px;
  }
`;

export const HeroTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
`;

export const SubmitButton = styled.button`
  margin: 50px auto;
  padding: 10px 20px;
  font-size: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
