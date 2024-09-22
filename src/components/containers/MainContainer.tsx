import { LayoutProps } from "@/lib/types/types"

export const MainContainer = ({ className, paddingY = "py-12", ...props }: LayoutProps) : JSX.Element => {
  return (
    <div className={`${className} ${props.padding} ${paddingY} ${props.paddingX} ${props.margin} ${props.marginY} ${props.marginX} ${props.bg} container`} {...props}>
      {props.children}
    </div>
  )
}