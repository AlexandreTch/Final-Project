import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Register from "./Register";

//TODO: Check if program is null, display empty page
function LoginRegion() {
  const [loginUser, setLoginUser] = useState();
  const [loginPassword, setLoginPassword] = useState();

  const [foundUser, setFoundUser] = useState();

  if (JSON.parse(window.localStorage.getItem("user")) != null) {
  //   setFoundUser(JSON.parse(window.localStorage.getItem("user")));
  var loggedInUser = JSON.parse(window.localStorage.getItem("user"));
  if (loggedInUser.loggedIn != null) {
    if (loggedInUser.loggedIn) {
      return (
        <Head>
          <StyledLink to="/register">{loggedInUser.userName}</StyledLink>
        </Head>
      );
    }
  }
  }
  return (
    <Div>
      <Head>
        <StyledLink to="/register">Register</StyledLink>
      </Head>
      <Head>
        <StyledLink to="/login">Login</StyledLink>
      </Head>
    </Div>
  );
}

const Header = () => {
  return (
    <Wrapper>
      <DivLeft>
        <Head>
          <StyledLink to="/">Home</StyledLink>
        </Head>
        <Head>
          <StyledLink to="/exercises">Exercises</StyledLink>
        </Head>
        <Head>
          <StyledLink to="/program">Program</StyledLink>
        </Head>
        <Head>
          <StyledLink to="/notelist">Notes</StyledLink>
        </Head>
      </DivLeft>
      <Div>
        <LoginRegion />
      </Div>
    </Wrapper>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  width: 500px;
  color: white;
  font-size: 40px;
  text-shadow: 2px 2px #ff0000;
`;

const Head = styled.h3`
  &:hover {
    opacity: 0.3;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const DivLeft = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  width: 700px;
  color: white;
  font-size: 40px;
  text-shadow: 2px 2px #ff0000;
`;

const DivRight = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 200px;
  color: white;
  font-size: 40px;
  text-shadow: 2px 2px #ff0000;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5%;
  background: rgb(0, 0, 0, 0.5);
  background-color: transparent;
`;

export default Header;
