"use client";

import { Button, Title } from "@/components/common";
import { Layout, List } from "@/components/layout";
import { Loader } from "@/components/loader";
import useGetGallery from "@/lib/hooks/gallery/useGetGallery";
import Image from "next/image";

export const HighlightGallery = () => {
  const { data, isLoading } = useGetGallery();

  return (
    <Layout.Container>
      <List className="items-center">
        <Title text="GALERI KAMI" />

        <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full px-0 sm:px-12 mb-8 border">
          {isLoading ? Loader.GalleryLoader() : data.length > 0 ? (
            RenderGallery(data)
          ) : (
            <p>Galeri Tidak Ditemukan</p>
          )}
        </div>

        <Button>LIHAT LEBIH BANYAK</Button>
      </List>
    </Layout.Container>
  );
};

function RenderGallery(data: []) {
  return data.slice(0, 8).map((item: { image: string }, index) => (
    <div key={index} className="relative w-full h-80 md:h-60 xl:h-72 rounded-xl">
      <Image
        src={item?.image}
        alt="Image"
        className="w-auto h-auto object-cover rounded-xl cursor-pointer brightness-75 hover:brightness-100 transition-all duration-300"
        quality={100}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        fill
      />
    </div>
  ));
}

