import React, {ReactNode} from "react";
import { appearance, size } from "./styled";

export interface ButtonProps {
  buttonType: keyof typeof  appearance;
  buttonSize: keyof typeof size;
  children?:ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    buttonType = "primary" , 
    buttonSize = "medium",
    children = "Button Text",
    onClick,
  } = props;

  return (
    <button
      type="button"
      className={`${appearance[buttonType]} ${size[buttonSize]}`}
      onClick={onClick}
    >
      {children}
    </button>
  )

}





export default Button;