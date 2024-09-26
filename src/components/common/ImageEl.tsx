import { ImageProps } from "@/lib/types/types"
import Image from "next/image"

const ImageEl = ({className, position = 'relative', width = 'w-full', height = 'h-96', rounded = 'rounded-3xl', ...props }: ImageProps) => {
  return (
    <div className={`${className} ${position} ${width} ${height}`}>
       {props.src && (  
        <Image
          src={props.src}
          alt="image"
          className={`w-auto h-auto ${rounded} bg-cover object-cover`}
          quality={30}
          sizes="(100vw, 100vh)"
          fill
          priority
        />
      )}
    </div>
  )
}

export default ImageEl