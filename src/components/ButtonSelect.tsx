import { FC } from "react";
import { RightCaretIcon } from "./icons/right-caret";
import cn from "classnames";

interface ButtonSelectProps {
  label?: string;
  placeholder?: string;
  className?: string;
  onSelect: VoidFunction;
  id?: string;
  name?: string;
  error?: string;
  value?: string;
}

const ButtonSelect: FC<ButtonSelectProps> = ({
  label,
  placeholder,
  className,
  onSelect,
  error,
  name,
  id,
  value,
}) => {
  return (
    <>
      <button
        type="button"
        className={cn("flex flex-col items-start w-full", className)}
        onClick={onSelect}
        name={name}
      >
        <span className="font-medium ml-0.5 text-left">{label}</span>
        <span
          className={cn(
            "text-left h-12 w-full mt-1 flex justify-between items-center border-2 border-neutral-700/20 rounded-md outline-none px-4 transition-all duration-300 active:border-[#5732BF]",
            {
              "text-neutral-700/20": !value,
            }
          )}
        >
          {value || placeholder}
          <span className="rotate-90">
            <RightCaretIcon />
          </span>
        </span>
        {error && (
          <span className="text-red-600 text-[14px] mt-1">{error}</span>
        )}
      </button>
      <input type="hidden" name={name} id={id} value={value} />
    </>
  );
};

export default ButtonSelect;
