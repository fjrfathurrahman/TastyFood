import { LinkProps } from "@/lib/types/types";
import Link from "next/link";

const LinksEl = ({ className, variant = "link", url = "#", ...props }: LinkProps): JSX.Element | null => {
  let style = "";

  switch (variant) {
    case "link":
      style = "font-semibold";
      break;

    case "withIcon":
      style = "flex items-center gap-3 font-semibold";
      break;

    case "Icon":
      style = "text-3xl hover:scale-125 transition-all duration-300";
      break;
  }

  return (
    <Link href={url} className={`${className} ${style}`}>
      {!props.icon && props.text}
      {!props.text && props.icon}
      {props.icon && props.text && (
        <>
          <span className="text-xl">{props.icon}</span>
          <p>{props.text}</p>
        </>
      )}
    </Link>
  );
};

export default LinksEl;
