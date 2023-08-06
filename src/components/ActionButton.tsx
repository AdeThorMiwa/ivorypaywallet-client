import { FC, ReactNode } from "react";

interface ActionButtonProps {
  text: string;
  icon: ReactNode;
  onClick: VoidFunction;
}

const ActionButton: FC<ActionButtonProps> = ({ text, icon, onClick }) => (
  <button className="mx-4 flex flex-col items-center" onClick={onClick}>
    <span className="mb-2">{icon}</span>
    <h4>{text}</h4>
  </button>
);

export default ActionButton;
