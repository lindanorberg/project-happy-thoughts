import React from 'react';

export const ThoughtForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit} className="inputForm">
      <h2 className="heading">What is making you happy right now?</h2>
      <textarea value={newThought} onChange={onNewThoughtChange} placeholder="Write it here..." className="textInput" />
      <button type="submit" className="submitBtn">💗 Send Happy Thought 💗</button>
    </form>
  )
};