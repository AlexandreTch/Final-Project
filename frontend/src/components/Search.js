import React from "react";
import styled from "styled-components";
import {MdSearch} from 'react-icons/md'

const Search = () => {
    return (
        <Wrapper>
            <MdSearch size="1.3em" />
            <Input type="text"placeholder="Type of search..." />
        </Wrapper>
    )
};

const Input = styled.input`
    background-color: #67d7cc;
    border-style: none;
    border: none;
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: #67d7cc;
    padding: 10px;
    border-radius: 15px;
    margin-bottom: 25px;
`

export default Search;