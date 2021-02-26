import React from 'react'
import { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import NotePlaceholder from "./components/NotePlaceholder";
import NoteList from "./components/NoteList";

import { library } from '@fortawesome/fontawesome-svg-core';
import {faPlus, faSave, faEdit, faTrashAlt, faArrowLeft, faArrowRight, faSearch} from '@fortawesome/free-solid-svg-icons';
library.add(faPlus, faSave, faEdit, faTrashAlt, faArrowLeft, faArrowRight, faSearch)

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);


  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);
  };

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };

  return (
    <div className="App">
      <NoteList
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <NotePlaceholder activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
