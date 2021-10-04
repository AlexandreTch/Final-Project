import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <Wrapper>
            <DivLeft>
                <h3>Home</h3>
                <h3>Exercises</h3>
                <h3>Program</h3>
                <h3>About</h3>
            </DivLeft>
            <DivRight>
                <h3>Login</h3>
            </DivRight>
        </Wrapper>
    )
};

const DivLeft = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
    width: 700px;
    color: white;
    font-size: 40px;
    `

const DivRight = styled.div`
    justify-content: center;
    padding: 10px;
    width: 200px;
    color: white;
    font-size: 40px;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.5%;
    background: rgb(0, 0, 0, 0.5);
    background-color: transparent;
`


export default Footer;