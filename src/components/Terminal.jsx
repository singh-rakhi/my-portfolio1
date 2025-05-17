import React from "react";
import TerminalInput from "./inputTerminal";

const Terminal = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-2 border border-gray-700 rounded-md shadow-lg overflow-hidden">
      {/* Terminal Header */}
      <div className="bg-gray-800 text-white flex items-center justify-between px-4 py-2 text-sm font-mono">
        <span>Command Prompt</span>
        <div className="space-x-1">
          <button className="w-3 h-3 bg-red-500 rounded-full inline-block" />
          <button className="w-3 h-3 bg-yellow-500 rounded-full inline-block" />
          <button className="w-3 h-3 bg-green-500 rounded-full inline-block" />
        </div>
      </div>

      {/* Terminal Body */}
      <div className="text-left bg-black text-green-400 font-mono p-4 text-sm leading-relaxed whitespace-pre-wrap">
        Ravinder Joshi [Version 10.0.19045.5737]{"\n"}
        (c) All rights reserved.{"\n\n"}
        <TerminalInput/>
      </div>
    </div>
  );
};

export default Terminal;