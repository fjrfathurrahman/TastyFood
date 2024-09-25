import Link from "next/link";
import { BoxFlex, BoxGrid, ImageEl } from "../common";
import { ResponseGallery } from "@/lib/types/types";
import { dImages } from "@/lib/data/data";

export const GalleryList = (props: {
  data: ResponseGallery[];
}): JSX.Element => {
  const { data } = props;

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
        <Link href={`/${item.id}`} key={item.id} className="flex justify-center">
          <ImageEl src={item.image} />
        </Link>
      ))}
    </BoxGrid>
  );
};
