import React, { useState } from "react";
import styled from "styled-components";
import LogInImg from "../images/login.jpg";
import Header from "./Header";

const Login = () => {
  const [loginUser, setLoginUser] = useState();
  const [loginPassword, setLoginPassword] = useState();

  const [foundUser, setFoundUser] = useState(
    JSON.parse(window.localStorage.getItem("user"))
  );

  return (
    <Wrapper>
      <Header />
      <InsideWrap>
        <Form>
          <Div>
            <Label>Username:</Label>
            <input
              onChange={(event) => {
                setLoginUser(event.target.value);
              }}
              type="text"
            />
          </Div>
          <Div>
            <Label>Password:</Label>
            <input 
             onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            type="password" />
          </Div>
          <Div>
            <Button onClick={() => loginUser == foundUser.userName && loginPassword == foundUser.password} >Log in</Button>
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
  background-color: #ffa900;
  margin-top: 100px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 1000px;
  background-image: url(${LogInImg});
  background-size: cover;
  background-position: center;
  position: relative;
`;

export default Login;
