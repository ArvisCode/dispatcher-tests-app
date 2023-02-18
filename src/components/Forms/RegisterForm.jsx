import { useState } from "react";

import { Form, FormTitle, Label, Input, SubmitButton } from "./Forms.styled";

export const RegisterForm = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (e) => {
    e.persist();
    setRegisterData((registerData) => ({
      ...registerData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(registerData);
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form>
      <FormTitle>Для реєстрації заповніть форму</FormTitle>
      <Label>
        ПІБ
        <Input
          type="text"
          placeholder="ПІБ"
          name="name"
          value={registerData.name}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Пароль
        <Input
          type="password"
          placeholder="Пароль"
          name="password"
          value={registerData.password}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Повторіть пароль
        <Input
          type="password"
          placeholder="Повторіть пароль"
          name="repeatPassword"
          value={registerData.repeatPassword}
          onChange={handleChange}
        />
      </Label>
      <SubmitButton type="button" onClick={handleClick}>
        Register
      </SubmitButton>
    </Form>
  );
};
