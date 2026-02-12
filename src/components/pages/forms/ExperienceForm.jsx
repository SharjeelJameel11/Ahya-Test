// src/forms/ExperienceForm.js
import FormInput from "../../FormInput";

function ExperienceForm({ data, updateItem, removeItem }) {
  return (
    <div>
      {data.map((exp, index) => (
        <div key={index} style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px", marginBottom: "20px" }}>
          <FormInput label="Company Name" value={exp.company} onChange={v => updateItem(index, "company", v)} placeholder="e.g TechCorp Pvt Ltd" />
          <FormInput label="Position / Role" value={exp.position} onChange={v => updateItem(index, "position", v)} placeholder="e.g Frontend Developer" />
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <FormInput label="Start Month" value={exp.startMonth} onChange={v => updateItem(index, "startMonth", v)} placeholder="Jan" />
            <FormInput label="Start Year" type="number" value={exp.startYear} onChange={v => updateItem(index, "startYear", v)} placeholder="2022" />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <FormInput label="End Month" value={exp.endMonth} onChange={v => updateItem(index, "endMonth", v)} placeholder="Dec" disabled={exp.currentlyWorking} />
            <FormInput label="End Year" type="number" value={exp.endYear} onChange={v => updateItem(index, "endYear", v)} placeholder="2024" disabled={exp.currentlyWorking} />
          </div>

          <label style={{ display: "flex", alignItems: "center", margin: "12px 0" }}>
            <input
              type="checkbox"
              checked={exp.currentlyWorking}
              onChange={e => updateItem(index, "currentlyWorking", e.target.checked)}
            />
            <span style={{ marginLeft: "8px" }}>I currently work here</span>
          </label>

          <FormInput label="Description / Responsibilities" value={exp.description} onChange={v => updateItem(index, "description", v)} placeholder="Key achievements, projects..." />

          <button onClick={() => removeItem(index)} style={{ background: "#ef4444", color: "white", padding: "8px 16px", border: "none", borderRadius: "6px", marginTop: "12px" }}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default ExperienceForm;