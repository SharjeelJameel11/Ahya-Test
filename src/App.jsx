// src/App.js
import { useState } from "react";
import PersonalForm from "./components/pages/forms/PersonalForm";
// import AboutForm from "./components/pages/forms/AboutForm";
import EducationForm from "./components/pages/forms/EducationForm";
import LanguageForm from "./components/pages/forms/LanguageForm";
import ExperienceForm from "./components/pages/forms/ExperienceForm";
import ExpertiseForm from "./components/pages/forms/ExpertiseForm";
import ReferencesForm from "./components/pages/forms/ReferenceForm";

import { initialResumeData } from "./components/InitialData"; // ya jo bhi path hai
import Template1 from "./components/pages/template1";

const sections = [
  { id: "personal", title: "Personal Info" },
  { id: "about", title: "About me" },
  { id: "education", title: "Education" },
  { id: "language", title: "Language" },
  { id: "experience", title: "Work experience" },
  { id: "expertise", title: "Areas of expertise" },
  { id: "references", title: "References" },
];

function App() {
  const [resumeData, setResumeData] = useState(initialResumeData);
  const [active, setActive] = useState("personal");
 console.log(resumeData,"resume data")
  // Generic update for simple object sections (personal, about)
  const updateField = (section, key, value) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }));
  };

  // For array-based sections
  const addArrayItem = (section, emptyItem) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: [...prev[section], { ...emptyItem }],
    }));
  };

  const removeArrayItem = (section, index) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index),
    }));
  };

  const updateArrayItem = (section, index, key, value) => {
    setResumeData((prev) => {
      const newArray = [...prev[section]];
      newArray[index] = { ...newArray[index], [key]: value };
      return { ...prev, [section]: newArray };
    });
  };

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial, sans-serif" }}>
      {/* Left Sidebar */}
      <div style={{ width: "280px", background: "#f3f4f6", borderRight: "1px solid #e5e7eb", padding: "24px" }}>
        <h2 style={{ marginBottom: "24px", fontSize: "20px" }}>Select to fill details</h2>
        {sections.map((sec) => (
          <div
            key={sec.id}
            onClick={() => setActive(sec.id)}
            style={{
              padding: "12px 16px",
              marginBottom: "8px",
              background: active === sec.id ? "#2563eb" : "transparent",
              color: active === sec.id ? "white" : "#1f2937",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {sec.title}
          </div>
        ))}
      </div>

      {/* Center - Active Form */}
      <div style={{ flex: 1, padding: "40px 32px", overflowY: "auto", background: "#ffffff" }}>
        <h1 style={{ marginBottom: "32px", fontSize: "28px", color: "#111827" }}>
          {sections.find((s) => s.id === active)?.title || "Select a section"}
        </h1>

        {active === "personal" && (
          <PersonalForm 
            data={resumeData.personal} 
            updateField={(k, v) => updateField("personal", k, v)} 
          />
        )}

        {active === "about" && (
          <AboutForm 
            data={resumeData.about} 
            updateField={(k, v) => updateField("about", k, v)} 
          />
        )}

        {active === "education" && (
          <EducationForm
            data={resumeData.education}
            addItem={(empty) => addArrayItem("education", empty)}
            removeItem={(idx) => removeArrayItem("education", idx)}
            updateItem={(idx, k, v) => updateArrayItem("education", idx, k, v)}
          />
        )}

        {active === "language" && (
          <LanguageForm
            data={resumeData.language}
            addItem={(empty) => addArrayItem("language", empty)}
            removeItem={(idx) => removeArrayItem("language", idx)}
            updateItem={(idx, k, v) => updateArrayItem("language", idx, k, v)}
          />
        )}

        {active === "experience" && (
          <ExperienceForm
            data={resumeData.experience}
            addItem={(empty) => addArrayItem("experience", empty)}
            removeItem={(idx) => removeArrayItem("experience", idx)}
            updateItem={(idx, k, v) => updateArrayItem("experience", idx, k, v)}
          />
        )}

        {active === "expertise" && (
          <ExpertiseForm
            data={resumeData.expertise}
            addItem={(empty) => addArrayItem("expertise", empty)}
            removeItem={(idx) => removeArrayItem("expertise", idx)}
            updateItem={(idx, k, v) => updateArrayItem("expertise", idx, k, v)}
          />
        )}

        {active === "references" && (
          <ReferencesForm
            data={resumeData.references}
            addItem={(empty) => addArrayItem("references", empty)}
            removeItem={(idx) => removeArrayItem("references", idx)}
            updateItem={(idx, k, v) => updateArrayItem("references", idx, k, v)}
          />
        )}
      </div>

      {/* Right - Live Preview */}
      <div style={{ 
        width: "420px", 
        background: "#f9fafb", 
        borderLeft: "1px solid #e5e7eb", 
        padding: "24px", 
        overflowY: "auto" 
      }}>
        <h2 style={{ marginBottom: "24px", fontSize: "20px", color: "#111827" }}>
          Resume Preview
        </h2>

        {/* Template ko poora resumeData pass kar rahe hain */}
        <Template1 data={resumeData} />

        {/* Agar multiple templates banane hain to yahan switch kar sakte ho */}
      </div>
    </div>
  );
}

export default App;