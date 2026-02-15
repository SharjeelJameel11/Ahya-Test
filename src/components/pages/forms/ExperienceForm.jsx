// src/forms/ExperienceForm.js
import FormInput from "../../FormInput";

function ExperienceForm({ data, addItem, updateItem, removeItem, isEdit,onNext }) {
  const experienceData = data.length ? data : [{
    company: "",
    position: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
    currentlyWorking: false,
    description: "",
  }];

  return (
    <div className="space-y-6">
      {experienceData.map((exp, index) => (
        <div key={index} >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="Company Name"
              value={exp.company}
              onChange={v => updateItem(index, "company", v)}
              placeholder="e.g TechCorp Pvt Ltd"
              required
            />
            <FormInput
              label="Position / Role"
              value={exp.position}
              onChange={v => updateItem(index, "position", v)}
              placeholder="e.g Frontend Developer"
              required
            />

            <FormInput
              label="Start Month"
              value={exp.startMonth}
              onChange={v => updateItem(index, "startMonth", v)}
              placeholder="Jan"
            />
            <FormInput
              label="Start Year"
              type="number"
              value={exp.startYear}
              onChange={v => updateItem(index, "startYear", v)}
              placeholder="2022"
            />

            <FormInput
              label="End Month"
              value={exp.endMonth}
              onChange={v => updateItem(index, "endMonth", v)}
              placeholder="Dec"
              disabled={exp.currentlyWorking}
            />
            <FormInput
              label="End Year"
              type="number"
              value={exp.endYear}
              onChange={v => updateItem(index, "endYear", v)}
              placeholder="2024"
              disabled={exp.currentlyWorking}
            />

            <FormInput
              label="Description / Responsibilities"
              value={exp.description}
              onChange={v => updateItem(index, "description", v)}
              placeholder="Key achievements, projects..."
              className="md:col-span-2"
            />
          </div>

          <label className="flex items-center space-x-2 mt-2">
            <input
              type="checkbox"
              checked={exp.currentlyWorking}
              onChange={e => updateItem(index, "currentlyWorking", e.target.checked)}
            />
            <span>I currently work here</span>
          </label>

          {isEdit && (
            <div className="flex items-center gap-2 mt-2">
              <div>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 3.33333L16.6667 3.33333V5H15L15 15.8333C15 16.0543 14.9122 16.2663 14.7559 16.4226C14.5996 16.5789 14.3877 16.6667 14.1667 16.6667H2.5C2.27899 16.6667 2.06702 16.5789 1.91074 16.4226C1.75446 16.2663 1.66667 16.0543 1.66667 15.8333L1.66667 5H0L0 3.33333L4.16667 3.33333V0.833333C4.16667 0.61232 4.25446 0.400358 4.41074 0.244078C4.56703 0.0877973 4.77899 0 5 0L11.6667 0C11.8877 0 12.0996 0.0877973 12.2559 0.244078C12.4122 0.400358 12.5 0.61232 12.5 0.833333V3.33333ZM13.3333 5L3.33333 5L3.33333 15L13.3333 15L13.3333 5ZM5.83333 7.5H7.5L7.5 12.5L5.83333 12.5L5.83333 7.5ZM9.16667 7.5H10.8333V12.5H9.16667V7.5ZM5.83333 1.66667V3.33333L10.8333 3.33333V1.66667L5.83333 1.66667Z" fill="#E6483D"/>
                </svg>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => removeItem(index)}
                  className="text-red-500 text-[1.4rem]"
                >
                  delete
                </button>
              </div>
            </div>
          )}

        </div>
      ))}

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => addItem({
            company: "",
            position: "",
            startMonth: "",
            startYear: "",
            endMonth: "",
            endYear: "",
            currentlyWorking: false,
            description: "",
          })}
          className="text-[1.4rem] text-[#00318B]"
        >
          + Add Another
        </button>
      </div>
      <div className="flex justify-end">
     <button onClick={onNext} className="bg-blue-800 text-[1.4rem] text-white rounded-2xl py-2 px-8">
     Next
     </button>
     </div>
    </div>
  );
}

export default ExperienceForm;
