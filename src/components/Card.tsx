import React, { FC } from "react";

interface CardProps {
  children: React.ReactNode;
}

// Card component renders a styled container for displaying content.
const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-gray-900 text-white relative  break-words rounded-lg overflow-hidden shadow-sm mb-4 w-full  dark:bg-gray-600 min-w-[550px] min-h-[300px] flex flex-col justify-center">
      {children}
    </div>
  );
};

export default Card;
