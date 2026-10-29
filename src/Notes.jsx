import { useState } from "react";

function Notes() {

  const [notes, setNotes] = useState("");

  const [lines, setLines] = useState(["", "", "", "", "", ""]);

  const saveNotes = () => {
    // Implementation for saving notes
  };

  const checkKey = (e, inputNumber) => {
    if(e.key == "Enter"){
        document.getElementsByClassName("note-line")[inputNumber + 1].focus();
    }
    else if (e.key != 'Delete' && e.key != 'Backspace'){
        if (lines[inputNumber].length > 50 ){
            if (inputNumber + 1 < 6){
                if (lines[inputNumber + 1].length < 50){
                    console.log("je;;pppp");
                    document.getElementsByClassName("note-line")[inputNumber + 1].focus();
                }
                else
                    document.getElementsByClassName("note-line")[inputNumber].disabled = true; 
            }
            else
                document.getElementsByClassName("note-line")[inputNumber].disabled = true; 
            }
        }
       
    
}

  return (
      <div className="col-2 w-100 border-0 rounded-2xl bg-white p-6 shadow-lg place-content-center">
        <div className="grid grid-rows-6  gap-2">
            <div>
                <input className="note-line"  value={lines[0]} onChange={(e) => setLines([e.target.value, ...lines.slice(1)])} onKeyDown={(e) => checkKey(e, 0)} />
            </div>
            <div>
                <input className="note-line"  value={lines[1]} onChange={(e) => setLines([lines[0], e.target.value, ...lines.slice(2)])} onKeyDown={(e) => checkKey(e, 1)} />
            </div>
            <div>
                <input className="note-line"  value={lines[2]} onChange={(e) => setLines([lines[0], lines[1], e.target.value, ...lines.slice(3)])} onKeyDown={(e) => checkKey(e, 2)} />
            </div>
            <div>
                <input className="note-line"  value={lines[3]} onChange={(e) => setLines([lines[0], lines[1], lines[2], e.target.value, ...lines.slice(4)])} onKeyDown={(e) => checkKey(e, 3)} />
            </div>
            <div>
                <input className="note-line"  value={lines[4]} onChange={(e) => setLines([lines[0], lines[1], lines[2], lines[3], e.target.value, ...lines.slice(5)])} onKeyDown={(e) => checkKey(e, 4)} />
            </div>
            <div>
                <input className="note-line"  value={lines[5]} onChange={(e) => setLines([lines[0], lines[1], lines[2], lines[3], lines[4], e.target.value, ...lines.slice(6)])} onKeyDown={(e) => checkKey(e, 5)} />
            </div>
            <div className="grid grid-cols-3">
                {(lines[0].length || lines[1].length || lines[2].length || lines[3].length || lines[4].length || lines[5].length) ? <button className="button col-3" onClick={saveNotes()}>Save</button> : ""}
            </div>
          </div>
        </div>
  );t
}

export default Notes;
