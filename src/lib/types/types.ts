export interface GlobalProps {
  children?: React.ReactNode | JSX.Element;
  className?: string;
}

export interface LayoutProps extends GlobalProps {
  width?: "w-full" | "w-max" | "w-1/2" | "w-1/3" | "w-1/4" | "w-1/5";
  height?: "h-full" | "h-max";
  padding?: "p-2" | "p-4" | "p-6" | "p-8" | "p-10" | "p-12" | "p-14" | "p-16" | "p-20" | "p-24" | "p-28" | "p-32";
  paddingY?: "py-2" | "py-4" | "py-6" | "py-8" | "py-10" | "py-12" | "py-14" | "py-16" | "py-20" | "py-24" | "py-28" | "py-32";
  paddingX?: "px-2" | "px-4" | "px-6" | "px-8" | "px-10" | "px-12" | "px-14" | "px-16" | "px-20" | "px-24" | "px-28" | "px-32";
  margin?: "m-2" | "m-4" | "m-6" | "m-8" | "m-10" | "m-12";
  marginY?: "my-2" | "my-4" | "my-6" | "my-8" | "my-10" | "my-12";
  marginX?: "mx-auto" | "mx-2" | "mx-4" | "mx-6" | "mx-8" | "mx-10" | "mx-12";
  bg?: "bg-white" | "bg-black" | "bg-gray-200" | "bg-gray-300";
}

export interface ButtonProps extends GlobalProps, LayoutProps {
  variant?: "primary" | "bordered";
  onClick?: () => void;
  text?: string;
  icon?: {
    src?: React.ReactNode;
    align?: "left" | "right";
  };
}

export interface FlexProps extends GlobalProps, LayoutProps {
  direction?: "flex-row" | "flex-row-reverse" | "flex-col" | "flex-col-reverse";
  justify?: "justify-start" | "justify-center" | "justify-end" | "justify-between" | "justify-around";
  align?: "items-start" | "items-center" | "items-end" | "items-stretch";
  gap?: "gap-2" | "gap-4" | "gap-6" | "gap-8" | "gap-10" | "gap-12";
}

export interface GridProps extends GlobalProps {
  grid?: "grid" | "grid-flow-row" | "grid-flow-col" | "grid-flow-row-dense" | "grid-flow-col-dense";
  gridRows?: "grid-rows-1" | "grid-rows-2" | "grid-rows-3" | "grid-rows-4" | "grid-rows-5";
  gridColumns?: "grid-cols-1" | "grid-cols-2" | "grid-cols-3" | "grid-cols-4" | "grid-cols-5";
  gap?: "gap-2" | "gap-4" | "gap-6" | "gap-8" | "gap-10" | "gap-12";
}


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