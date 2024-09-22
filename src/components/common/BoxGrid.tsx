import { GridProps } from "@/lib/types/types"

const BoxGrid = ({className, gap = "gap-12", ...props} : GridProps): JSX.Element => {
  return (
    <div className={`${className} ${props.grid} ${props.gridRows} ${props.gridColumns} ${gap} grid`} {...props}>
      {props.children}
    </div>
  )
}

export default BoxGrid