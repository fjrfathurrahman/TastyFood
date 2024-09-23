import { LayoutProps } from "@/lib/types/types";

export const MainContainer = ({paddingY = "py-16", ...props }: LayoutProps): JSX.Element => {
  return (
    <div className={`${props.className} ${props.padding} ${paddingY} ${props.paddingX} container`} {...props}>
      {props.children}
    </div>
  );
};
