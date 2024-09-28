import { GridProps } from "@/lib/types/types"

const BoxGrid = ({className, gridRows, gridColumns = "grid-cols-1", gap = "gap-4", ...props}: GridProps): JSX.Element => {
  return (
    <div className={`${className} ${gridRows} ${gridColumns} ${gap} grid`} {...props}>
      {props.children}
    </div>
  )
}

export default BoxGrid