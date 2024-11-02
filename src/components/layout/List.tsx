import { gap } from "@/lib/types/tailwindProps";
import clsx from "clsx"

interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'vertical' | 'horizontal';
  gap?: gap;
  className?: string;
}

const List: React.FC<ListProps> = ({ direction = 'vertical', gap = 'gap-4', className, ...props}) => {
  return <div className={clsx('flex border-zinc-300 dark:border-zinc-700', direction === 'vertical' ? 'flex-col' : 'flex-row', gap, className)} {...props} />
}

export default List 