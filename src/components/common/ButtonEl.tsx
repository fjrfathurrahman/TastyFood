import { ButtonProps } from "@/lib/types/types";

const ButtonEl = ({ className, variant = "primary", width = "w-max", ...props }: ButtonProps): JSX.Element => {
  let style = '';

  switch (variant) {
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
    <button onClick={props.onClick} type={props.type} className={`${className} ${width} ${style} flex items-center justify-center`}>
      {props.children}
      {props.icon}
      {props.text}
    </button>
  );
}

export default ButtonEl;
