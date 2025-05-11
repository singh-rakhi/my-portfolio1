import React from "react";

const HelpSection = () => (
  <div className="mt-4 space-y-2">
    <h2 className="text-xl font-bold text-purple-400">Help - Available Commands</h2>
    <ul className="list-disc list-inside">
      <li><strong>about</strong> - Displays information about me.</li>
      <li><strong>projects</strong> - Displays portfolio project details.</li>
      <li><strong>skills</strong> - Shows technical skills.</li>
      <li><strong>clear</strong> - Clears the current view.</li>
      <li><strong>help</strong> - Displays this help message.</li>
    </ul>
  </div>
);

export default HelpSection;
