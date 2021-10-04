import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Exercises from './components/Exercises';
import HomePage from './components/Homepage';
import ProgramPage from './components/ProgramPage';
import Login from './components/Login';
import GlobalStyles from './components/GlobalStyles';
import NoteList from './components/NoteList';
import { nanoid } from 'nanoid'
import { MdNotAccessible } from 'react-icons/md';


const App = () => {

  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "First note!",
    date: "15/04/2021"
  },
    {
    id: nanoid(),
    text: "Second note!",
    date: "20/04/2021"
  },
    {
    id: nanoid(),
    text: "Third note!",
    date: "30/04/2021"
  },
]);

const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: text, 
    date: date.toLocaleDateString()
  }
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
}

const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id !== id);
  setNotes(newNotes);
}

  return (
    <BrowserRouter>
    <GlobalStyles />
      <Switch>
        <Route exact path='/'> <HomePage /> </Route>
        <Route exact path='/exercises'> <Exercises /> </Route>
        <Route exact path='/program'> <ProgramPage /> </Route>
        <Route exact path='/notelist'> <NoteList 
        notes={notes} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        /> </Route>
        <Route exact path='/login'> <Login /> </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
