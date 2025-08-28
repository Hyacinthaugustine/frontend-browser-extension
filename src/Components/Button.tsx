import type React from "react";

interface ButtonProp {
  ButtonText: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isActive?: boolean;
  length?: number;
}

const Button = ({
  ButtonText,
  onClick,
  isActive = false,
  length,
}: ButtonProp) => {
  const baseClasses =
    "px-6 py-2 font-medium cursor-pointer border-2 outline-2 outline-transparent transition-all duration-300 hover:outline-red-400 border-transparent rounded-full capitalize focus:outline-2 focus:outline-red-400 focus:outline-offset-2";

  const activeClasses = "bg-red-400 text-neutral-700";
  const inactiveClasses =
    "bg-neutral-700 text-neutral-0 dark:bg-neutral-50 dark:text-neutral-700";

  return (
    <button
      type="button"
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      onClick={onClick}
    >
      {ButtonText} {length}
    </button>
  );
};

export default Button;
