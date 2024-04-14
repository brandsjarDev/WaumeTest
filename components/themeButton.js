import React from "react";
import { Button } from "./ui/button";

const ThemeButton = ({
  children,
  onClick,
  className,
  disabled = false,
  size = "default",
  ...props
}) => {
  return (
    <Button
      className={`block bg-primary hover:bg-primaryDark text-white font-bold rounded-[14px]  ${className}`}
      onClick={onClick}
      disabled={disabled}
      size={size}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ThemeButton;
