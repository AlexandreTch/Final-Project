import React from "react";
import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <Wrapper>
      <P>{text}</P>
      <Footer>
        <P>{date}</P>
        <DeleteIcon size="1.3em" onClick={() => handleDeleteNote(id)} />
      </Footer>
    </Wrapper>
  );
};

const P = styled.p`
  color: black;
`;

const DeleteIcon = styled(MdDeleteForever)`
  &:hover {
    cursor: pointer;
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  background-color: #fefe;
  border-radius: 10px;
  padding: 1rem;
  min-height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: pre-wrap;
`;

export default Note;
