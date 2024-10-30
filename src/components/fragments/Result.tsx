import NotFound from "@/app/public/Not Found.png";
import ServerInternal from "@/app/public/Internal Server.png";
import { Loaders } from "@/components/skeletons/Card";
import Image from "next/image";

export const Result = ({ status, data, children, card } : {children: React.ReactNode, status: 'loading' | 'error' | 'success' | 'idle', card: 'CardNews' | 'CardGallery', data: []}) => {

  if (status === 'loading') {
    return (
      <div className="border grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {card === 'CardNews' ? <Loaders.CardNews /> : <Loaders.CardGallery />}
      </div>
    )
  }

  if (data.length > 0) {
    return <>{children}</>
  }

  return (
    <div className="flex items-center justify-center flex-col gap-2.5 text-center w-2/3 mx-auto">
      <Image src={status === 'error' ? ServerInternal : NotFound} alt="Image" width={400} height={400} />
      <h4>{status === 'error' ? 'Terjadi Kesalahan, Silahkan Coba Lagi' : 'Data Tidak Ditemukan'}</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque expedita magni harum quo molestiae nostrum dolores culpa provident a? Tenetur?</p>
    </div>
  )
}
