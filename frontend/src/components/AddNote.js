import { useState } from "react";
import React from "react-router-dom";
import styled from "styled-components";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <Wrapper>
      <Textarea
        rows="8"
        cols="10"
        placeholder="Type to add note..."
        value={noteText}
        onChange={handleChange}
      ></Textarea>
      <NoteFooter>
        <P>{characterLimit - noteText.length} remaining</P>
        <Button onClick={handleSaveClick}>Save</Button>
      </NoteFooter>
    </Wrapper>
  );
};

const Button = styled.button`
  background-color: #e1e1e1;
  border: none;
  border-radius: 15px;
  padding: 5px 10px 5px 10px;

  &:hover {
    background-color: #ededed;
    cursor: pointer;
  }
`;

const Textarea = styled.textarea`
  border: none;
  resize: none;
  background-color: #67d7cc;
  outline: none;
  width: 200px;
`;

const P = styled.p`
  color: black;
`;

const Wrapper = styled.div`
  background-color: #67d7cc;
  border-radius: 10px;
  padding: 1rem;
  min-height: 170px;
`;

const NoteFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default AddNote;
