import { cva } from "class-variance-authority";

export const ButtonVariants = cva(
  'flex items-center justify-center rounded-xl font-medium duration-300 ease-out transition-all',
  {
    variants: {
      variant: {
        default: 'bg-black text-white hover:bg-black/85',
        outlined: 'border-2 border-black',
        icon: 'bg-black text-white rounded-full',
      },
      size: {
        default: 'px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base',
        sm: 'px-8 py-3 text-base',
        md: 'px-12 py-3.5 text-xl',
        rounded: 'rounded-full text-xl sm:text-2xl lg:text-3xl w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16',
      },
      default: {
        variant: 'default',
        size: 'default',
      },
    }
  }
)

export const LinkVariants = cva(
  'flex items-center justify-center font-semibold duration-500 ease-out transition-all underline-offset-2 border',
  {
    variants: {
      variant: {
        default: 'w-max text-black text-lg sm:text-xl hover:underline ',
        icon: 'w-max text-2xl sm:text-4xl',
        textIcon: 'w-max text-2xl sm:text-3xl gap-2 flex-row',
      },
    }
  }
)
