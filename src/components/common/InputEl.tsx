import { InputProps } from "@/lib/types/types";

const InputEl = ({className, ...props }: InputProps): JSX.Element => {
  return (
    <div className={`${className} w-full px-4 flex items-center gap-3 border rounded-2xl`}>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      {props.icon && <span>{props.icon}</span>}
      <input type={props.type} id={props.id} placeholder={props.placeholder} className="w-full py-3" />
    </div>
  );
};

export default InputEl;
