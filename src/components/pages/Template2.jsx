import React from "react";
import { Contact, References, SocialLink } from "../../assets/svg";

const Template2 = ({ resumeData }) => {
  return (
    <div>
      <div className="grid mt-2 grid-cols-5 min-h-[900px]">
        <Sidebar resumeData={resumeData} />
        <MainContent resumeData={resumeData} />
      </div>
    </div>
  );
};

export default Template2;

const Sidebar = ({ resumeData }) => {
  const { personal, references } = resumeData;

  return (
    <div className="col-span-2 relative bg-[#15173D] py-10 px-6 text-white flex flex-col items-center">
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
        {(personal?.phone || personal?.email || personal?.address) && (
          <Section title="Contact Me" Icon={Contact}>
            {personal.phone && <p>{personal.phone}</p>}
            {personal.email && <p>{personal.email}</p>}
            {personal.address && <p>{personal.address}</p>}
          </Section>
        )}

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
            ref.phone ||
            ref.email
        ) && (
          <Section title="References" Icon={References}>
            {references.map((ref, index) => (
              <div key={index} className="mb-4 space-y-1">
                {ref.name && (
                  <p className="font-semibold text-white">
                    {ref.name}
                  </p>
                )}
                {ref.position && <p>{ref.position}</p>}
                {ref.phone && <p>{ref.phone}</p>}
                {ref.email && <p>{ref.email}</p>}
              </div>
            ))}
          </Section>
        )}
      </div>
    </div>
  );
};


const MainContent = ({ resumeData }) => {
  const { personal, about, experience, education, expertise, language } =
    resumeData;

  return (
    <div className="col-span-3 relative bg-[#FFF] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[220px] bg-[#0E21A0]">
        <div className="absolute bottom-[-60px] left-[-10%] w-[120%] h-[150px] bg-[#3E73C8] rounded-t-[100%]" />
        <div className="absolute bottom-[-100px] left-[-10%] w-[120%] h-[180px] bg-white rounded-t-[100%]" />
      </div>

      
      <div className="relative px-10 py-8"> 
        <div className="mb-10 text-white pt-10">
          <h1 className="text-3xl font-bold">
            {personal?.fullName}
          </h1>
          <p className="text-lg opacity-90">
            {personal?.title}
          </p>
        </div>

        <div className="text-black">

          
          {about && (
            <MainSection title="About Me">
              <div dangerouslySetInnerHTML={{ __html: about }} />
            </MainSection>
          )}

          
          {experience?.some(
            (exp) =>
              exp.company ||
              exp.position ||
              exp.from ||
              exp.to
          ) && (
            <MainSection title="Work Experience">
              {experience.map((exp, index) => (
                <div key={index} className="mb-6">

                  {exp.position && (
                    <h4 className="font-semibold">
                      {exp.position}
                    </h4>
                  )}

                  {exp.company && (
                    <p className="text-sm text-gray-600">
                      {exp.company} | {exp.from} -{" "}
                      {exp.currentlyWorking
                        ? "Present"
                        : exp.to}
                    </p>
                  )}

                  {exp.description && (
                    <div
                      className="text-sm mt-2"
                      dangerouslySetInnerHTML={{
                        __html: exp.description,
                      }}
                    />
                  )}

                </div>
              ))}
            </MainSection>
          )}

        
          {education?.some(
            (edu) =>
              edu.levelofeducation ||
              edu.fieldofstudy ||
              edu.university ||
              edu.passingyear
          ) && (
            <MainSection title="Education">
              {education.map((edu, index) => (
                <div key={index} className="mb-6">

                  {edu.levelofeducation && (
                    <h4 className="font-semibold">
                      {edu.levelofeducation}
                    </h4>
                  )}

                  {(edu.fieldofstudy || edu.university) && (
                    <p className="text-sm text-gray-600">
                      {edu.fieldofstudy}
                      {edu.fieldofstudy && edu.university && " - "}
                      {edu.university}
                    </p>
                  )}

                  {edu.passingyear && (
                    <p className="text-sm">
                      Passing Year: {edu.passingyear}
                    </p>
                  )}

                </div>
              ))}
            </MainSection>
          )}

        
          {expertise && (
            <MainSection title="Areas of Expertise">
              <div
                dangerouslySetInnerHTML={{
                  __html: expertise,
                }}
              />
            </MainSection>
          )}

          {language?.some((lang) => lang.name || lang.level) && (
            <MainSection title="Language">
              {language.map((lang, index) => (
                <p key={index}>
                  {lang.name}{" "}
                  {lang.level && `- ${lang.level}`}
                </p>
              ))}
            </MainSection>
          )}

        </div>
      </div>
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
  <div className="my-3">
    <div className="flex items-center gap-3 mb-4">
      <span className="w-3 h-3 rounded-full bg-blue-900" />
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
    <div className="ml-6 text-sm text-gray-700 space-y-2">
      {children}
    </div>
  </div>
);
