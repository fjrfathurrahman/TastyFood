import { LayoutProps } from "@/lib/types/types"

export const SectionLayout = ({...props }: LayoutProps): JSX.Element => {
  return (
    <section className={`${props.className} ${props.bg}`} {...props}>
      {props.children}
    </section>
  )
}