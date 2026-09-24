import React from "react";

const Titel = ({ children }) => {
  return (
    <div className=" p-3 rounded bg-gradient-to-br from-slate-600 via-indigo-950 to-violet-950 text-black">
      <h2 className="text-5xl font-bold">{children}</h2>
    </div>
  );
};

export default Titel;
