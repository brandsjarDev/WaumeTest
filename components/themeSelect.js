import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function BasicSelect({
  name,
  value,
  setValue,
  label = "label",
  className,
  options = [{ label: "", value: "" }],
  ...props
}) {
  const handleChange = (selectedValue) => {
    console.log("selectedValue", selectedValue);
    setValue({ ...value, [name]: selectedValue });
  };

  const getLabel = (value) => {
    const found = options.find((obj) => obj.value == value);
    let selectLabel = found ? found.label : label;
    return selectLabel;
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger
        className={`text-[34px] rounded-none border-b-4 ${
          value[name] ? "text-primary" : "text-slate-400"
        } text-center border-white border-b-primary mx-4 mt-6 h-[40px] p-2 pb-4 ${className}`}
      >
        <SelectValue
          className="text-center"
          placeholder={getLabel(value[name])}
        />
      </SelectTrigger>
      <SelectContent className="text-primary max-h-[200px]">
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            onSelect={() => handleChange(option.value)}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default BasicSelect;
