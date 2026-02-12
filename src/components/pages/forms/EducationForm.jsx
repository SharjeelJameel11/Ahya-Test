// src/forms/EducationForm.js
import FormInput from "../../FormInput";

function EducationForm({ data, addItem, removeItem, updateItem }) {
  return (
    <div>
      {data.map((edu, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #d1d5db",
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "24px",
            backgroundColor: "#f9fafb",
          }}
        >
          <h4 style={{ marginTop: 0, marginBottom: "16px", color: "#374151" }}>
            Education Entry {index + 1}
          </h4>

          <FormInput
            label="Institution / University"
            value={edu.institution}
            onChange={(val) => updateItem(index, "institution", val)}
            placeholder="e.g. NED University of Engineering & Technology"
            required
          />

          <FormInput
            label="Degree / Program"
            value={edu.degree}
            onChange={(val) => updateItem(index, "degree", val)}
            placeholder="e.g. BS Computer Science"
            required
          />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <FormInput
              label="Start Year"
              type="number"
              value={edu.startYear}
              onChange={(val) => updateItem(index, "startYear", val)}
              placeholder="e.g. 2020"
              required
            />

            <FormInput
              label="End Year / Expected"
              type="number"
              value={edu.endYear}
              onChange={(val) => updateItem(index, "endYear", val)}
              placeholder="e.g. 2024"
              required
            />
          </div>

          <FormInput
            label="CGPA / Percentage (optional)"
            value={edu.cgpa}
            onChange={(val) => updateItem(index, "cgpa", val)}
            placeholder="e.g. 3.7 / 4.0 or 82%"
          />

          <FormInput
            label="Description / Achievements (optional)"
            value={edu.description}
            onChange={(val) => updateItem(index, "description", val)}
            placeholder="e.g. Dean's Honor List, Final Year Project on AI & ML..."
          />

          <button
            type="button"
            onClick={() => removeItem(index)}
            style={{
              marginTop: "16px",
              backgroundColor: "#ef4444",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "15px",
            }}
          >
            Remove this Education
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() => addItem({
          institution: "",
          degree: "",
          startYear: "",
          endYear: "",
          cgpa: "",
          description: "",
        })}
        style={{
          backgroundColor: "#10b981",
          color: "white",
          padding: "12px 28px",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer",
          marginTop: "16px",
        }}
      >
        + Add Another Education
      </button>
    </div>
  );
}

export default EducationForm;