import { TailwindResponsiveProps } from "@/lib/types/tailwindProps";
import clsx from "clsx";

interface LayoutProps extends TailwindResponsiveProps, React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  bg?: 'bg-black' | 'bg-white' | 'bg-zinc-100' | 'bg-zinc-200' | 'bg-zinc-300';
}

const Section: React.FC<LayoutProps> = ({ className = "", sizing = [], spacing = [], flexbox = [], grid = [], bg = [], ...props}) => {
  const classNames = clsx('relative top-0 left-0 right-0 z-10', className, sizing, spacing, flexbox, grid, bg);

  return <div className={classNames} {...props}>{props.children}</div>
}

const Container: React.FC<LayoutProps> = ({ className = "", sizing = ['min-h-[648px]'], spacing = ['py-16', 'sm:py-24'], flexbox = [], grid = [], ...props}) => {
  const classNames = clsx('container mx-auto border-b', className, sizing, spacing, flexbox, grid);

  return <div className={classNames} {...props}>{props.children}</div>
}

const Layout = { Container, Section }
export default Layout