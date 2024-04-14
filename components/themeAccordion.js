import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const ThemeAccordion = ({ title, content, className }) => {
  return (
    <Accordion type="single" collapsible className={`flex w-full ${className}`}>
      <AccordionItem value="item-1" className="w-full">
        <AccordionTrigger className="flex w-full">{title}</AccordionTrigger>
        <AccordionContent className="pb-5">{content}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
export default ThemeAccordion;
