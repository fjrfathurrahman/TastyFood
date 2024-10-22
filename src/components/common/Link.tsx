import cn from "@/lib/utils/cn"
import NextLink from "next/link"
import { VariantProps } from "class-variance-authority"
import { LinkVariants } from "../variants"

interface LinkProps extends React.ComponentProps<typeof NextLink>, VariantProps<typeof LinkVariants> {
  variant?: 'default' | 'icon' | 'textIcon',
  icon?: React.ReactNode,
  text?: string
}

const Link: React.FC<LinkProps> = ({ className, variant = 'default', ...props}) => {

  return (
    <NextLink className={cn(LinkVariants({className, variant}))} {...props}>
      {variant === 'icon' ? props.icon : variant === 'textIcon' ? (
        <>
          <span>{props.icon}</span>
          <span className="text-sm sm:text-lg">{props.text}</span>
        </>
      ): props.children}
    </NextLink>
  )

}

export default Link 