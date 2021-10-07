import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ExerciseImg from "../images/exercise.jpg";
import Header from "./Header";

const Exercises = () => {
  const [exercises, setExercises] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState(
    JSON.parse(window.localStorage.getItem("program"))
  );

  if (selectedProgram != null) {
    let programExercises = selectedProgram.exercises;
  };

  useEffect(() => {
    const arrayOfPromises = [
      fetch("/exercises?bodypart=back").then((res) => res.json()),
      fetch("/exercises?bodypart=chest").then((res) => res.json()),
      fetch("/exercises?bodypart=shoulders").then((res) => res.json()),
      fetch("/exercises?bodypart=upper legs").then((res) => res.json()),
    ];

    Promise.all(arrayOfPromises).then((data) => {
      setExercises(data);
      console.log("data", data.slice(0, 6));
    });
  }, []);

  const backExercises =
    (exercises && exercises[0] && exercises[0].slice(0, 6)) || [];
  const chestExercises =
    (exercises && exercises[1] && exercises[1].slice(0, 6)) || [];
  const shouldersExercises =
    (exercises && exercises[2] && exercises[2].slice(0, 6)) || [];
  const legsExercises =
    (exercises && exercises[3] && exercises[3].slice(10, 16)) || [];
  {
    if (selectedProgram == null) {
      return (
        <Wrapper>
          <Header />
          <FillForm>
            <H1>Fill out form for program!!!</H1>
          </FillForm>
        </Wrapper>
      );
    } else {
      return (
        <>
          <Wrapper>
            <Header />
            <Title>Back - Exercises - (12Max)</Title>
            <ImageWrapper>
              {backExercises.map((exercise) => {
                return (
                  <BoxWrap
                    onClick={() => {
                      selectedProgram.exercises.unshift(exercise.name);

                      if (selectedProgram.exercises.length > 12) {
                        selectedProgram.exercises.pop();
                        window.localStorage.setItem(
                          "program",
                          JSON.stringify(selectedProgram)
                        );
                      } else {
                        window.localStorage.setItem(
                          "program",
                          JSON.stringify(selectedProgram)
                        );
                      }
                    }}
                  >
                    <img src={exercise.gifUrl} width="200" />
                    <p>{exercise.name}</p>
                  </BoxWrap>
                );
              })}
            </ImageWrapper>

            <Title>Chest - Exercises</Title>
            <ImageWrapper>
              {chestExercises.map((exercise) => {
                return (
                  <BoxWrap
                    onClick={() => {
                      selectedProgram.exercises.unshift(exercise.name);

                      if (selectedProgram.exercises.length > 12) {
                        selectedProgram.exercises.pop();
                        window.localStorage.setItem(
                          "program",
                          JSON.stringify(selectedProgram)
                        );
                      } else {
                        window.localStorage.setItem(
                          "program",
                          JSON.stringify(selectedProgram)
                        );
                      }
                    }}
                  >
                    <img src={exercise.gifUrl} width="200" />
                    <p>{exercise.name}</p>
                  </BoxWrap>
                );
              })}
            </ImageWrapper>
            <Title>Shoulders - Exercises</Title>
            <ImageWrapper>
              {shouldersExercises.map((exercise) => {
                return (
                  <BoxWrap
                    onClick={() => {
                      selectedProgram.exercises.unshift(exercise.name);

                      if (selectedProgram.exercises.length > 12) {
                        selectedProgram.exercises.pop();
                        window.localStorage.setItem(
                          "program",
                          JSON.stringify(selectedProgram)
                        );
                      } else {
                        window.localStorage.setItem(
                          "program",
                          JSON.stringify(selectedProgram)
                        );
                      }
                    }}
                  >
                    <img src={exercise.gifUrl} width="200" />
                    <p>{exercise.name}</p>
                  </BoxWrap>
                );
              })}
            </ImageWrapper>
            <Title>Legs - Exercises</Title>
            <ImageWrapper>
              {legsExercises.map((exercise) => {
                return (
                  <BoxWrap
                    onClick={() => {
                      selectedProgram.exercises.unshift(exercise.name);

                      if (selectedProgram.exercises.length > 12) {
                        selectedProgram.exercises.pop();
                        window.localStorage.setItem(
                          "program",
                          JSON.stringify(selectedProgram)
                        );
                      } else {
                        window.localStorage.setItem(
                          "program",
                          JSON.stringify(selectedProgram)
                        );
                      }
                    }}
                  >
                    <img src={exercise.gifUrl} width="200" />
                    <p>{exercise.name}</p>
                  </BoxWrap>
                );
              })}
            </ImageWrapper>
          </Wrapper>
        </>
      );
    }
  }
};

const FillForm = styled.div`
  display: flex;
  justify-content: center;
`;

const H1 = styled.h1`
  text-shadow: 2px 2px black;
  font-size: 100px;
  color: red;
  background-color: black;
  padding: 15px;
`;

const BoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  border-style: solid;
  background-color: black;

  &:hover {
    transform: translate(0, -15px);
    background-color: var(--color-2);
    outline: 5px solid var(--color-2);
    cursor: pointer;
  }
`;

const ImageWrapper = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  max-width: 1300px;
  margin: auto;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 50px;
  text-shadow: 2px 2px #ff0000;
  text-decoration: underline;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 2000px;
  background-image: url(${ExerciseImg});
  background-size: cover;
  background-position: center;
  position: relative;
`;

export default Exercises;
