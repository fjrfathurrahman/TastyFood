import Link from "next/link";
import { BoxGrid } from "../common";
import { Image } from "@nextui-org/react";
import { ResponseGallery } from "@/lib/types/types";

export const GalleryList = (props: { data: ResponseGallery[] }): JSX.Element => {
  const { data } = props;

  return (
    <BoxGrid className="md:grid-cols-2 lg:grid-cols-3">
      {!data && <div>Tidak ada data</div>}
      {data && data.map((item) => (
        <Link href={`/${item.id}`} key={item.id} className="border flex justify-center">
          <Image
            src={item.image}
            alt="image"
            height={270}
            isZoomed
          />
        </Link>
      ))}
    </BoxGrid>
  );
};
