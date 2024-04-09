import React from "react";

const ThemeInput = ({
  name,
  value,
  setValue,
  placeholder,
  className,
  ...rest
}) => {
  const handleInputChange = (e) => {
    setValue({ ...value, [name]: e.target.value });
  };

  return (
    <input
      name={name}
      value={value[name]}
      onChange={handleInputChange}
      className={`mx-4 mt-6 h-[40px] p-2 pb-4 block border-b-4 text-center  text-primary border-white border-b-primary ${className}`}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default ThemeInput;
