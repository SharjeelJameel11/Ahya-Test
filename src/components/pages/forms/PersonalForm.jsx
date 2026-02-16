import FormInput from "../../FormInput";
import ImageUpload from "../../ImageUpload";

const personalFields = [
  { key: "fullName", label: "Full name", placeholder: "e.g John Doe", required: true },
  { key: "title", label: "Title", placeholder: "e.g Frontend Developer", required: true },
  { key: "email", label: "Email address", type: "email", placeholder: "example@email.com", required: true },
  { key: "phone", label: "Phone number", placeholder: "e.g 0300 1234567", required: true },
  { key: "address", label: "Address", placeholder: "House #12, Street 45, Karachi", required: true },
  { key: "linkedin", label: "LinkedIn URL (optional)", placeholder: "https://linkedin.com/in/..." },
  { key: "indeed", label: "Indeed URL (optional)", placeholder: "https://indeed.com/..." },
  { key: "behance", label: "Behance URL (optional)", placeholder: "https://behance.net/..." },
  { key: "website", label: "Website URL (optional)", placeholder: "https://yourwebsite.com" },
];

function PersonalForm({ data, updateField, onNext }) {

  // Check if all required fields are filled
  const isNextDisabled = personalFields.some(field => field.required && !data[field.key]);

  return (
    <>
      <ImageUpload value={data.photo} onChange={(val) => updateField("photo", val)} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {personalFields.map((field) => (
          <FormInput
            key={field.key}
            label={field.label}
            value={data[field.key]}
            onChange={(val) => updateField(field.key, val)}
            placeholder={field.placeholder}
            type={field.type || "text"}
            required={field.required}
            className={field.key === "address" ? "md:col-span-2" : ""}
          />
        ))}
      </div>

      <div className="flex justify-end">
        <button
          onClick={onNext}
          disabled={isNextDisabled}
          className={`text-[1.4rem] rounded-2xl py-2 px-8 ${
            isNextDisabled
              ? "bg-[#E9EAEC] text-[#0A0F2940]"
              : "bg-blue-800 text-white"
          }`}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default PersonalForm;
