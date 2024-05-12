import React from "react";
import { cn } from "@lib/utils";

const ThemeInput = ({
  name,
  value,
  setValue,
  placeholder,
  className,
  maxValue,
  type = "text",
  ...rest
}) => {
  const handleInputChange = (e) => {
    let newValue = e.target.value;
    if (type == "number" && newValue <= 0) return;
    if (type === "number") {
      if (maxValue && newValue > maxValue) {
        newValue = maxValue.toString();
      }
      if (newValue <= 0) return;
    }
    setValue({ ...value, [name]: newValue });
  };

  return (
    <input
      name={name}
      value={value[name]}
      onChange={handleInputChange}
      type={type}
      className={cn(
        "mx-4 mt-4 h-[40px] p-2 pb-4 block border-b-4 text-center  text-primary border-white border-b-primary",
        className
      )}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default ThemeInput;
