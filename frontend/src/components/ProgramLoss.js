import React, { useState } from "react";
import styled from "styled-components";

const ProgramLoss = () => {
  const [selectedProgram, setSelectedProgram] = useState(
    JSON.parse(window.localStorage.getItem("program"))
  );

  const renderTableData = (exercises) => {
    return exercises.map((exercise) => {
      return (
        <tr key={exercise}>
          <td>{exercise}</td>
          <td>4-4</td>
          <td>12-15</td>
          <td>1</td>
        </tr>
      );
    });
  };

  return (
    <>
      <Title>Weight loss program</Title>
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
  padding-right: 25px;
  padding-top: 12px;
  font-size: 30px;
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

export default ProgramLoss;
