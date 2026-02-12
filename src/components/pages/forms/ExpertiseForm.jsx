// src/forms/ExpertiseForm.js
import FormInput from "../../FormInput";

function ExpertiseForm({ data, updateItem, removeItem }) {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
          <FormInput
            label={index === 0 ? "Skill / Area of Expertise" : ""}
            value={item.skill}
            onChange={(v) => updateItem(index, "skill", v)}
            placeholder="e.g React.js, UI/UX Design, Node.js, Leadership"
          />
          <button
            onClick={() => removeItem(index)}
            style={{ marginLeft: "12px", background: "#ef4444", color: "white", padding: "8px 12px", border: "none", borderRadius: "6px" }}
          >
            ×
          </button>
        </div>
      ))}

      <button
        style={{ background: "#10b981", color: "white", padding: "10px 20px", border: "none", borderRadius: "6px" }}
      >
        + Add Skill
      </button>
    </div>
  );
}

export default ExpertiseForm;