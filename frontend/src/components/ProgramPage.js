import React from "react";
import styled from "styled-components";
import ProgramImg from "../images/program.jpg";
import Header from "./Header";
import ProgramGain from "./ProgramGain";

const ProgramPage = () => {
  return (
    <Wrapper>
      <Header />
      <ProgramGain />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 2000px;
  background-image: url(${ProgramImg});
  background-size: cover;
  background-position: center;
  position: relative;
`;

export default ProgramPage;
