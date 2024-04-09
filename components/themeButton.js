import React from "react";
import { Button } from "./ui/button";

const ThemeButton = ({ children, onClick, className, disabled = false }) => {
  return (
    <Button
      className={`bg-primary hover:bg-primaryDark text-white  font-bold py-2 px-4 rounded-[14px] ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default ThemeButton;
