import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

const Form = () => {
  const [height, setHeight] = useState(0);
  const [bodyFat, setBodyFat] = useState(0);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState();

  let history = useHistory();

  let programObject = {
    type: false,
    exercises: [],
  };

  const getProgram = (event) => {
    if (gender == "male") {
      if (bodyFat < 30) {
        if (age < 17 || age > 70) {
          programObject.type = true;
          window.localStorage.setItem("program", JSON.stringify(programObject));
          history.push({
            pathname: "/program",
          });
        } else {
          if (height < 6) {
            programObject.type = false;
            window.localStorage.setItem(
              "program",
              JSON.stringify(programObject)
            );
            history.push({
              pathname: "/program",
            });
          } else {
            programObject.type = true;
            window.localStorage.setItem(
              "program",
              JSON.stringify(programObject)
            );
            history.push({
              pathname: "/program",
            });
          }
        }
      } else {
        if (bodyFat >= 30) {
          if (age < 17 || age > 70) {
            programObject.type = true;
            window.localStorage.setItem(
              "program",
              JSON.stringify(programObject)
            );
            history.push({
              pathname: "/program",
            });
          } else {
            programObject.type = false;
            window.localStorage.setItem(
              "program",
              JSON.stringify(programObject)
            );
            history.push({
              pathname: "/program",
            });
          }
        }
      }
    } else {
      if (gender == "female") {
        if (bodyFat < 35) {
          if (age < 17 || age > 70) {
            programObject.type = true;
            window.localStorage.setItem(
              "program",
              JSON.stringify(programObject)
            );
            history.push({
              pathname: "/program",
            });
          } else {
            if (height < 6) {
              programObject.type = false;
              window.localStorage.setItem(
                "program",
                JSON.stringify(programObject)
              );
              history.push({
                pathname: "/program",
              });
            } else {
              programObject.type = true;
              window.localStorage.setItem(
                "program",
                JSON.stringify(programObject)
              );
              history.push({
                pathname: "/program",
              });
            }
          }
        } else {
          if (bodyFat >= 35) {
            if (age < 17 || age > 70) {
              programObject.type = true;
              window.localStorage.setItem(
                "program",
                JSON.stringify(programObject)
              );
              history.push({
                pathname: "/program",
              });
            } else {
              programObject.type = false;
              window.localStorage.setItem(
                "program",
                JSON.stringify(programObject)
              );
              history.push({
                pathname: "/program",
              });
            }
          }
        }
      }
    }
  };

  return (
    <>
      <Wrapper>
        <Registration>Registration</Registration>
        <InputWrapper>
          <div>
            <Div>
              <span>Weight</span>
              <Input type="number" placeholder="Enter Weight" required />
            </Div>
            <Div>
              <span>Height</span>
              <Input
                id="myId"
                onChange={(event) => {
                  console.log(event);
                  setHeight(event.target.value);
                }}
                type="number"
                placeholder="Enter Height"
                required
              />
            </Div>
          </div>
          <div>
            <DivRight>
              <span>Body Fat %</span>
              <Input
                onChange={(event) => {
                  setBodyFat(event.target.value);
                }}
                type="number"
                placeholder="Enter Body Fat"
                required
              />
            </DivRight>
            <DivRight>
              <span>Age</span>
              <Input
                onChange={(event) => {
                  setAge(event.target.value);
                }}
                type="text"
                placeholder="Enter Age"
                required
              />
            </DivRight>
          </div>
        </InputWrapper>
        <div>
          <Gender>Gender</Gender>
          <CheckBox required>
            <div onChange={(event) => setGender(event.target.value)}>
              <span>Male</span>
              <input type="radio" name="gender" value="male" />
              <span>Female</span>
              <input type="radio" name="gender" value="female" />
            </div>
          </CheckBox>
        </div>
        <RegisterDiv>
          <button onClick={getProgram}>Register</button>
        </RegisterDiv>
      </Wrapper>
    </>
  );
};

const DivRight = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 5px;
  font-size: 20px;
`;

const Input = styled.input`
  margin-left: 10px;
`;

const Div = styled.div`
  font-size: 20px;
  margin: 5px;
  display: flex;
`;

const RegisterDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  color: white;
`;

const CheckBox = styled.div`
  display: flex;
  justify-content: space-around;
  color: white;
  font-size: 20px;
`;

const Gender = styled.span`
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-size: 50px;
  margin-top: 20px;
  color: white;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 50px;
  color: white;
`;

const Registration = styled.div`
  display: flex;
  justify-content: center;
  font-size: 50px;
  padding: 30px;
  color: white;
`;

const Wrapper = styled.div`
  height: 400px;
  max-width: 800px;
  margin: auto;
  margin-top: 40px;
  background-color: black;
  border-radius: 10px;
`;

export default Form;
