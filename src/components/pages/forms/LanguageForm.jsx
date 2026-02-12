// src/forms/LanguageForm.js
import FormInput from "../../FormInput";

function LanguageForm({ data, updateItem, removeItem }) {
  return (
    <div>
      {data.map((lang, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "16px",
            background: "#f9fafb",
          }}
        >
          <FormInput
            label="Language"
            value={lang.name}
            onChange={(v) => updateItem(index, "name", v)}
            placeholder="e.g English, Urdu, Arabic"
          />

          <FormInput
            label="Proficiency Level"
            value={lang.level}
            onChange={(v) => updateItem(index, "level", v)}
            placeholder="e.g Native, Fluent, Intermediate, Basic"
          />

          <button
            onClick={() => removeItem(index)}
            style={{ background: "#ef4444", color: "white", padding: "8px 16px", border: "none", borderRadius: "6px", marginTop: "12px" }}
          >
            Remove
          </button>
        </div>
      ))}

      <button
        onClick={() => {
          // App.js mein add function call hoga → empty object push
        }}
        style={{ background: "#10b981", color: "white", padding: "10px 20px", border: "none", borderRadius: "6px" }}
      >
        + Add Language
      </button>
    </div>
  );
}

export default LanguageForm;