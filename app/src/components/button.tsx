import React from "react";

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: ButtonType) => {
  return (
    <button
      {...props}
      className="
       font-spectral text-lg w-full py-4 px-3 bg-[#fb1] text-[#764701] border-none 
      transition box-border hover:outline-none shadow-sm 
      disabled:opacity-5 disabled:cursor-wait"
    >
      {children}
    </button>
  );
};

export default Button;
