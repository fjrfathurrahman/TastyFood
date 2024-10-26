import cn from "@/lib/utils/cn"
import { VariantProps } from "class-variance-authority"
import { ButtonVariants } from "../variants"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonVariants> {
  variant?: 'default' | 'outlined' | 'icon'
  size?: 'default' | 'sm' | 'md' | 'rounded'
}

const Button: React.FC<ButtonProps> = ({ className, variant = 'default', size = 'default', ...props}) => {
  return <button className={cn(ButtonVariants({className, variant, size}))} {...props}/>
}

export default Button