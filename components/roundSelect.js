import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const countryOptions = [
  { label: "Austria", value: "Austria", upperCost: 9.8, lowerCost: 9.8 },
  { label: "Germany", value: "Germany", upperCost: 15, lowerCost: 12.5 },
  { label: "Switzerland", value: "Switzerland", upperCost: 25, lowerCost: 20 },
];
function getCost(value, selectedCountry) {
  let country = countryOptions.find((item) => item.value == selectedCountry);
  country = country ? country : { upperCost: 15, lowerCost: 12.5 };
  if (value.prodCost > 100) return country.lowerCost;
  else return country.upperCost;
}
function RoundSelect({
  name,
  value,
  setValue,
  label = "label",
  className,
  options = countryOptions,
  ...props
}) {
  const handleChange = (selectedValue) => {
    console.log("selectedValue", selectedValue);
    setValue({
      ...value,
      [name]: selectedValue,
      shippingCost: getCost(value, selectedValue),
    });
  };

  const getLabel = (value) => {
    const found = options.find((obj) => obj.value == value);
    let selectLabel = found ? found.label : label;
    return selectLabel;
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger
        className={`mx-4  h-[40px] p-4 rounded-full block border-[1px]  text-primary border-slate-500`}
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
            onSelect={() => {}}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default RoundSelect;
