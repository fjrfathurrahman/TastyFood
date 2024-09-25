import { SpacingProps, TypographyProps } from "@/lib/types/types";

const TittleEl = ({ text = "Tittle", className, paddingY = "py-8", textAlign = "text-start", ...props}: TypographyProps & SpacingProps): JSX.Element => {
  return (
    <div className={`${className} ${paddingY} ${textAlign}`}>
      <h1 className={`${props.fontWeight} text-3xl sm:text-4xl uppercase font-bold`}>{text}</h1>
    </div>
  );
};

export default TittleEl;
