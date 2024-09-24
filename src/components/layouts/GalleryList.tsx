import Link from "next/link";
import { BoxGrid } from "../common";
import { ResponseGallery } from "@/lib/types/types";
import Image from "next/image";

export const GalleryList = (props: { data: ResponseGallery[] }): JSX.Element => {
  const { data } = props;

  return (
    <BoxGrid className="md:grid-cols-2 lg:grid-cols-3">
      {!data && <div>Tidak ada data</div>}
      {data && data.map((item) => (
        <Link href={`/${item.id}`} key={item.id} className="flex justify-center">
          <Image
            src={item.image}
            alt="image"
            width={400}
            height={300}
            quality={15}
            className="rounded-2xl"
          />
        </Link>
      ))}
    </BoxGrid>
  );
};
