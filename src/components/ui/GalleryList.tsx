import Link from "next/link";
import { ResponseGallery } from "@/lib/types/types";
import { dImages } from "@/lib/data/data";
import { BoxFlex, BoxGrid } from "../containers";
import { ImageEl } from "../common";

export const GalleryList = (props: { data: ResponseGallery[]; url?: string | URL; }): JSX.Element => {
  const { data, url } = props;

  if (!data || data.length === 0) {
    return (
      <BoxFlex direction="flex-col" align="items-center" justify="justify-center">
        <ImageEl src={dImages.notData} width="w-80" height="h-96" />
        <h1 className="italic font-semibold text-lg sm:text-xl text-center">Oops! Sepertinya tidak ada <br /> data untuk ditampilkan saat ini.</h1>
      </BoxFlex>
    );
  }

  return (
    <BoxGrid className="md:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => (
        <Link 
          href={url ? `${url}` : `/galeri/detail/${item.id}`} 
          key={item.id} 
          className="flex justify-center rounded-3xl"
        >
          <ImageEl src={item.image} className="w-full h-44 sm:h-72 md:h-96 hover:scale-90 duration-300 transition-all" />
        </Link>
      ))}
    </BoxGrid>
  );
};
