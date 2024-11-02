import { TailwindResponsiveProps } from "@/lib/types/tailwindProps";
import clsx from "clsx";

interface BoxProps extends TailwindResponsiveProps, React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({className = "", sizing = [], spacing = [], flexbox = [''], grid = [], ...props}) => {
  const classNames = clsx('border-zinc-300 dark:border-zinc-700', className, sizing, spacing, flexbox, grid);

  return <div className={classNames} {...props}>{props.children}</div>;
};

export default Box;
