function FormInput({ label, value, onChange, placeholder = "", type = "text", required = false }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", fontSize: "16px" }}>
        {label}
        {required && <span style={{ color: "red", marginLeft: "4px" }}>*</span>}
      </label>
      <input
        type={type}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        style={{
          width: "100%",
          padding: "12px",
          border: "1px solid #d1d5db",
          borderRadius: "8px",
          fontSize: "16px",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}

export default FormInput;