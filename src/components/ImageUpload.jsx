// src/components/PhotoUpload.js
import { useState } from "react";

function ImageUpload({ value, onChange }) {
  const [preview, setPreview] = useState(value);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 800 * 1024) {
      alert("File 800KB se bara hai");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result;
      setPreview(base64);
      onChange(base64);
    };
    reader.readAsDataURL(file);
  };

  const reset = () => {
    setPreview(null);
    onChange(null);
  };

  return (
    <div style={{ textAlign: "center", marginBottom: "30px" }}>
      <div
        style={{
          width: "140px",
          height: "140px",
          margin: "0 auto 12px",
          borderRadius: "50%",
          overflow: "hidden",
          background: "#f3f4f6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px dashed #9ca3af",
        }}
      >
        {preview ? (
          <img src={preview} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <span style={{ fontSize: "60px", color: "#9ca3af" }}>👤</span>
        )}
      </div>

      <label>
        <input type="file" accept="image/*" onChange={handleFile} style={{ display: "none" }} />
        <button
          type="button"
          style={{
            background: "#2563eb",
            color: "white",
            padding: "10px 24px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Upload your photo
        </button>
      </label>

      <button
        onClick={reset}
        style={{
          marginLeft: "12px",
          background: "#ef4444",
          color: "white",
          padding: "10px 24px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Reset
      </button>

      <p style={{ marginTop: "8px", fontSize: "14px", color: "#6b7280" }}>
        Allowed JPG, GIF, PNG. Max size 800KB
      </p>
    </div>
  );
}

export default ImageUpload;