import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import InfoSection from "./InfoSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import HelpSection from "./HelpSection";

const Body = () => {
  const [placeholder, setPlaceholder] = useState("");
  const [command, setCommand] = useState("");
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const typed = new Typed(".typed-placeholder", {
      strings: [
         "Run 'info' displays view about me",
        "Run 'help' for more information",
        "Run 'clear' to clear the screen"
      ],
      typeSpeed: 50,
      backDelay: 5000,
      loop: true,
      onStringTyped: (pos, self) => {
        setPlaceholder(self.strings[pos]);
      }
    });

    return () => typed.destroy();
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const trimmed = command.trim().toLowerCase();
      switch (trimmed) {
        case "about":
          setActiveSection("about");
          break;
        case "projects":
          setActiveSection("projects");
          break;
        case "skills":
          setActiveSection("skills");
          break;
        case "help":
          setActiveSection("help");
          break;
        case "clear":
          setActiveSection("");
          break;
        default:
          setActiveSection("notfound");
      }
      setCommand("");
    }
  };

  return (
    <div className="text-white p-4 font-mono bg-black min-h-screen">
      <div className="mb-2">
        <span>Welcome to my portfolio</span>
        <input
          type="text"
          className="bg-black outline-none text-white w-full typed-placeholder"
          placeholder={placeholder}
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={handleKeyPress}
          autoFocus
        />
      </div>

      {activeSection === "about" && <InfoSection />}
      {activeSection === "projects" && <ProjectsSection />}
      {activeSection === "skills" && <SkillsSection />}
      {activeSection === "help" && <HelpSection />}
      {activeSection === "notfound" && <p className="text-red-400">Command not found. Type 'help' to see available commands.</p>}
    </div>
  );
};

export default Body;
