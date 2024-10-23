type Breakpoint = 'sm:' | 'md:' | 'lg:' | 'xl:' | '2xl:';

type Responsive<T extends string> = T | `${Breakpoint}${T}`;
export type gap = 'gap-2' | 'gap-4' | 'gap-6' | 'gap-8' | 'gap-12' | 'gap-16'

export type TailwindSizing = Responsive<
 | 'w-max' | 'w-full' | 'w-screen' | 'w-auto' | 'w-8' | 'w-16' | 'w-32' | 'w-64' | 'w-1/2' | 'w-1/3' | 'w-1/4' | 'w-3/4' | 'w-4/5'
 | 'w-max' | 'h-full' | 'h-max' | 'h-screen' | 'h-auto' | 'h-8' | 'h-16' | 'h-32' | 'h-64' | 'h-1/2' | 'h-1/3' | 'h-1/4' | 'h-3/4' | 'h-4/5' | 'h-[700px]'
>;

export type TailwindSpacing = Responsive<
  | 'm-4' | 'm-8' | 'm-12' | 'm-14' | 'm-16' | 'm-20' | 'm-24' | 'm-auto'
  | 'my-4' | 'my-8' | 'my-12' | 'my-14' | 'my-16' | 'my-20' | 'my-24' | 'my-auto'
  | 'mb-4' | 'mb-8' | 'mb-12' | 'mb-14' | 'mb-16' | 'mb-20' | 'mb-24' | 'mb-auto'
  | 'mt-4' | 'mt-8' | 'mt-12' | 'mt-14' | 'mt-16' | 'mt-20' | 'mt-24' | 'mt-auto'
  | 'p-0' | 'p-4' | 'p-8' | 'p-12' | 'p-14' | 'p-16' | 'p-20' | 'p-24'
  | 'py-4' | 'py-8' | 'py-12' | 'py-14' | 'py-16' | 'py-20' | 'py-24' | 'py-28' | 'py-36'
  | 'px-4' | 'px-8' | 'px-12' | 'px-14' | 'px-16' | 'px-20' | 'px-24' | 'px-28' | 'px-36'
>;

export type TailwindFlexbox = Responsive<
  | 'flex' | 'inline-flex'
  | 'flex-row' | 'flex-row-reverse' | 'flex-col' | 'flex-col-reverse'
  | 'justify-start' | 'justify-end' | 'justify-center' | 'justify-between' | 'justify-around'
  | 'items-start' | 'items-end' | 'items-center' | 'items-baseline' | 'items-stretch'
  | gap
>;

export type TailwindGrid = Responsive<
  | 'grid'
  | 'grid-cols-1' | 'grid-cols-2' | 'grid-cols-3' | 'grid-cols-4' | 'grid-cols-5'
  | 'grid-rows-1' | 'grid-rows-2' | 'grid-rows-3' | 'grid-rows-4' | 'grid-rows-5'
  | gap
>;

export interface TailwindResponsiveProps {
  className?: string;
  sizing?: TailwindSizing | TailwindSizing[];
  spacing?: TailwindSpacing | TailwindSpacing[];
  flexbox?: TailwindFlexbox | TailwindFlexbox[];
  grid?: TailwindGrid | TailwindGrid[];
}
