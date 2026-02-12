// src/data/initialData.js  ← yeh version use kar sakte ho
export const initialResumeData = {
    personal: {
      photo: null,
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
    about: {
      summary: "",
    },
    education: [
      {
        institution: "",
        degree: "",
        startYear: "",
        endYear: "",
        cgpa: "",
        description: "",
      }
    ],   // ← ab shuru se ek empty block mojood hai
  
    language: [
      { name: "", level: "" }
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
  
    expertise: {
        summary : ""
    },
  
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