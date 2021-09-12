import React from "react";
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Note from "./Note";
import CreateArea from "./CreateArea";



function App() {
    const [notes, setNotes] = React.useState([]);

    function addNote(note) {
        setNotes(prevNotes => { return [...prevNotes, note] })
    }

    function deleteNote(index) {
        setNotes(prevNotes => prevNotes.filter((note, nodeIndex) => (nodeIndex !== index)));
    }

    return (
        <div>
            <Header />
            <CreateArea  onAdd={addNote}/>
            {
                notes.map((note, index) => {
                    return (
                        <Note
                            key={index}
                            id={index}
                            title={note.title}
                            content={note.content}
                            onDelete={deleteNote}
                        />
                    )})
            }
            <Footer />
        </div>
    )
}

export default App;