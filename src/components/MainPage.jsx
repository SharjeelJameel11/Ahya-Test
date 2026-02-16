import { useState, useEffect } from "react";
import PersonalForm from "./pages/forms/PersonalForm";
import AboutForm from "./pages/forms/About";
import EducationForm from "./pages/forms/EducationForm";
import LanguageForm from "./pages/forms/LanguageForm";
import ExperienceForm from "./pages/forms/ExperienceForm";
import ExpertiseForm from "./pages/forms/ExpertiseForm";
import ReferencesForm from "./pages/forms/ReferenceForm";
import Template1Image from "../assets/CV-Template-01.png";
import Template2Image from "../assets/CV-Template-02.png";
import Template3Image from "../assets/CV-Template-03.png";
import Template1 from "./pages/template1";
import Template2 from "./pages/template2";
import Template3 from "./pages/template3";
import {
  Personal,
  Education,
  Experience,
  Expertise,
  Reference,
  Language,
  About,
} from "../assets/svg";

import { initialResumeData } from "./InitialData";

const sections = [
  { id: "personal", title: "Personal Info", logo: Personal },
  { id: "about", title: "About me", logo: About },
  { id: "education", title: "Education", logo: Education },
  { id: "language", title: "Language", logo: Language },
  { id: "experience", title: "Work experience", logo: Experience },
  { id: "expertise", title: "Areas of expertise", logo: Expertise },
  { id: "references", title: "References", logo: Reference },
];

const templates = [
  { id: "template1", image: Template1Image, component: Template1 },
  { id: "template2", image: Template3Image, component: Template2 },
  { id: "template3", image: Template2Image, component: Template3 },
];

