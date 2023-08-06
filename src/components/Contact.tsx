import { FC } from "react";
import Avatar from "./Avatar";
import { RightCaretIcon } from "./icons/right-caret";
import cn from "classnames";

interface ContactProps {
  last?: boolean;
  onClick: VoidFunction;
}

const Contact: FC<ContactProps> = ({ last, onClick }) => (
  <li
    className={cn("flex justify-between items-center pb-3", {
      "border-b border-neitral-900/20": !last,
    })}
    onClick={onClick}
  >
    <Avatar />
    <RightCaretIcon />
  </li>
);

export default Contact;
