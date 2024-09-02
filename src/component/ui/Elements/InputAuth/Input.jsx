/* eslint-disable react/prop-types */
import { useState } from 'react';

const Input = ({ placeholder, type, name, required }) => {
  const [inputType, setInputType] = useState(type);

  const togglePasswordVisibility = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  return (
    <div className="relative w-full">
      <input
        type={inputType}
        className="w-full px-4 py-2 mt-1 bg-gray-700 bg-opacity-10 outline-none rounded-full border border-gray-700 hover:ring-1 hover:ring-gray-500 focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
        name={name}
        required={required}
      />
      {type === 'password' && (
        <span
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
        >
          <i className={`fas ${inputType === 'password' ? 'fa-eye-slash' : 'fa-eye'} text-gray-500`}></i>
        </span>
      )}
    </div>
  );
};

export default Input;
