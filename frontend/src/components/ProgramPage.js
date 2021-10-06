import React, { useState } from "react";
import styled from "styled-components";
import ProgramImg from "../images/program.jpg";
import Header from "./Header";
import ProgramGain from "./ProgramGain";
import ProgramLoss from "./ProgramLoss";
import { useHistory } from "react-router";

const ProgramPage = () => {
  const [program, setIsFatLoss] = useState(
    JSON.parse(window.localStorage.getItem("program"))
  );

  //TODO: Check if program is null, display empty page
  const getProgramPage = () => {
    if (program.type) return <ProgramGain />;
    else return <ProgramLoss />;
  };
  return (
    <Wrapper>
      <Header />
      {getProgramPage()}
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
