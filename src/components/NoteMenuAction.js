import React from 'react';



const NoteMenuAction = ({setFilter, setSortBy, dropdownValue}) => {
  return (
    <div>
      <div style={{position: 'relative', fontSize: '1.4rem', color: '#777',textAlign:'center',marginBottom:'15px'}}>
        <input type="text" onChange={setFilter} placeholder="Search by title.." />
      </div>
      <div style={{position: 'relative', fontSize: '1.2rem', color: '#777',textAlign:'center',marginBottom:'15px'}}>
        <label htmlFor="sortBy">Sort by: </label>
        <select name="sortBy" id="sortBy" onChange={setSortBy} value={dropdownValue}>
          <option value="newestFirst">Newest First</option>
          <option value="oldestFirst">Oldest First</option>
        </select>
      </div>
    </div>
  );
};

export default NoteMenuAction
