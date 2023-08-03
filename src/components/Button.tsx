import { FC } from "react";
import cn from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  loading?: boolean;
}

const Button: FC<ButtonProps> = ({ text, disabled, loading, ...props }) => {
  return (
    <button
      disabled={disabled}
      className={cn(
        "w-full h-12 rounded-md bg-[#5733bc] text-white text-lg font-medium flex items-center justify-center",
        {
          "bg-opacity-90 bg-[#5028bc]": loading,
          "bg-opacity-50": disabled,
        }
      )}
      {...props}
    >
      {loading ? (
        <span className="w-[18px] h-[18px] inline-block animate-spin rounded-full border-2 border-t-[#5732BF]" />
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
