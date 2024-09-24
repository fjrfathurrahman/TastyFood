import Link from "next/link";

interface PropsLinks {
  className?: string;
  url?: string | URL | object;
  text?: string;
  icon?: string | React.ReactNode;
  variant?: "withIcon" | "Icon" | "link";
}

const LinksEl = ({
  url = "/",
  variant = "link",
  ...props
}: PropsLinks): JSX.Element | null => {
  switch (variant) {
    case "link":
      return (
        <Link href={url} className={`${props.className} font-medium`}>
          {props.text}
        </Link>
      );

    case "withIcon":
      return (
        <Link
          href={url}
          className={`${props.className} flex items-center gap-3 font-medium`}
        >
          <span className="text-lg">{props.icon}</span>
          <p>{props.text}</p>
        </Link>
      );

    case "Icon":
      return (
        <Link
          href={url}
          className={`${props.className} text-3xl hover:scale-125 transition-all duration-500`}
        >
          <span>{props.icon}</span>
        </Link>
      );
    default:
      return null;
  }
};

export default LinksEl;
