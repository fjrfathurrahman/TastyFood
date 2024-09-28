import { LayoutProps } from "@/lib/types/types"

const SectionLayout = ({className, ...props }: LayoutProps): JSX.Element => {
  return (
    <section className={`${className} ${props.bg}`} {...props}>
      {props.children}
    </section>
  )
}
export default SectionLayout