import { InputProps } from "@/lib/types/types";

const InputEl = ({className, ...props }: InputProps): JSX.Element => {
  return (
    <div className={`${className} text-gray-700 w-full px-4 flex items-center gap-3 border rounded-xl sm:rounded-2xl`}>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      {props.icon && <span className="text-sm sm:text-lg">{props.icon}</span>}
      <input type={props.type} id={props.id} placeholder={props.placeholder} onChange={props.onChange} value={props.value}  required/>
    </div>
  );
};

export default InputEl;
