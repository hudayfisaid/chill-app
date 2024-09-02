
/* eslint-disable react/prop-types */

const Label = ({ htmlFor, text }) => {
  return (
    <label htmlFor={htmlFor} className="font-medium font-lato">
      {text}
    </label>
  );
};

export default Label;
