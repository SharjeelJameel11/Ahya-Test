import React, { useEffect, useState } from "react";
import Template1 from "./pages/template1";
import Template2 from "./pages/template2";
import Template3 from "./pages/template3";

import {
  Edit,
  Pdf,
  Png,
  Mail,
  Shareable,
  LinkedIn,
  GoogleCloud,
} from "../assets/svg";

import { useNavigate } from "react-router-dom";

function PreviewPage() {
  const [resumeData, setResumeData] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedResume = localStorage.getItem("resumeData");
    const savedTemplate = localStorage.getItem("selectedTemplate");

    if (savedResume) setResumeData(JSON.parse(savedResume));
    if (savedTemplate) setSelectedTemplate(savedTemplate);
  }, []);

  if (!resumeData || !selectedTemplate) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  const templates = {
    template1: Template1,
    template2: Template2,
    template3: Template3,
  };

  const SelectedTemplate = templates[selectedTemplate] || Template1;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-5 p-10 gap-8">

        <div className="col-span-3 bg-white rounded-xl shadow-md overflow-hidden">
          <SelectedTemplate resumeData={resumeData} />
        </div>

        <div className="col-span-2 space-y-6">

          <div className="bg-white rounded-xl shadow-sm">
            <h3 className="font-semibold text-[1.6rem] py-4 px-4">
              Edit option
            </h3>
            <div className="border-b border-[#DEE0E3]" />
            <button
              onClick={() => {
                localStorage.setItem("isEditable", "true");
                navigate("/");
              }}
              className="flex items-center gap-3 w-full py-6 px-4 hover:bg-gray-100 transition"
            >
              <Edit className="w-5 h-5" />
              <span className="text-[1.1rem] font-medium">
                Edit Resume
              </span>
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm">
            <h3 className="font-semibold text-[1.6rem] py-4 px-4">
              Download option
            </h3>
            <div className="border-b border-[#DEE0E3]" />

            <button className="flex items-center gap-3 w-full py-6 px-4 hover:bg-gray-100 transition border-b border-[#F1F1F1]">
              <Pdf className="w-5 h-5" />
              <span className="text-[1.1rem] font-medium">
                Download as PDF
              </span>
            </button>

            <button className="flex items-center gap-3 w-full py-6 px-4 hover:bg-gray-100 transition border-b border-[#F1F1F1]">
              <Png className="w-5 h-5" />
              <span className="text-[1.1rem] font-medium">
                Download as PNG
              </span>
            </button>

            <button className="flex items-center gap-3 w-full py-6 px-4 hover:bg-gray-100 transition">
              <Shareable className="w-5 h-5" />
              <span className="text-[1.1rem] font-medium">
                Copy Shareable Link
              </span>
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm">
            <h3 className="font-semibold text-[1.6rem] py-4 px-4">
              Share & Promote
            </h3>
            <div className="border-b border-[#DEE0E3]" />

            <button className="flex items-center gap-3 w-full py-6 px-4 hover:bg-gray-100 transition border-b border-[#F1F1F1]">
              <Mail className="w-5 h-5" />
              <span className="text-[1.1rem] font-medium">
                Share via Email
              </span>
            </button>

            <button className="flex items-center gap-3 w-full py-6 px-4 hover:bg-gray-100 transition border-b border-[#F1F1F1]">
              <LinkedIn className="w-5 h-5" />
              <span className="text-[1.1rem] font-medium">
                Share on LinkedIn
              </span>
            </button>

            <button className="flex items-center gap-3 w-full py-6 px-4 hover:bg-gray-100 transition">
              <GoogleCloud className="w-5 h-5" />
              <span className="text-[1.1rem] font-medium">
                Save to Google Drive
              </span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PreviewPage;
