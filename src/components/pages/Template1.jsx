import React from "react";
import { Contact, References, SocialLink } from "../../assets/svg";

const Template1 = ({ resumeData }) => {
  return (
    <div>
      <div className="grid grid-cols-5 min-h-[1100px]">
        <Sidebar resumeData={resumeData} />
        <MainContent resumeData={resumeData} />
      </div>
    </div>
  );
};

export default Template1;

/* ================= SIDEBAR ================= */

const Sidebar = ({ resumeData }) => {
  const { personal, references } = resumeData;

  return (
    <div className="col-span-2 relative bg-[#1F1F1F] py-10 px-6 text-white flex flex-col items-center">

      {/* Orange Triangle */}
      <div
        className="absolute top-0 left-0 w-full h-[200px] bg-[#EB632C]"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />

      {/* Avatar */}
      <div className="relative top-5 z-10 flex justify-center mb-12">
        <div className="w-40 h-40 bg-white p-1 rounded-full">
          {personal?.photo ? (
            <img
              src={personal.photo}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <div className="w-full h-full bg-gray-400 rounded-full" />
          )}
        </div>
      </div>

      <div className="relative z-10 w-full space-y-10 text-sm">

        {/* CONTACT */}
        {(personal?.phone || personal?.email || personal?.address) && (
          <Section title="Contact Me" Icon={Contact}>
            {personal.phone && <p>{personal.phone}</p>}
            {personal.email && <p>{personal.email}</p>}
            {personal.address && <p>{personal.address}</p>}
          </Section>
        )}

        {/* SOCIAL LINKS */}
        {(personal?.linkedin ||
          personal?.indeed ||
          personal?.behance ||
          personal?.website) && (
          <Section title="Social Links" Icon={SocialLink}>
            {personal.linkedin && <p>{personal.linkedin}</p>}
            {personal.indeed && <p>{personal.indeed}</p>}
            {personal.behance && <p>{personal.behance}</p>}
            {personal.website && <p>{personal.website}</p>}
          </Section>
        )}

        {/* REFERENCES */}
        {references?.some(
          (ref) =>
            ref.name ||
            ref.position ||
            ref.company ||
            ref.phone ||
            ref.email ||
            ref.relation
        ) && (
          <Section title="References" Icon={References}>
            {references.map((ref, index) => (
              <div key={index} className="mb-4 space-y-1">
                {ref.name && <p className="font-semibold text-white">{ref.name}</p>}
                {ref.position && <p>{ref.position}</p>}
                {ref.company && <p>{ref.company}</p>}
                {ref.phone && <p>{ref.phone}</p>}
                {ref.email && <p>{ref.email}</p>}
                {ref.relation && <p>{ref.relation}</p>}
              </div>
            ))}
          </Section>
        )}
      </div>
    </div>
  );
};

/* ================= MAIN CONTENT ================= */

const MainContent = ({ resumeData }) => {
  const { personal, about, experience, education, expertise, language } =
    resumeData;

  return (
    <div className="col-span-3 relative px-10 py-8 bg-[#F9F9F9]">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold">{personal?.fullName}</h1>
        <p className="text-lg text-gray-600">{personal?.title}</p>
      </div>

      {/* ABOUT */}
      {about && (
        <MainSection title="About Me">
          <div dangerouslySetInnerHTML={{ __html: about }} />
        </MainSection>
      )}

      {/* EXPERIENCE */}
      {experience?.some(
        (exp) =>
          exp.company ||
          exp.position ||
          exp.description
      ) && (
        <MainSection title="Work Experience">
          {experience.map((exp, index) => (
            <div key={index} className="mb-6">
              {exp.position && (
                <h4 className="font-semibold">{exp.position}</h4>
              )}
              {exp.company && (
                <p className="text-sm text-gray-600">
                  {exp.company} | {exp.startMonth} {exp.startYear} -{" "}
                  {exp.currentlyWorking
                    ? "Present"
                    : `${exp.endMonth} ${exp.endYear}`}
                </p>
              )}
              {exp.description && (
                <div
                  className="text-sm mt-2"
                  dangerouslySetInnerHTML={{ __html: exp.description }}
                />
              )}
            </div>
          ))}
        </MainSection>
      )}

      {/* EDUCATION */}
      {education?.some(
        (edu) =>
          edu.institution ||
          edu.degree ||
          edu.description
      ) && (
        <MainSection title="Education">
          {education.map((edu, index) => (
            <div key={index} className="mb-6">
              {edu.degree && (
                <h4 className="font-semibold">{edu.degree}</h4>
              )}
              {edu.institution && (
                <p className="text-sm text-gray-600">
                  {edu.institution} | {edu.startYear} - {edu.endYear}
                </p>
              )}
              {edu.cgpa && (
                <p className="text-sm">CGPA: {edu.cgpa}</p>
              )}
              {edu.description && (
                <p className="text-sm mt-1">{edu.description}</p>
              )}
            </div>
          ))}
        </MainSection>
      )}

      {/* EXPERTISE */}
      {expertise && (
        <MainSection title="Areas of Expertise">
          <div dangerouslySetInnerHTML={{ __html: expertise }} />
        </MainSection>
      )}

      {/* LANGUAGE */}
      {language?.some((lang) => lang.name || lang.level) && (
        <MainSection title="Language">
          {language.map((lang, index) => (
            <p key={index}>
              {lang.name} {lang.level && `- ${lang.level}`}
            </p>
          ))}
        </MainSection>
      )}

      
      <div
        className="absolute bottom-0 right-0 w-0 h-0
        border-b-[150px] border-b-[#EB632C]
        border-l-[150px] border-l-transparent"
      />
    </div>
  );
};


const Section = ({ title, Icon, children }) => (
  <div>
    <div className="flex items-center gap-3 mb-3">
      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
        <Icon />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <div className="ml-10 space-y-2 text-gray-300">
      {children}
    </div>
  </div>
);

const MainSection = ({ title, children }) => (
  <div className="mb-10">
    <div className="flex items-center gap-3 mb-4">
      <span className="w-3 h-3 rounded-full bg-orange-500" />
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
    <div className="ml-6 text-sm text-gray-700 space-y-2">
      {children}
    </div>
  </div>
);
