import { StaticImageData } from "next/image";

type WidthOptions = 'w-full' | 'w-max' | 'w-auto' | 'w-0' | 'w-4' | 'w-8' | 'w-12' | 'w-16' | 'w-20' | 'w-24' | 'w-32' | 'w-44' | 'w-72' | 'w-80' | 'w-96'| 'w-3/12' |  'w-1/2' | 'w-3/4' ;
type HeightOptions = 'h-full' | 'h-max' | 'h-auto' | 'h-0' | 'h-4' | 'h-8' | 'h-12' | 'h-16' | 'h-20' | 'h-24' | 'h-32' | 'h-44' | 'h-72' | 'h-80' | 'h-96' | 'h-3/12' |  'h-1/2' | 'h-3/4' ;
type PaddingOptions = 'p-auto' | 'p-0' | 'p-4' | 'p-8' | 'p-12' | 'p-16' | 'p-20' | 'p-24' | 'p-28' | 'p-32' | 'p-44' | 'p-72';
type PaddingYOptions = 'py-auto' | 'py-0' | 'py-4' | 'py-8' | 'py-12' | 'py-16' | 'py-20' | 'py-24' | 'py-28' | 'py-32' | 'py-44' | 'py-72';
type PaddingXOptions = 'px-auto' | 'px-0' | 'px-4' | 'px-8' | 'px-12' | 'px-16' | 'px-20' | 'px-24' | 'px-28' | 'px-32' | 'px-44' | 'px-72';
type MarginOptions = 'm-auto' | 'm-0' | 'm-4' | 'm-8' | 'm-12' | 'm-16' | 'm-20' | 'm-24' | 'm-28' | 'm-32' | 'm-44' | 'm-72';
type MarginYOptions = 'my-auto' | 'py-0' | 'py-4' | 'py-8' | 'py-12' | 'py-16' | 'py-20' | 'py-24' | 'py-28' | 'py-32' | 'py-44' | 'py-72';
type MarginXOptions = 'mx-auto' | 'px-0' | 'px-4' | 'px-8' | 'px-12' | 'px-16' | 'px-20' | 'px-24' | 'px-28' | 'px-32' | 'px-44' | 'px-72';
export type GapOptions = 'gap-0' | 'gap-4' | 'gap-8' | 'gap-12' | 'gap-16' | 'gap-20' | 'gap-24' | 'gap-28' | 'gap-32' | 'gap-44' | 'gap-72';

export interface SpacingProps {
  padding?: PaddingOptions;
  paddingY?: PaddingYOptions;
  paddingX?: PaddingXOptions;
  margin?: MarginOptions;
  marginY?: MarginYOptions;
  marginX?: MarginXOptions;
}

export interface SizingProps {
  width?: WidthOptions;
  height?: HeightOptions;
}
export interface GlobalProps {
  children?: React.ReactNode | JSX.Element;
  className?: string;
}

export interface TypographyProps extends GlobalProps {
  text: string;
  fontSize?: "text-xs" | "text-sm" | "text-base" | "text-lg" | "text-xl" | "text-2xl" | "text-3xl" | "text-4xl" | "text-5xl" | "text-6xl" | "text-7xl" | "text-8xl" | "text-9xl";
  fontWeight?: "font-light" | "font-normal" | "font-medium" | "font-semibold" | "font-bold" | "font-extrabold";
  textAlign?: "text-start" | "text-left" | "text-center" | "text-right";
}

export interface LayoutProps extends GlobalProps, SizingProps, SpacingProps {
  bg?: "bg-white" | "bg-black" | "bg-gray-200" | "bg-gray-300" | "bg-gray-400" | "bg-gray-500" | "bg-gray-600" | "bg-gray-700" | "bg-gray-800" | "bg-gray-900";
}



// * DISPLAY LAYOUT
export interface FlexProps extends GlobalProps, LayoutProps {
  direction?: "flex-row" | "flex-row-reverse" | "flex-col" | "flex-col-reverse";
  justify?: "justify-start" | "justify-center" | "justify-end" | "justify-between" | "justify-around";
  align?: "items-start" | "items-center" | "items-end" | "items-stretch";
  gap?: GapOptions
}

export interface GridProps extends GlobalProps {
  grid?: "grid" | "grid-flow-row" | "grid-flow-col" | "grid-flow-row-dense" | "grid-flow-col-dense";
  gridRows?: "grid-rows-1" | "grid-rows-2" | "grid-rows-3" | "grid-rows-4" | "grid-rows-5";
  gridColumns?: "grid-cols-1" | "grid-cols-2" | "grid-cols-3" | "grid-cols-4" | "grid-cols-5";
  gap?: GapOptions
}



// * COMPONENTS 
export interface ButtonProps extends GlobalProps, LayoutProps {
  variant?: "primary" | "bordered";
  type?: "button" | "submit" | "reset" | undefined;
  text?: string;
  icon?: React.ReactNode | undefined;
  onClick?: () => void;
}

export interface LinkProps extends GlobalProps {
  url?: string | URL | object;
  icon?: React.ReactNode;
  variant?: "withIcon" | "Icon" | "link";
  text?: string;
}

export interface ImageProps extends GlobalProps, SizingProps, SpacingProps {
  src: string | StaticImageData | object | undefined;
  position?: 'absolute' | 'relative'
  rounded?: 'rounded-none' | 'rounded' | 'rounded-2xl' | 'rounded-3xl'
}


// * API RESPONSE INTERFACE
export interface ApiResponse<T> {
  status: boolean;
  message: string;
  data?: T[] | []
}

export interface ResponseGallery {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
  created_at: string;
  updated_at: string;
}

export interface ResponseCompany {
  id: number;
  company_name: string;
  description: string;
  address: string;
  address_url: string;
  facebook: string;
  instagram: string;
  twitter: string;
  linkedin: string;
  website: string;
  email: string;
  phone: string;
  copyright: string;
  created_at: string;
  updated_at: string;
}