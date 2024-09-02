/* eslint-disable react/prop-types */

const Input = ({ inputType, defaultValue }) => {
  return (
    <input
      type={inputType === "password" ? "password" : "text"}
      defaultValue={defaultValue}
      className={`pl-2 pt-5 absolute inset-0 bg-transparent focus:outline-none w-full h-full ${
        inputType === "nama" ? "text-white" : "text-[#9D9EA1]"
      }`}
    />
  );
};

export default Input;

