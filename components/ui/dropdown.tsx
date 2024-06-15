import * as React from 'react';

const Dropdown = () => {
  return (
    <div className="bg-card border text-card-foreground shadow  transition w-64 py-2.5">
      <div className="flex flex-col space-y-0.5">
        <h3 className="px-3 hover:bg-neutral-200 py-1 cursor-pointer transition transform active:scale-95">
          General
        </h3>
        <h3 className="px-3 hover:bg-neutral-200 py-1 cursor-pointer transition transform active:scale-95">
          Tools
        </h3>
        <h3 className="px-3 hover:bg-neutral-200 py-1 cursor-pointer transition transform active:scale-95">
          Millions
        </h3>
        <div className="border-b border-b-neutral-200"></div>
        <h3 className="px-3 hover:bg-neutral-200 py-1 cursor-pointer transition transform active:scale-95 text-red-600 hover:bg-red-500/30">
          Logout
        </h3>
      </div>
    </div>
  );
};

export default Dropdown;
