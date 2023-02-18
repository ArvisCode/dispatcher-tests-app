import { useState } from "react";

import { Form, FormTitle, Label, Input, SubmitButton } from "./Forms.styled";

export const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    e.persist();
    setLoginData((loginData) => ({
      ...loginData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(loginData);
    setLoginData({
      name: "",
      password: "",
    });
  };

  return (
    <Form>
      <FormTitle>Для входу заповніть форму</FormTitle>
      <Label>
        ПІБ
        <Input
          type="text"
          placeholder="ПІБ"
          name="name"
          value={loginData.name}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Пароль
        <Input
          type="password"
          placeholder="Пароль"
          name="password"
          value={loginData.password}
          onChange={handleChange}
        />
      </Label>
      <SubmitButton type="button" onClick={handleClick}>
        Login
      </SubmitButton>
    </Form>
  );
};
