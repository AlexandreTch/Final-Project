import React from "react";
import styled from "styled-components";

const ProgramGain = () => {
  return (
    <>
      <Wrapper>
        <Title>Muscle gain program</Title>
        <Day>Day 1</Day>
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
        </SecondWrapper>
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