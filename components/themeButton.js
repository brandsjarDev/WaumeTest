import React from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
const ThemeButton = ({
  children,
  onClick,
  className,
  disabled = false,
  size = "default",
  loading = false,
  ...props
}) => {
  return (
    <Button
      className={`flex justify-center bg-primary hover:bg-primaryDark text-white  rounded-[14px]  ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
      size={size}
      {...props}
    >
      {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : children}
    </Button>
  );
};

export default ThemeButton;
