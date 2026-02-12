// src/forms/ReferencesForm.js
import FormInput from "../../FormInput";;

function ReferencesForm({ data, updateItem, removeItem }) {
  return (
    <div>
      {data.map((ref, index) => (
        <div key={index} style={{ border: "1px solid #e5e7eb", padding: "20px", borderRadius: "8px", marginBottom: "20px" }}>
          <FormInput label="Reference Name" value={ref.name} onChange={v => updateItem(index, "name", v)} placeholder="e.g Ahmed Khan" />
          <FormInput label="Position / Title" value={ref.position} onChange={v => updateItem(index, "position", v)} placeholder="e.g Senior Manager" />
          <FormInput label="Company" value={ref.company} onChange={v => updateItem(index, "company", v)} placeholder="e.g XYZ Solutions" />
          <FormInput label="Phone" value={ref.phone} onChange={v => updateItem(index, "phone", v)} placeholder="+92 321 1234567" />
          <FormInput label="Email" type="email" value={ref.email} onChange={v => updateItem(index, "email", v)} placeholder="ahmed@company.com" />
          <FormInput label="Relation" value={ref.relation} onChange={v => updateItem(index, "relation", v)} placeholder="e.g Former Manager, Colleague" />

          <button onClick={() => removeItem(index)} style={{ background: "#ef4444", color: "white", padding: "8px 16px", border: "none", borderRadius: "6px", marginTop: "12px" }}>
            Remove Reference
          </button>
        </div>
      ))}
    </div>
  );
}

export default ReferencesForm;