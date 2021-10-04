import React from "react";
import styled from "styled-components";

const Form = () => {
    return (
        <>
            <Wrapper>
                <form>
                <Registration>Registration</Registration>
                <InputWrapper>
                    <div>
                        <Div>
                            <span>Weight</span>
                            <Input type="number" placeholder="Enter Weight" required></Input>
                        </Div>
                        <Div>
                            <span>Height</span>
                            <Input type="number" placeholder="Enter Height" required></Input>
                        </Div>
                    </div>
                    <div>
                        <DivRight>
                            <span>Body Fat %</span>
                            <Input type="number" placeholder="Enter Body Fat" required></Input>
                        </DivRight>
                        <DivRight>
                            <span>Age</span>
                            <Input type="text" placeholder="Enter Age" required></Input>
                        </DivRight>
                    </div>
                </InputWrapper>    
                    <div>
                        <Gender>Gender</Gender>
                        <CheckBox>
                            <div>
                                <span>Male</span>
                                <InputC type="checkbox"></InputC>
                            </div>    
                            <div>
                                <span>Female</span>
                                <InputC type="checkbox"></InputC>
                            </div>      
                        </CheckBox>
                    </div>
                    <RegisterDiv>
                        <input type="submit" value="Register" ></input>
                    </RegisterDiv>
                </form>
            </Wrapper>
        </>
    )
};

const DivRight = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 5px;
    font-size: 20px;
`

const InputC = styled.input`
    width: 20px;
    margin-left: 10px;
    margin-top: 20px;
`

const Input = styled.input`
    margin-left: 10px;
`

const Div = styled.div`
    font-size: 20px;
    margin: 5px;
    display: flex;
`

const RegisterDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
    color: white;
`

const CheckBox = styled.div`
    display: flex;
    justify-content: space-around;
    color: white;
    font-size: 20px;
`

const Gender = styled.span`
    display: flex;
    justify-content: center;
    font-size: 30px;
    font-size: 50px;
    margin-top: 20px;
    color: white;
`

const InputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0px 50px;
    color: white;
`

const Registration = styled.div`
    display: flex;
    justify-content: center;
    font-size: 50px;
    padding: 30px;
    color: white;
`

const Wrapper = styled.div`
    height: 400px;
    max-width: 800px;
    margin: auto;
    margin-top: 40px;
    background-color: black;
    border-radius: 10px;
`

export default Form;