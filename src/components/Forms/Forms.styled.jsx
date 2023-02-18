import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;

  position: absolute;
  top: 40%;
  transform: translate(0, -50%);
`;

export const FormTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.15;
  text-transform: uppercase;
  color: #2b2d7f;

  margin-bottom: 30px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-weight: 400;
  font-size: 14px;
  color: #2b2d7f;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 20px;
  padding: 5px 20px;
  outline: none;

  border: 1px solid #2b2c7d40;
  color: #2b2d7f;

  font-weight: 500;
  font-size: 14px;
  line-height: 18/12;
  letter-spacing: 0;

  &:focus {
    border: 1px solid #2b2d7f;
  }

  &:hover {
    border: 1px solid #2b2d7f;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.66;
  }

  &::placeholder {
    font-weight: 500;
    font-size: 12px;
    line-height: 18/12;
    letter-spacing: 0;

    color: rgba(212, 20, 67, 0.4);

    @media screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 1.66;
    }
  }
`;

export const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;

  font-weight: 700;
  font-size: 20px;
  line-height: 21/16;
  letter-spacing: 0;

  border-color: #2b2d7f;
  border-radius: 3px;
  color: #2b2d7f;
  cursor: pointer;
  transition: background-color 250ms linear;

  &:hover {
    background-color: #2b2d7f;
    color: #fff;
  }

  margin: 20px;
  padding: 10px 30px;
`;
