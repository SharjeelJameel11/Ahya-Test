function FormInput({className, label, value, onChange, placeholder = "", type = "text", required = false }) {
  return (
    <div className={` ${className}`}>
      <label className="text-[1.6rem]  font-medium ">
        {label}
        {required && <span style={{ color: "red", marginLeft: "4px" }}>*</span>}
      </label>
      <input
  type={type}
  value={value || ""}
  onChange={(e) => onChange(e.target.value)}
  placeholder={placeholder}
  required={required}
  className="border border-[#DEE0E3] my-4 rounded-2xl w-full px-4 py-2 text-[1.4rem] focus:border-sky-500 outline-none"
/>

    </div>
  );
}

export default FormInput;