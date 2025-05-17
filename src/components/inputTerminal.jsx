import React, { useState, useEffect } from "react";
import profileData from "./profileData";

const TerminalInput = () => {
  const [input, setInput] = useState("");
  const [bgText, setBgText] = useState("");
  const bgMessage = "Run 'who iam' Displays information about the us";
  const [output, setOutput] = useState("");

  // Typing animation effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setBgText(bgMessage.slice(0, index + 1));
      index++;
      if (index >= bgMessage.length) {
        index = 0;
        setTimeout(() => setBgText(""), 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setInput("");

      profileData.hasOwnProperty(input.trim())
        ? setOutput(profileData[input.trim()])
        : setOutput("command not found");
    }
  };

  return (
    <div className="bg-black text-white font-mono p-6  min-h-[200px]  relative">
      <div className="mt-10 text-lg text-bold">
        {/* Background ghost text */}
        <div
          className="absolute opacity-50 text-green-500 italic pointer-events-none select-none z-0"
          style={{ marginLeft: "100px" }}
        >
          {!input && bgText}
        </div>

        {/* Prompt + Input (above bg text) */}
        <div className="relative">
          <span className="text-white">r:/avi:~# </span>
          <input
            className="bg-transparent outline-none text-white placeholder-gray-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            autoFocus
          />
        </div>
        <div>{output}</div>
      </div>
    </div>
  );
};

export default TerminalInput;