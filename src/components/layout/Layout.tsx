import { TailwindResponsiveProps } from "@/lib/types/tailwindProps";
import clsx from "clsx";

interface LayoutProps extends TailwindResponsiveProps, React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  bg?: 'bg-black' | 'bg-white' | 'bg-zinc-100' | 'bg-zinc-200';
}

const Section: React.FC<LayoutProps> = ({ className = "", sizing = [], spacing = [], flexbox = [], grid = [], ...props}) => {
  const classNames = clsx(className, sizing, spacing, flexbox, grid);

  return <div className={classNames} {...props}>{props.children}</div>
}

const Container: React.FC<LayoutProps> = ({ className = "", sizing = [], spacing = ['py-16', 'sm:py-24'], flexbox = [], grid = [], ...props}) => {
  const classNames = clsx('container mx-auto', className, sizing, spacing, flexbox, grid);

  return <div className={classNames} {...props}>{props.children}</div>
}

const Layout = { Container, Section }
export default Layout