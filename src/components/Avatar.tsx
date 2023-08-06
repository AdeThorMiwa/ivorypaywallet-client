import { FC } from "react";
import cn from "classnames";

interface AvatarProps {
  flexDirection?: "flex-col" | "flex-row";
}

const Avatar: FC<AvatarProps> = ({ flexDirection = "flex-col" }) => {
  return (
    <button
      className={cn(
        "flex items-center gap-x-4 w-fit max-w-[54px]",
        flexDirection
      )}
    >
      <span className="min-h-[54px] min-w-[54px] block rounded-full overflow-hidden border border-[#270685] p-[2px]">
        <img
          src="https://api.dicebear.com/6.x/thumbs/svg?seed=Bandit&flip=true&radius=50"
          alt=""
        />
      </span>
      <div className="text-xs mt-1 text-center">
        <span>Abdullahi</span>
      </div>
    </button>
  );
};

export default Avatar;
