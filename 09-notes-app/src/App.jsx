import React, { useState } from "react";

const App = () => {
  const [heading, setHeading] = useState("");
  const [details, setDetails] = useState("");
  const [notes, setNotes] = useState([]);

  function addNote(e) {
    e.preventDefault();
    if (heading.trim() === "" || details.trim() === "") return;

    const newNote = {
      id: Date.now(),
      heading,
      details,
    };

    setNotes([...notes, newNote]);
    setHeading("");
    setDetails("");
  }

  function deleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  
  return (
    <div className="min-h-screen bg-black text-white p-10 flex gap-10">

      {/* LEFT SIDE: Form + Notes */}
      <div className="w-2/3">
        <h1 className="text-4xl font-extrabold mb-8 text-blue-400 tracking-wide">
          Notes App
        </h1>

        {/* Form */}
        <form
          onSubmit={addNote}
          className="flex flex-col gap-4 bg-zinc-900 p-6 rounded-2xl shadow-xl border border-zinc-700"
        >
          <input
            type="text"
            placeholder="Enter Note Heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="p-3 rounded-lg bg-black border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            placeholder="Write details..."
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="p-3 rounded-lg bg-black border border-gray-700 placeholder-gray-400 text-white h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-xl text-white font-semibold text-lg"
          >
            Add Note
          </button>
        </form>

        {/* Notes */}
        <div className="mt-10 flex flex-col gap-6">
          {notes.map((note) => (
            <div
              key={note.id}
              className="p-6 bg-zinc-900 border border-zinc-700 rounded-2xl shadow-lg hover:border-blue-500 transition-all"
            >
              <h2 className="text-2xl font-bold text-blue-400">
                {note.heading}
              </h2>
              <p className="text-gray-300 mt-2">{note.details}</p>

              <button
                onClick={() => deleteNote(note.id)}
                className="mt-4 px-5 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white font-medium"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="w-1/3 flex justify-center items-start">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3649/3649463.png"
          alt="Notes Illustration"
          className="w-3/4 drop-shadow-2xl opacity-90"
        />
      </div>
    </div>
  );
};

export default App ;
