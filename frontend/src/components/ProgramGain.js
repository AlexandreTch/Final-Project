import React, { useState } from "react";
import styled from "styled-components";

class ExercisePerDayComponent extends React.Component {
  render() {
    console.log(this.props.exercises);
    return this.props.exercises.map((exercise) => {
      {
        console.log(exercise);
      }
      return (
        <div>
          <SecondWrapper>
            <div>
              {/* <h3>Exercise</h3> */}
              <p>{exercise}</p>
              {/* <p>{exercise}</p>
            <p>{exercise}</p>
            <p>{exercise}</p> */}
            </div>
            <div>
              {/* <h3>Sets</h3> */}
              <p>3</p>
              {/* <p>4</p>
            <p>4</p>
            <p>5</p> */}
            </div>
            <div>
              {/* <h3>Reps</h3> */}
              <p>4-6</p>
              {/* <p>6-8</p>
            <p>6-8</p>
            <p>6-8</p> */}
            </div>
            <div>
              {/* <h3>Rest</h3> */}
              <p>3 min</p>
              {/* <p>2 min</p>
            <p>2 min</p>
            <p>2 min</p> */}
            </div>
          </SecondWrapper>
        </div>
      );
    });
  }
}

const ProgramGain = () => {
  const [selectedProgram, setSelectedProgram] = useState(
    JSON.parse(window.localStorage.getItem("program"))
  );

  const renderTableData = (exercises) => {
    return exercises.map((exercise) => {
      return (
        <tr key={exercise}>
          <td>{exercise}</td>
          <td>{3}</td>
          <td>{3}</td>
          <td>{2}</td>
        </tr>
      );
    });
  };

  const renderTableHeader = () => {
    return (
      //TODO: Fix styling
      <div>
        <th>Exercise</th>
        <th>Sets</th>
        <th>Reps</th>
        <th>Rest</th>
      </div>
    );
  };

  return (
    <>
      {/* TODO: Fix css so background is black*/}
      <Title>Muscle gain program</Title>
      <Wrapper>
        <table id="exercises">
          <tbody style={{ color: "white" }}>
            {renderTableHeader()}
            {renderTableData(selectedProgram.exercises)}
          </tbody>
        </table>
        {/* <ExercisePerDayComponent
          day={1}
          exercises={selectedProgram.exercises}
        /> */}

        {/* <Day>Day 1</Day>
        <SecondWrapper>
          <div>
            <h3>Exercise</h3>
            <p>Back</p>
            <p>Chest</p>
            <p>Shoulders</p>
            <p>Legs</p>
          </div>
          <div>
            <h3>Sets</h3>
            <p>3</p>
            <p>4</p>
            <p>4</p>
            <p>5</p>
          </div>
          <div>
            <h3>Reps</h3>
            <p>4-6</p>
            <p>6-8</p>
            <p>6-8</p>
            <p>6-8</p>
          </div>
          <div>
            <h3>Rest</h3>
            <p>3 min</p>
            <p>2 min</p>
            <p>2 min</p>
            <p>2 min</p>
          </div>
        </SecondWrapper>
      </Wrapper>
      <Wrapper>
        <Day>Day 2</Day>
        <SecondWrapper>
          <div>
            <h3>Exercise</h3>
            <p>Back</p>
            <p>Chest</p>
            <p>Shoulders</p>
            <p>Legs</p>
          </div>
          <div>
            <h3>Sets</h3>
            <p>3</p>
            <p>4</p>
            <p>4</p>
            <p>5</p>
          </div>
          <div>
            <h3>Reps</h3>
            <p>4-6</p>
            <p>6-8</p>
            <p>6-8</p>
            <p>6-8</p>
          </div>
          <div>
            <h3>Rest</h3>
            <p>3 min</p>
            <p>2 min</p>
            <p>2 min</p>
            <p>2 min</p>
          </div>
        </SecondWrapper>
      </Wrapper>
      <Wrapper>
        <Day>Day 2</Day>
        <SecondWrapper>
          <div>
            <h3>Exercise</h3>
            <p>Back</p>
            <p>Chest</p>
            <p>Shoulders</p>
            <p>Legs</p>
          </div>
          <div>
            <h3>Sets</h3>
            <p>3</p>
            <p>4</p>
            <p>4</p>
            <p>5</p>
          </div>
          <div>
            <h3>Reps</h3>
            <p>4-6</p>
            <p>6-8</p>
            <p>6-8</p>
            <p>6-8</p>
          </div>
          <div>
            <h3>Rest</h3>
            <p>3 min</p>
            <p>2 min</p>
            <p>2 min</p>
            <p>2 min</p>
          </div>
        </SecondWrapper> */}
      </Wrapper>
    </>
  );
};

const Day = styled.h2`
  margin-left: 20px;
  text-shadow: 2px 2px #ff0000;
  font-size: 30px;
`;

const SecondWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  text-shadow: 2px 2px #ff0000;
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
