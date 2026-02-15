
import TextInput from "../../TextInput";
function AboutForm({ data, updateField, onNext }) {
  return (
    <TextInput
      placeholder="Write Description"
      value={data}
      onChange={(html) => updateField(html)} 
      onNext={onNext}
    />
  );
}

export default AboutForm;