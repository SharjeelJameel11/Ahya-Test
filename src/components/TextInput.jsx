// src/components/RichEditor.jsx (naya file bana le)
import React from 'react';
import { Editor } from 'primereact/editor';

function TextInput({
  value,
  onChange,
  placeholder = "Write Description...",
  height = '320px',
  onNext,
}) {
  return (
    <div className="w-full max-w-3xl mx-auto">

      {/* PrimeReact Editor */}
      <div className="border border-gray-300 rounded-md overflow-hidden">
        <Editor
          value={value || ''}
          onTextChange={(e) => onChange(e.htmlValue || '')}
          style={{ height: height }}
          placeholder={placeholder}
        />
      </div>

      {/* Next Button */}
      <div className="flex justify-end">
     <button onClick={onNext} className="bg-blue-800 text-[1.4rem] text-white rounded-2xl py-2 px-8">
     Next
     </button>
     </div>
    </div>
  );
}

export default TextInput;