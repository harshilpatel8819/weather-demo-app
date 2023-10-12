import { FC, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

// TextField component renders an input field for text input.
const TextField: FC<TextFieldProps> = ({ className, ...rest }) => {
  return (
    <input
      // Placeholder text for the input field.
      placeholder="Search city"
      // Merge Tailwind CSS classes for styling the input field.
      className={twMerge("p-2 rounded-md outline-none px-3", className)}
      {...rest}
    />
  );
};

export default TextField;
