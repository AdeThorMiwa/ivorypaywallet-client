import { FC } from "react";
import { AddIcon } from "./icons/add";
import cn from "classnames";

interface AddButtonProps {
  text: string;
  flexDirection?: "flex-col" | "flex-row";
  size?: "w-fit" | "w-full";
}

const AddButton: FC<AddButtonProps> = ({
  text,
  flexDirection = "flex-col",
  size = "w-fit",
}) => (
  <button
    className={cn("flex items-center  mr-5", flexDirection, size, {
      "max-w-[54px]": size === "w-fit",
    })}
  >
    <span className="min-w-[54px] min-h-[54px] bg-[#E6DDFF] flex justify-center items-center rounded-full">
      <AddIcon />
    </span>
    <span
      className={cn("text-xs mt-1.5 text-center", {
        "ml-2": flexDirection === "flex-row",
      })}
    >
      {text}
    </span>
  </button>
);

export default AddButton;
