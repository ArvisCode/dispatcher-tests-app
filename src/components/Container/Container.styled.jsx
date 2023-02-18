import styled from "@emotion/styled";

export const ContainerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 20px;
  margin: 0 auto;
  max-width: 320px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 36px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    padding: 0 112px;
  }
`;

export const MainBox = styled.div`
  display: flex;
  margin: 80px auto;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
