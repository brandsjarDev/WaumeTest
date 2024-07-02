import React from "react";
import { cn } from "@lib/utils";

const ThemeInput = ({
  name,
  value,
  setValue,
  placeholder,
  className,
  maxValue,
  onChange = () => {},
  type = "text",
  ...rest
}) => {
  const handleInputChange = (e) => {
    let newValue = e.target.value;

    if (type === "number") {
      newValue = Number(newValue); // Ensure the value is a number
    }

    setValue({ ...value, [name]: newValue });
    onChange(e);
  };

  return (
    <input
      name={name}
      value={value[name]}
      onChange={handleInputChange}
      type={type}
      className={cn(
        "mx-4 mt-4 h-[40px] p-2 pb-4 block border-b-4 text-center text-primary border-white border-b-primary",
        className
      )}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default ThemeInput;
