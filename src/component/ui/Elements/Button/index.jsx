/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate } from "react-router-dom";

const Button = ({ children, btntype, redirect, variant, opacity, hasLogo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (redirect) {
      navigate(redirect);
    }
  };

  return (
    <button
      type={btntype}
      onClick={handleClick}
      className={`w-full ${variant} hover:bg-gray-600 text-white py-2 px-4 rounded-full font-lato border border-gray-700 ${opacity} flex items-center justify-center`}
    >
      {hasLogo && hasLogo[0] && (
        <img src={hasLogo[0].img} alt={hasLogo[0].alt} className="w-5 mr-2" />
      )}
      {children}
    </button>
  );
};

export default Button;
