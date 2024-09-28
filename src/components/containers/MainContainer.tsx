import { LayoutProps } from "@/lib/types/types";

const MainContainer = ({className, paddingY = "py-16", ...props }: LayoutProps): JSX.Element => {
  return (
    <div className={`${className} ${props.padding} ${paddingY} ${props.paddingX} ${props.height} container`} {...props}>
      {props.children}
    </div>
  );
};

export default MainContainer