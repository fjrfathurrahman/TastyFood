import Image, { StaticImageData } from "next/image"

interface PropsImage {
  src: string | StaticImageData
  width?: 'w-72' | 'w-80' | 'w-96' | 'w-full'
  height?: 'h-24' | 'h-72' | 'h-80' | 'h-96'| 'h-full'
  className?: string
  position?: 'absolute' | 'relative'
  rounded?: 'rounded-none' | 'rounded' | 'rounded-2xl' | 'rounded-3xl'
}

const ImageEl = ({ src, position = 'relative', width = 'w-full', height = 'h-96', className, rounded = 'rounded-3xl' }: PropsImage) => {
  return (
    <div className={`${className} ${position} ${width} ${height}`}>
      <Image src={src} alt="image" className={`w-auto h-auto ${rounded} bg-cover object-cover`} quality={30} sizes="(100vw, 100vh)" fill  priority />
    </div>
  )
}

export default ImageEl