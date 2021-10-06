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
  {if(program == null){
    return(
      <Wrapper>
       <Header />
       <Div>
         <H1>Fill out form for program!!!</H1>
       </Div>
      </Wrapper>
    )
  }

    return (
      <Wrapper>
      <Header />
      {getProgramPage()}
    </Wrapper>
  );
}
};

const H1 = styled.h1`
    text-shadow: 2px 2px black;
    font-size: 100px;
    color: red;
`

const Div = styled.div`
  max-width: 1000px;
  margin: auto;
`

const Wrapper = styled.div`
  width: 100%;
  height: 2000px;
  background-image: url(${ProgramImg});
  background-size: cover;
  background-position: center;
  position: relative;
`;

export default ProgramPage;
