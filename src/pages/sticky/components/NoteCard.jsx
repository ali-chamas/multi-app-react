import React, { useState } from "react";

const NoteCard = ({ note, urgent, deleteNote, setDraggable }) => {
  const [dragged, setDragged] = useState(false);
  return (
    <div
      onDrag={() => {
        setDraggable(note);
      }}
      onDragStart={() => setDragged(true)}
      onDragEnd={() => setDragged(false)}
      draggable="true"
      className={`note-card p bg-secondary border-radius ${
        !urgent ? " bg-one" : "bg-two"
      } ${dragged && "opacity"}`}
    >
      <p> {note.note}</p>
      <small onClick={() => deleteNote(note)}>X</small>
    </div>
  );
};

export default NoteCard;
