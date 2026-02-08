import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'outline-white';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-base font-medium transition-all duration-300 focus:outline-none tracking-wide";
  
  const variants = {
    primary: "bg-wood-900 text-white hover:bg-wood-800 shadow-lg hover:shadow-xl hover:-translate-y-1",
    secondary: "bg-wood-300 text-white hover:bg-wood-400 shadow-md hover:shadow-lg",
    outline: "border-2 border-wood-900 text-wood-900 bg-transparent hover:bg-wood-900 hover:text-white",
    white: "bg-white text-wood-900 hover:bg-wood-50 shadow-lg hover:shadow-xl hover:-translate-y-1",
    "outline-white": "border-2 border-white text-white bg-transparent hover:bg-white hover:text-wood-900"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;