import React from "react";
import { Code, Database, Cloud, FileText, Zap, Puzzle } from "lucide-react";

const SkillsSection = () => (
  <section className="bg-gray-900 text-white rounded-2xl shadow-xl p-6 mt-6">
    <h2 className="text-2xl font-semibold text-yellow-400 mb-4 border-b border-yellow-500 pb-2">
      Technical Skills
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm sm:text-base">
      <div className="flex items-start space-x-2">
        <Code className="text-yellow-400 w-5 h-5 mt-1" />
        <p>
          <strong>Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), React.js
        </p>
      </div>
      <div className="flex items-start space-x-2">
        <Zap className="text-yellow-400 w-5 h-5 mt-1" />
        <p>
          <strong>Backend:</strong> Node.js, Express.js
        </p>
      </div>
      <div className="flex items-start space-x-2">
        <Database className="text-yellow-400 w-5 h-5 mt-1" />
        <p>
          <strong>Databases:</strong> PostgreSQL, MongoDB
        </p>
      </div>
      <div className="flex items-start space-x-2">
        <Cloud className="text-yellow-400 w-5 h-5 mt-1" />
        <p>
          <strong>DevOps & Deployment:</strong> AWS EC2, GitHub Actions, PM2
        </p>
      </div>
      <div className="flex items-start space-x-2">
        <Puzzle className="text-yellow-400 w-5 h-5 mt-1" />
        <p>
          <strong>API & Integrations:</strong> REST APIs, Payment Gateways, KYC Services
        </p>
      </div>
      <div className="flex items-start space-x-2">
        <FileText className="text-yellow-400 w-5 h-5 mt-1" />
        <p>
          <strong>Documentation:</strong> Swagger (OpenAPI), Markdown
        </p>
      </div>
      <div className="flex items-start space-x-2">
        <Zap className="text-yellow-400 w-5 h-5 mt-1" />
        <p>
          <strong>Additional Skills:</strong> SEO, Performance Tuning, Responsive Design
        </p>
      </div>
    </div>
  </section>
);

export default SkillsSection;
