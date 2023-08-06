import { FC } from "react";
import cn from "classnames";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: FC<InputProps> = ({
  label,
  error,
  type,
  name,
  id,
  placeholder,
  className,
  ...props
}) => {
  return (
    <div className={className}>
      <label htmlFor={id}>
        {label ? <span className="font-medium ml-0.5">{label}</span> : null}
        <input
          type={type}
          id={id}
          name={name}
          className={cn(
            "h-12 w-full mt-1 border-2 border-neutral-700/20 rounded-md outline-none px-4 transition-all duration-300 focus:border-[#5732BF]"
          )}
          placeholder={placeholder}
          {...props}
        />
        {error && (
          <span className="text-red-600 text-[14px] mt-1">{error}</span>
        )}
      </label>
    </div>
  );
};

export default Input;
