import { LayoutProps } from "@/lib/types/types"

export const SectionLayout = ({ className, ...props }: LayoutProps): JSX.Element => {
  return (
    <section className={`${className} ${props.bg}`}>
      {props.children}
    </section>
  )
}