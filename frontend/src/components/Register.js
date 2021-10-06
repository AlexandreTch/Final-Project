import React, { useState } from "react";
import styled from "styled-components";
import RegisterImg from "../images/register.jpg";
import Header from "./Header";

const Register = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const registerUser = () => {
    let userObject = {
      userName: "",
      password: "",
      program: "",
      loggedIn: false,
    };

    if (confirmPassword != null) {
      if (password === confirmPassword) {
        userObject.userName = userName;
        userObject.password = password;
        userObject.loggedIn = true;
        window.localStorage.setItem("user", JSON.stringify(userObject));
      }
    }
  };

  return (
    <Wrapper>
      <Header />
      <InsideWrap>
        <Form>
          <Div>
            <Label>Username:</Label>
            <input
              onChange={(event) => {
                setUserName(event.target.value);
              }}
              type="text"
              placeholder="Username..."
            />
          </Div>
          <Div>
            <Label>Password:</Label>
            <input
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              type="password"
              placeholder="Password..."
            />
          </Div>
          <Div>
            <Label>Confirm Password:</Label>
            <Input
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
              type="password"
              placeholder="Confirm Password..."
            />
          </Div>
          <Div>
            <Button onClick={() => registerUser()}>Submit</Button>
          </Div>
        </Form>
      </InsideWrap>
    </Wrapper>
  );
};

const Button = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 15px;
`;

const Input = styled.input`
  margin-right: 70px;
`;

const Label = styled.label`
  font-size: 25px;
  margin-right: 30px;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InsideWrap = styled.div`
  padding: 20px;
  border-radius: 15px;
  max-width: 700px;
  margin: auto;
  background-color: #2ec0d1;
  margin-top: 100px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 1000px;
  background-image: url(${RegisterImg});
  background-size: cover;
  background-position: center;
  position: relative;
`;

export default Register;
