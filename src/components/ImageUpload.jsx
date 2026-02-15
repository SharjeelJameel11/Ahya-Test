import { useState, useRef, useEffect } from "react";

function ImageUpload({ value, onChange }) {
  const [preview, setPreview] = useState(value);
  const fileInputRef = useRef(null);

  useEffect(() => {
    setPreview(value);
  }, [value]);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 800 * 1024) {
      alert("File is larger than 800kb");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const picture = reader.result;
      setPreview(picture);
      onChange(picture);
    };
    reader.readAsDataURL(file);
  };

  const reset = () => {
    setPreview(null);
    onChange(null);
  };

  return (
    <div className="text-center mb-8 flex items-center gap-4">
      <div className="w-[82px] h-[82px] rounded-full overflow-hidden bg-gray-200 border-2 border-gray-400">
        {preview ? (
          <img src={preview} alt="Profile" className="w-full h-full object-cover" />
        ) : null}
      </div>

      <div>
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          onChange={handleFile}
          style={{ display: "none" }}
        />

        <button
          type="button"
          onClick={() => fileInputRef.current.click()}
          className="bg-[#00318B] text-[1.4rem] text-white px-6 py-2 rounded-2xl mr-2"
        >
          Upload your photo
        </button>

        <button
          type="button"
          onClick={reset}
          className="bg-[#0A0F290A] text-[1.4rem] text-black px-6 py-2 rounded-2xl"
        >
          Reset
        </button>

        <p className="mt-2 text-sm text-gray-500">
          Allowed JPG, GIF, PNG. Max size 800KB
        </p>
      </div>
    </div>
  );
}

export default ImageUpload;