function MainPage() {
  const [resumeData, setResumeData] = useState(initialResumeData);
  const [active, setActive] = useState("personal");
  const [selectedTemplate, setSelectedTemplate] = useState("template1");
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const editFlag = localStorage.getItem("isEditable");
    const savedResume = localStorage.getItem("resumeData");
    const savedTemplate = localStorage.getItem("selectedTemplate");

    if (editFlag === "true") {
      setIsEdit(true);
      if (savedResume) setResumeData(JSON.parse(savedResume));
      if (savedTemplate) setSelectedTemplate(savedTemplate);
    }
  }, []);

  const updateObjectField = (section, key, value) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }));
  };

  const updateStringField = (section, value) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: value,
    }));
  };

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

  const handleNextSection = () => {
    const currentIndex = sections.findIndex((s) => s.id === active);
    const nextIndex = (currentIndex + 1) % sections.length;
    setActive(sections[nextIndex].id);
  };

  const ActiveTemplate =
    templates.find((t) => t.id === selectedTemplate)?.component || Template1;

  return (
    <div className="grid grid-cols-1 md:grid-cols-9 bg-[#F8F7FA] p-4 font-montserrat gap-4 min-h-screen">
      <div className="p-4 col-span-2 border border-[#DEE0E3] rounded-md bg-white">
        <div className="text-[1.6rem] font-medium px-2">
          Select to fill details
        </div>
        <div className="text-[1.2rem] text-[#0F132499] px-2 py-2">
          Select and fill details Individually
        </div>
        <div className="border-b border-[#DEE0E3] my-3"></div>

        <div className="grid grid-cols-2 p-4 gap-3">
          {sections.map((sec) => {
            const Icon = sec.logo;
            const isActive = active === sec.id;
            return (
              <div
                key={sec.id}
                onClick={() => setActive(sec.id)}
                className={`flex flex-col items-center justify-center p-4 rounded-md cursor-pointer transition-all ${
                  isActive
                    ? "bg-[#EEF4FF] border-b-2 border-[#2563EB]"
                    : "hover:bg-gray-100"
                }`}
              >
                {Icon && (
                  <Icon
                    fill={isActive ? "#00318B" : "#0D1126"}
                    className="w-6 h-6 mb-2"
                  />
                )}
                <span
                  className={`text-[1.3rem] text-center ${
                    isActive
                      ? "text-[#2563EB] font-medium"
                      : "text-[#6B7280]"
                  }`}
                >
                  {sec.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white col-span-4 p-4 rounded-md border border-[#DEE0E3]">
        <h1 className="text-[1.6rem] font-medium">
          {sections.find((s) => s.id === active)?.title}
        </h1>
        <div className="text-[1.2rem] text-[#0F132499] px-2 py-2">
          Fill details here
        </div>
        <div className="border-b border-[#DEE0E3] my-3"></div>

        <div className="p-4">
          {active === "personal" && (
            <PersonalForm
              data={resumeData.personal}
              updateField={(k, v) => updateObjectField("personal", k, v)}
              onNext={handleNextSection}
              isEdit={isEdit}
            />
          )}

          {active === "about" && (
            <AboutForm
              data={resumeData.about}
              updateField={(v) => updateStringField("about", v)}
              onNext={handleNextSection}
              isEdit={isEdit}
            />
          )}

          {active === "education" && (
            <EducationForm
              data={resumeData.education}
              addItem={(e) => addArrayItem("education", e)}
              removeItem={(i) => removeArrayItem("education", i)}
              updateItem={(i, k, v) =>
                updateArrayItem("education", i, k, v)
              }
              onNext={handleNextSection}
              isEdit={isEdit}
            />
          )}

          {active === "language" && (
            <LanguageForm
              data={resumeData.language}
              addItem={(e) => addArrayItem("language", e)}
              removeItem={(i) => removeArrayItem("language", i)}
              updateItem={(i, k, v) =>
                updateArrayItem("language", i, k, v)
              }
              onNext={handleNextSection}
              isEdit={isEdit}
            />
          )}

          {active === "experience" && (
            <ExperienceForm
              data={resumeData.experience}
              addItem={(e) => addArrayItem("experience", e)}
              removeItem={(i) => removeArrayItem("experience", i)}
              updateItem={(i, k, v) =>
                updateArrayItem("experience", i, k, v)
              }
              onNext={handleNextSection}
              isEdit={isEdit}
            />
          )}

          {active === "expertise" && (
            <ExpertiseForm
              data={resumeData.expertise}
              updateField={(v) => updateStringField("expertise", v)}
              onNext={handleNextSection}
              isEdit={isEdit}
            />
          )}

          {active === "references" && (
            <ReferencesForm
              data={resumeData.references}
              resumeData={resumeData}
              selectedTemplate={selectedTemplate}
              addItem={(e) => addArrayItem("references", e)}
              removeItem={(i) => removeArrayItem("references", i)}
              updateItem={(i, k, v) =>
                updateArrayItem("references", i, k, v)
              }
              onNext={handleNextSection}
              isEdit={isEdit}
            />
          )}
        </div>
      </div>

      <div className="bg-white col-span-3 p-4 rounded-md border border-[#DEE0E3]">
        <div className="text-[1.6rem] font-medium px-2">
          Select your resumes
        </div>
        <div className="text-[1.2rem] text-[#0F132499] px-2 py-2">
          Select and fill details Individually
        </div>
        <div className="border-b border-[#DEE0E3] my-3"></div>

        <div className="p-4">
          <ActiveTemplate resumeData={resumeData} />
        </div>

        <div className="text-[1.6rem] font-medium p-4">
          Select Template
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((temp) => (
            <div
              key={temp.id}
              onClick={() => setSelectedTemplate(temp.id)}
              className={`flex justify-center cursor-pointer rounded-lg border-2 transition-all ${
                selectedTemplate === temp.id
                  ? "border-purple-500 shadow-md"
                  : "border-transparent hover:border-gray-300"
              }`}
            >
              <img
                src={temp.image}
                alt={temp.id}
                className="h-[120px] rounded-lg object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
