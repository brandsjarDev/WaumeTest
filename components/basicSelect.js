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
      <SelectTrigger className="w-full rounded-none border-b-4 text-primary border-white border-b-primary">
        <SelectValue placeholder={getLabel(value[name])} />
      </SelectTrigger>
      <SelectContent className="text-primary">
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
