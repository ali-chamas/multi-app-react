import React, { useState } from "react";
import "./style.css";
import NoteCard from "./components/NoteCard";
const StickyNotes = () => {
  const [notes, setNotes] = useState(
    JSON.parse(window.localStorage.getItem("notes")) ?? []
  );
  const [noteInput, setNoteInput] = useState("");
  const [draggable, setDraggable] = useState({});

  const updateLocalStorage = (array) => {
    window.localStorage.setItem("notes", JSON.stringify(array));
  };

  const addNote = () => {
    const newNote = {
      id: Math.floor(Math.random() * 10000),
      note: noteInput,
      urgent: false,
    };
    notes.push(newNote);
    setNotes(notes);
    updateLocalStorage(notes);
    setNoteInput("");
  };

  const deleteNote = (note) => {
    const newNotes = notes.filter((n) => n.id !== note.id);
    setNotes(newNotes);

    updateLocalStorage(newNotes);
  };

  const changeStatus = (e, status) => {
    e.preventDefault();
    if (status == "urgent") {
      setDraggable({ ...draggable, urgent: true });
      for (let i = 0; i < notes.length; i++) {
        if (notes[i].id == draggable.id) {
          notes[i] = draggable;
          setNotes(notes);
          break;
        }
      }
    } else {
      setDraggable({ ...draggable, urgent: false });
      for (let i = 0; i < notes.length; i++) {
        if (notes[i].id == draggable.id) {
          notes[i] = draggable;
          setNotes(notes);
          break;
        }
      }
    }
    updateLocalStorage(notes);
  };

  return (
    <section className="flex  column big-gap p">
      <div className="flex justify-center small-gap sticky-input">
        <input
          type="text"
          placeholder="title"
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
        />

        <button onClick={addNote}>Add note</button>
      </div>
      <div className="flex gap w-full">
        <div
          className="bg-primary   border-radius p notes-container flex column big-gap"
          onDragOver={(e) => changeStatus(e, "urgent")}
        >
          <div>
            <h1>Urgent</h1>
          </div>
          <div className="flex gap">
            {notes.map(
              (note, i) =>
                note.urgent && (
                  <NoteCard
                    note={note}
                    urgent={true}
                    deleteNote={deleteNote}
                    setDraggable={setDraggable}
                    key={i}
                  />
                )
            )}
          </div>
        </div>
        <div
          className="bg-primary   border-radius p notes-container flex column big-gap"
          onDragOver={(e) => changeStatus(e, "not")}
        >
          <div>
            <h1>Not Urgent</h1>
          </div>
          <div className="flex gap">
            {notes.map(
              (note, i) =>
                !note.urgent && (
                  <NoteCard
                    note={note}
                    urgent={false}
                    deleteNote={deleteNote}
                    setDraggable={setDraggable}
                    key={i}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyNotes;
