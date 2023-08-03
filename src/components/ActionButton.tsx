import { FC, ReactNode } from "react";

interface ActionButtonProps {
  text: string;
  icon: ReactNode;
}

const ActionButton: FC<ActionButtonProps> = ({ text, icon }) => (
  <div className="mx-4 flex flex-col items-center">
    <span className="mb-2">{icon}</span>
    <h4>{text}</h4>
  </div>
);

export default ActionButton;
