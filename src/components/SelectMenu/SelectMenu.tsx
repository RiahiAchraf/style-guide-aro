import React, {ReactNode} from "react";

export interface ButtonProps {
  children?:ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children = "Button Text",
    onClick,
  } = props;

  return (
    <button
      type="button"
      onClick={onClick} //
    >
      {children}
    </button>
  )

}





export default Button;