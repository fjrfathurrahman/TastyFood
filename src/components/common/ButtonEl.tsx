import { ButtonProps } from "@/lib/types/types";

const ButtonEl = ({ className, width = "w-max", ...props }: ButtonProps): JSX.Element => {
  let style = '';

  switch (props.variant) {
    case 'primary':
      style = 'btnPrimary';
      break;
    case 'bordered':
      style = 'btnBordered';
      break;
    default:
      style = '';
  }

  return (
    <button onClick={props.onClick} type={props.type} className={`${className} ${width} ${style}`}>
      {props.children}
      {props.icon}
      {props.text}
    </button>
  );
}

export default ButtonEl;
