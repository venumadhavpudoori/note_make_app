import React, { useState } from 'react'
import './NoteList.css';
import NoteMenuAction from "./NoteMenuAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NoteList = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  const [filter, setFilter] = useState('')
  const [sortBy, setSortBy] = useState('newestFirst')

  const filterNotesInOrder = notes.filter(item => {
        return item.title.toLowerCase().indexOf(filter.toLowerCase()) > -1
        }).sort((a, b) => {
        if (sortBy === 'newestFirst') {
          return b.lastModified - a.lastModified
        } else if (sortBy === 'oldestFirst') {
          return a.lastModified - b.lastModified
        } 
      })
    

  const textFilterHandler = e => {
    const value = e.target.value
    setFilter(value)
  }
  const dropdownSortHandler = e => {
    const value = e.target.value
    setSortBy(value)
  }
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Reminders</h1>
        <button onClick={onAddNote}><b>Create New</b>{' '} <FontAwesomeIcon icon="plus" /></button>
      </div>
      <NoteMenuAction setFilter={textFilterHandler} setSortBy={dropdownSortHandler} dropdownValue={sortBy}/>

      <div className="app-sidebar-notes">
        { filterNotesInOrder.map(({ id, title, body, lastModified }, i) => (
          <div
            className={`app-sidebar-note ${id === activeNote && "active"}`}
            onClick={() => setActiveNote(id)}
          >
            <div className="sidebar-note-title">
              <strong>{title}</strong><FontAwesomeIcon icon="edit"/>
              <button onClick={(e) => onDeleteNote(id)}><FontAwesomeIcon icon="trash-alt"/></button>
            </div>

            <p>{body && body.substr(0, 40) + "..."}</p>
            <small className="note-meta">
              
              {new Date(lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteList;
