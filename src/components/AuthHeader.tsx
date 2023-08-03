import { FC } from "react";

interface AuthHeaderProps {
  text: string;
}

const AuthHeader: FC<AuthHeaderProps> = ({ text }) => {
  return <h1 className="font-semibold text-3xl max-w-xs">{text}</h1>;
};

export default AuthHeader;
