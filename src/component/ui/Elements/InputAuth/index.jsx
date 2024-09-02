/* eslint-disable react/prop-types */
import Input from "./Input";
import Label from "./Label";

const FormField = ({ htmlFor, placeholder, label, type, isRequired }) => {
  return (
    <div className="mb-4">
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input placeholder={placeholder} required={isRequired} type={type} />
    </div>
  );
};

export default FormField;

