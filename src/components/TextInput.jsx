import React from 'react';
import { Editor } from 'primereact/editor';
function TextInput({
  value,
  onChange,
  placeholder,
  height = '320px',
  onNext,
}) {

  const header = (
    <span className="ql-formats">
      <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-underline" />
      <button className="ql-list" value="ordered" />
      <button className="ql-list" value="bullet" />
    </span>
  );

  return (
    <div className="w-full max-w-3xl mx-auto">
       <div className="text-[1.6rem] text-[#4B465C] bg-opacity-[4%] border-[1px] bg-[#DBDADE] rounded-t-md px-2 py-4 border-[#4B465C0A] font-medium ">
        Write a Description
      </div>

      <div className="border border-[#4B465C0A] rounded-md bg-[#F9F9F9] overflow-hidden">
        <Editor
          value={value || ''}
          onTextChange={(e) => onChange(e.htmlValue || '')}
          style={{ height: height }}
          placeholder={placeholder}
          headerTemplate={header}
        />
      </div>

      <div className="flex justify-end mt-4">
        <button 
          onClick={onNext} 
          className="bg-blue-800 text-[1.4rem] text-white rounded-2xl py-2 px-8"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default TextInput;
