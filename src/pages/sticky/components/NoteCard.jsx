import React from "react";

const NoteCard = ({ note, urgent, deleteNote, setDraggable }) => {
  return (
    <div
      onDrag={() => setDraggable(note)}
      draggable="true"
      className={`note-card p bg-secondary border-radius ${
        !urgent ? " bg-one" : "bg-two"
      }`}
    >
      <p> {note.note}</p>
      <small onClick={() => deleteNote(note)}>X</small>
    </div>
  );
};

export default NoteCard;
