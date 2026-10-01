import { useState } from "react";

function Notes() {

  
  return (
      <div className="col-start-2  w-100    border-0 rounded-2xl bg-white p-6 shadow-lg place-content-center">
        <div className="grid grid-rows-6 gap-2">
            <div>
                <input className="w-full text-blue-950  border-b border-gray-300" />
            </div>
            <div>
                <input className="w-full text-blue-950  border-b border-gray-300" />
            </div>
            <div>
                <input className="w-full text-blue-950  border-b border-gray-300" />
            </div>
            <div>
                <input className="w-full text-blue-950  border-b border-gray-300" />
            </div>
            <div>
                <input className="w-full text-blue-950  border-b border-gray-300" />
            </div>
            <div>
                <input className="w-full text-blue-950  border-b border-gray-300" />
            </div>
            <div>
                <input className="w-full text-blue-950  border-b border-gray-300" />
            </div>
            <div>
                <input className="w-full text-blue-950  border-b border-gray-300" />
            </div>
          </div>
      </div>
  );
}

export default Notes;
