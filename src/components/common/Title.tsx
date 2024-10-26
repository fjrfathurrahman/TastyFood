import clsx from "clsx";

interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  center?: boolean;
}

const Title = ({ text, center, ...props }: TitleProps) => {
  return (
    <div className={clsx('pb-4 pt-2 flex items-center', center ? 'justify-center' : '')} {...props}>
      <h3 className="font-bold">{text}</h3>
    </div>
  );
};

export default Title;
