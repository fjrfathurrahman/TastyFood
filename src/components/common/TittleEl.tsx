const TittleEl = ({
  text = "Tittle",
  className,
  paddingY = "py-8",
  textAlign = "text-start",
}: {
  text: string;
  className?: string;
  paddingY?: string;
  textAlign?: string;
}): JSX.Element => {

  return (
    <div className={`${className} ${paddingY} ${textAlign}`}>
      <h1 className="text-3xl sm:text-4xl uppercase font-bold">{text}</h1>
    </div>
  );

};

export default TittleEl