import { LayoutProps } from "@/lib/types/types";

export const MainContainer = ({className, paddingY = "py-16", ...props }: LayoutProps): JSX.Element => {
  return (
    <div className={`${className} ${props.padding} ${paddingY} ${props.paddingX} container`} {...props}>
      {props.children}
    </div>
  );
};
