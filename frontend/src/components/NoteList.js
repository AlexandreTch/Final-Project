import React from "react";
import styled from "styled-components";
import NotesImg from "../images/notes.jpg";
import Header from "./Header";
import Note from "./Note";
import AddNote from "./AddNote";

const NoteList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <NoteWrapper>
          {notes.map((note) => (
            <Note
              id={note.id}
              text={note.text}
              date={note.date}
              handleDeleteNote={handleDeleteNote}
            />
          ))}
          <AddNote handleAddNote={handleAddNote} />
        </NoteWrapper>
      </Container>
    </Wrapper>
  );
};

const Container = styled.div`
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

const NoteWrapper = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const Wrapper = styled.div`
  width: 100%;
  height: 2000px;
  background-image: url(${NotesImg});
  background-size: cover;
  background-position: center;
  position: relative;
`;

export default NoteList;
