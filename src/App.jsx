// src/App.js
import { useState } from "react";

// Forms
import PersonalForm from "./components/pages/forms/PersonalForm";
import AboutForm from "./components/pages/forms/About";          // ← updated import
import EducationForm from "./components/pages/forms/EducationForm";
import LanguageForm from "./components/pages/forms/LanguageForm";
import ExperienceForm from "./components/pages/forms/ExperienceForm";
import ExpertiseForm from "./components/pages/forms/ExpertiseForm";   // ← updated import
import ReferencesForm from "./components/pages/forms/ReferenceForm";

// Icons
import {
  Personal,
  Education,
  Experience,
  Expertise,
  Reference,
  Language,
  About,
} from "./assets/svg";

// Data & Template
import { initialResumeData } from "./components/InitialData";
import Template1 from "./components/pages/template1";



const sections = [
  { id: "personal", title: "Personal Info", logo: Personal },
  { id: "about", title: "About me", logo: About },
  { id: "education", title: "Education", logo: Education },
  { id: "language", title: "Language", logo: Language },
  { id: "experience", title: "Work experience", logo: Experience },
  { id: "expertise", title: "Areas of expertise", logo: Expertise },
  { id: "references", title: "References", logo: Reference },
];

function App() {
  const [resumeData, setResumeData] = useState(initialResumeData);
  const [active, setActive] = useState("personal");

  // Generic update for object sections (personal)
  const updateObjectField = (section, key, value) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }));
  };
  // For string sections (about, expertise) – direct value update
  const updateStringField = (section, value) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: value,
    }));
  };
// inside App function
const handleNextSection = () => {
  const currentIndex = sections.findIndex((s) => s.id === active);
  const nextIndex = (currentIndex + 1) % sections.length; // loop back if last
  setActive(sections[nextIndex].id);
};

  // For array sections
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
console.log(resumeData,"resumeData")
  return (
    <div className="grid grid-cols-9 bg-[#F8F7FA] p-4 font-montserrat gap-4 min-h-screen">
      
      {/* Sidebar */}
      <div className="p-4 col-span-2 border border-[#DEE0E3] rounded-md bg-white">
        <div className="text-[1.6rem] font-medium px-2">
          Select to fill details
        </div>

        <div className="text-[1.2rem] text-[#0F132499] px-2 py-2">
          Select and fill details Individually
        </div>

        <div className="border-b border-[#DEE0E3] my-3"></div>

        {/* Grid Sections */}
        <div className="grid grid-cols-2 gap-3">
          {sections.map((sec) => {
            const Icon = sec.logo;
            const isActive = active === sec.id;

            return (
              <div
                key={sec.id}
                onClick={() => setActive(sec.id)}
                className={`flex flex-col items-center justify-center p-4 rounded-md cursor-pointer transition-all
                  ${
                    isActive
                      ? "bg-[#EEF4FF] border-b-2 border-[#2563EB]"
                      : "hover:bg-gray-100"
                  }`}
              >
                {Icon && (
                  <Icon
                    fill={isActive ? "#00318B" : "#0D1126"}
                    fillopacity={0.4}
                    className="w-6 h-6 mb-2"
                  />
                )}

                <span
                  className={`text-[1.3rem] text-center ${
                    isActive ? "text-[#2563EB] font-medium" : "text-[#6B7280]"
                  }`}
                >
                  {sec.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Center - Active Form */}
      <div className="bg-white col-span-4 p-4 rounded-md border border-[#DEE0E3]">
        <h1 className="text-[1.6rem] px-2 font-medium text-[#000]">
          {sections.find((s) => s.id === active)?.title ||
            "Select a section"}
        </h1>
        <div className="text-[#0F132499] text-[1.2rem] px-2 py-2">Fill Details Here</div>
        <div className="border-b border-[#DEE0E3] my-3"></div>
        {active === "personal" && (
          <PersonalForm
            data={resumeData.personal}
            updateField={(k, v) => updateObjectField("personal", k, v)}
            onNext={handleNextSection}
          />
        )}

        {active === "about" && (
          <AboutForm
            data={resumeData.about}
            updateField={(value) => updateStringField("about", value)}
            onNext={handleNextSection}
          />
        )}

        {active === "education" && (
          <EducationForm
            data={resumeData.education}
            addItem={(empty) => addArrayItem("education", empty)}
            removeItem={(idx) => removeArrayItem("education", idx)}
            updateItem={(idx, k, v) =>
              updateArrayItem("education", idx, k, v)
            }
            onNext={handleNextSection}
          />
        )}

        {active === "language" && (
          <LanguageForm
            data={resumeData.language}
            addItem={(empty) => addArrayItem("language", empty)}
            removeItem={(idx) => removeArrayItem("language", idx)}
            updateItem={(idx, k, v) =>
              updateArrayItem("language", idx, k, v)
            }
            onNext={handleNextSection}
          />
        )}

        {active === "experience" && (
          <ExperienceForm
            data={resumeData.experience}
            addItem={(empty) => addArrayItem("experience", empty)}
            removeItem={(idx) => removeArrayItem("experience", idx)}
            updateItem={(idx, k, v) =>
              updateArrayItem("experience", idx, k, v)
            }
            onNext={handleNextSection}
          />
        )}

        {active === "expertise" && (
          <ExpertiseForm
            data={resumeData.expertise}
            updateField={(value) => updateStringField("expertise", value)}
            onNext={handleNextSection}
          />
        )}

        {active === "references" && (
          <ReferencesForm
            data={resumeData.references}
            addItem={(empty) => addArrayItem("references", empty)}
            removeItem={(idx) => removeArrayItem("references", idx)}
            updateItem={(idx, k, v) =>
              updateArrayItem("references", idx, k, v)
            }
            onNext={handleNextSection}
          />
        )}
      </div>

      {/* Right - Preview */}
      <div className="bg-white col-span-3 p-2 rounded-md border border-[#DEE0E3]">
        <h2 className="text-[1.8rem] mb-6 text-[#111827]">
          Resume Preview
        </h2>
        <Template1 resumeData={resumeData} />
      </div>
    </div>
  );
}

export default App;