import React from "react";
import { cn } from "@lib/utils";

const RoundInput = ({
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
      className={cn(
        "mx-4 h-[40px] p-4 rounded-full block border-[1px] text-primary border-slate-500",
        className
      )}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default RoundInput;
