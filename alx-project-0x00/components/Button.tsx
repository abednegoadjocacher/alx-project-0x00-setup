import { PillProps } from "@/interfaces";
import React from "react";

const Button: React.FC<PillProps> = ({ title }) => {
  return (
    <button className=" bg-green-500 text-white hover:opacity-90 transition-opacity duration-300
    px-3 py-1 text-sm rounded-sm
    sm:px-3 sm:py-1 sm:text-sm sm:rounded-sm
    md:px-6 md:py-3 md:text-base md:rounded-md
    lg:px-8 lg:py-4 lg:text-lg lg:rounded-full rounded-full">
        {title}
    </button>
    )
}

export default Button;