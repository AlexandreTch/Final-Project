import React, { useState } from "react";
import styled from "styled-components";

const ProgramGain = () => {
  const [selectedProgram, setSelectedProgram] = useState(
    JSON.parse(window.localStorage.getItem("program"))
  );

  const renderTableData = (exercises) => {
    return exercises.map((exercise) => {
      return (
        <tr key={exercise}>
          <td>{exercise}</td>
          <td>2-3</td>
          <td>4-6</td>
          <td>2</td>
        </tr>
      );
    });
  };

  return (
    <>
      <Title>Muscle gain program</Title>
      <Wrapper>
        <Div>
          <DivLeft>
            <Th>Exercise</Th>
          </DivLeft>
          <DivRight>
            <Thb>Sets</Thb>
            <Thb>Reps</Thb>
            <Thb>Rest</Thb>
          </DivRight>
        </Div>
        <table id="exercises">
          <tbody style={{ color: "white" }}>
            {renderTableData(selectedProgram.exercises)}
          </tbody>
        </table>
      </Wrapper>
    </>
  );
};

const DivRight = styled.div`
  margin: 5px;
  text-shadow: 2px 2px #ff0000;
`;

const DivLeft = styled.div`
  margin: 5px;
  padding: 12px;
  text-shadow: 2px 2px #ff0000;
`;

const Th = styled.th`
  color: white;
  font-size: 30px;
`;
const Thb = styled.th`
  color: white;
  padding: 5px;
  padding-top: 12px;
  font-size: 25px;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  text-shadow: 2px 2px #ff0000;
  font-size: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: auto;
  background-color: black;
  font-size: 20px;
  margin-top: 30px;
`;

export default ProgramGain;
