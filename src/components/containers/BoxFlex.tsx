import { FlexProps } from "@/lib/types/types"

const BoxFlex = ({className, gap = "gap-4", ...props} : FlexProps): JSX.Element => {

  return (
    <div className={`${className} ${props.width} ${props.height} ${props.direction} ${props.justify} ${props.align} ${gap} flex`} {...props}>
      {props.children}
    </div>
  )
}

export default BoxFlex