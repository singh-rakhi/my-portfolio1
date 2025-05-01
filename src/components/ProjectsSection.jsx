import React from "react";

const projects = [
  {
    title: "Vitiya Gyan Mela (ICAI)",
    link: "https://vitiyagyanmela.icai.org",
    description: "Developed an interactive platform promoting financial literacy.",
  },
  {
    title: "ICAI Financial Literacy Ambassador Program",
    link: "https://vitiyagyanmela.icai.org/ambassador",
    description: "Built a portal empowering financial awareness ambassadors.",
  },
  {
    title: "ICAI 75th Anniversary Website",
    link: "http://icai75.icai.org/",
    description: "Celebratory website with historical timelines and events. (Archived)",
  },
  {
    title: "BuyUcoin",
    link: "http://buyucoin.com/",
    description: "Worked on crypto exchange with secure, fast features.",
  },
  {
    title: "WTI Space",
    link: "https://wtispace.com/",
    description: "Built corporate logistics website with a modern UI.",
  },
  {
    title: "SwiftRamp",
    link: "https://swiftramp.in/",
    description: "Remittance and API platform with developer documentation.",
  },
  {
    title: "Yoga Goals India",
    link: "https://yogagoalsindia.com/",
    description: "Yoga and wellness site with programs and online sessions.",
  },
];

const ProjectsSection = () => (
  <section className="bg-gray-900 text-white rounded-2xl shadow-xl p-6 mt-6">
    <h2 className="text-2xl font-semibold text-blue-400 mb-4 border-b border-blue-500 pb-2">
      Projects
    </h2>
    <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 custom-scroll">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition duration-300"
        >
          <h3 className="text-lg font-semibold text-blue-300">
            {index + 1}. {project.title}
          </h3>
          <a
            href={project.link}
            className="text-sm text-blue-400 underline inline-block mt-1"
            target="_blank"
            rel="noreferrer"
          >
            Visit Project
          </a>
          <p className="text-sm mt-2 text-gray-300">{project.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
