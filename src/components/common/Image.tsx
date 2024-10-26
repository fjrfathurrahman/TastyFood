import NextImage from "next/image";

interface ImagePropss extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const Image: React.FC<ImagePropss> = ({ src, alt, ...props }) => {
  return (
    <div className={`relative w-full h-44 sm:h-52 md:h-64 rounded-xl`}>
      <NextImage src={src} alt={alt} className={`w-full h-full object-cover rounded-xl ${props.className}`} sizes="100vw, 100vh" quality={100} fill priority />
    </div>
  );
};

export default Image;
