// src/components/InitialData.js  (ya jo bhi naam hai tumhara file)
export const initialResumeData = {
  personal: {
    photo: null,          // base64 string
    fullName: "",
    title: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    indeed: "",
    behance: "",
    website: "",
  },
  about: "",              // rich text HTML string (About me)
  education: [
    {
      institution: "",
      degree: "",
      startYear: "",
      endYear: "",
      cgpa: "",
      description: "",
    }
  ],
  language: [
    {
      name: "",
      level: "",
    }
  ],
  experience: [
    {
      company: "",
      position: "",
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
      currentlyWorking: false,
      description: "",
    }
  ],
  expertise: "",          // rich text HTML string (Areas of expertise)
  references: [
    {
      name: "",
      position: "",
      company: "",
      phone: "",
      email: "",
      relation: "",
    }
  ],
};