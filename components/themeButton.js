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
  secondary = false,
  ...props
}) => {
  return (
    <Button
      className={
        secondary
          ? `flex justify-center bg-white border-2 border-primary hover:bg-primary text-primary hover:text-white  rounded-[14px]  ${className}`
          : `flex justify-center bg-primary hover:border-2 hover:border-primary hover:bg-white text-white hover:text-primary  rounded-[14px]  ${className}`
      }
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
