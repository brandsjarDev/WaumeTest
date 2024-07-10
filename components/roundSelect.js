import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { calcFoodWeight, countryOptions } from "@helpers/foodCalc";

function getShipCost(value, selectedCountry) {
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
    const newValue = {
      ...value,
      [name]: selectedValue,
      shippingCost: getShipCost(value, selectedValue),
    };

    setValue(calcFoodWeight(newValue));
  };

  const getLabel = (value) => {
    const found = options.find((obj) => obj.value == value);
    let selectLabel = found ? found.label : label;
    return selectLabel;
  };

  return (
    <div className="w-full px-4">
      <Select onValueChange={handleChange} className="w-full px-2">
        <SelectTrigger
          className={`w-full h-[40px] rounded-full text-gray-500 border-[1px] border-slate-500 px-5 ${className}`}
        >
          <SelectValue
            className="text-center"
            placeholder={getLabel(value[name])}
          />
        </SelectTrigger>
        <SelectContent className="text-primary z-50">
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
    </div>
  );
}

export default RoundSelect;
