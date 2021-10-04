import React from "react";
import HomeImg from "../images/homeImg.jpg";
import styled from "styled-components";
import Header from "./Header";
import Form from "./Form";

const HomePage = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Text>
          Welcome to your personal training system, fill out the infirmation
          below to get your free program ⇩
        </Text>
        <Form />
      </Wrapper>
    </>
  );
};

const Text = styled.h1`
  color: white;
  max-width: 800px;
  margin: auto;
  margin-top: 50px;
  font-size: 100px;
  text-shadow: 2px 2px #ff0000;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 2000px;
  background-image: url(${HomeImg});
  background-size: cover;
  background-position: center;
  position: relative;
`;

export default HomePage;
