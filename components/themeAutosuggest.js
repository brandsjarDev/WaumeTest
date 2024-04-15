"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const options = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export default function ThemeAutoSuggest({
  value,
  name,
  setValue,
  className,
  options,
  label,
}) {
  const [open, setOpen] = React.useState(false);
  console.log(
    "options",
    options.find((option) => option.value == value[name])?.label
  );
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        asChild
        className={`text-xl md:text-[34px] rounded-none border-b-4 ${
          value[name] ? "text-primary" : "text-slate-400"
        } text-center border-white border-b-primary mx-4 mt-6 h-[40px] p-2 pb-4 ${className}`}
      >
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={className}
        >
          {value[name]
            ? options.find((option) => option.value === value[name])?.label
            : label}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-h-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search breed" />
          <CommandEmpty>No options found.</CommandEmpty>
          <CommandList>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={() => {
                    setValue({
                      ...value,
                      [name]: option.value,
                    });
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value[name] === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>{" "}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
