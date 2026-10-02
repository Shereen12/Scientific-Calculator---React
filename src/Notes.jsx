import { useState } from "react";

function Notes() {

  const [notes, setNotes] = useState(["", "", "", "", "", "", "", ""]);

  const saveNotes = () => {
    // Implementation for saving notes

    console.log("hello");
  };

  const checkKey = (e, inputNumber) => {
    if(e.key == "Enter"){
        console.log(document.getElementsByClassName("note-line"));
        document.getElementsByClassName("note-line")[inputNumber + 1].focus();
    }
    else{
        if(notes[inputNumber].length > 50){
            document.getElementsByClassName("note-line")[inputNumber + 1].focus();
        }
    }
}

  return (
      <div className="col-2 w-100 border-0 rounded-2xl bg-white p-6 shadow-lg place-content-center">
        <div className="grid grid-rows-6  gap-2">
            <div>
                <input className="note-line"  value={notes[0]} onChange={(e) => setNotes([e.target.value, ...notes.slice(1)])} onKeyDown={(e) => checkKey(e, 0)} />
            </div>
            <div>
                <input className="note-line"  value={notes[1]} onChange={(e) => setNotes([notes[0], e.target.value, ...notes.slice(2)])} onKeyDown={(e) => checkKey(e, 1)} />
            </div>
            <div>
                <input className="note-line"  value={notes[2]} onChange={(e) => setNotes([notes[0], notes[1], notes[2], e.target.value, ...notes.slice(4)])} onKeyDown={(e) => checkKey(e, 2)} />
            </div>
            <div>
                <input className="note-line"  value={notes[3]} onChange={(e) => setNotes([notes[0], notes[1], notes[2], notes[3], e.target.value, ...notes.slice(5)])} onKeyDown={(e) => checkKey(e, 3)} />
            </div>
            <div>
                <input className="note-line"  value={notes[4]} onChange={(e) => setNotes([notes[0], notes[1], notes[2], notes[3], notes[4], e.target.value, ...notes.slice(6)])} onKeyDown={(e) => checkKey(e, 4)} />
            </div>
            <div>
                <input className="note-line"  value={notes[5]} onChange={(e) => setNotes([notes[0], notes[1], notes[2], notes[3], notes[4], notes[5], e.target.value, ...notes.slice(7)])} onKeyDown={(e) => checkKey(e, 5)} />
            </div>
            <div className="grid grid-cols-3">
                {(notes[0].length  || notes[1].length || notes[2].length || notes[3].length || notes[4].length || notes[5].length ) ? <button className="button col-3" onClick={saveNotes()}>Save</button> : ""}
            </div>
          </div>
        </div>
  );t
}

export default Notes;
