/* eslint-disable react/prop-types */
import Label from './Label';
import Input from './Input';
import EditIcon from '@mui/icons-material/Edit';

const InputField = ({ type, placeholder, label }) => {
  return (
    <div className="relative flex flex-col justify-start items-start w-full h-[64px] bg-[#22282A] border border-gray-600 rounded gap-2 px-4 py-2">
      <Label htmlFor={type} text={label} />
      <Input type={type} placeholder={placeholder} />
      {type !== "email" && <EditIcon className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-400 cursor-pointer" />}
    </div>
  );
};

export default InputField;
