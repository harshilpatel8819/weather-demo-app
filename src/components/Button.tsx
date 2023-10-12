import { ButtonHTMLAttributes, FC } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

// Button component renders a styled button element.
const Button: FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button
      // Merge Tailwind CSS classes for styling the button.
      className={twMerge(
        "bg-gray-900 text-white py-2 ml-3 rounded-md px-3",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
