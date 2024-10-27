"use client";

import { Button, Title } from "@/components/common";
import Image from "@/components/common/Image";
import { Layout, List } from "@/components/layout";
import { Loader } from "@/components/skeletons";
import useGetGallery from "@/lib/hooks/gallery/useGetGallery";
import { GalleryItem } from "@/lib/types/response";
import Link from "next/link";

export const HighlightGallery = () => {
  const { data, isLoading } = useGetGallery();

  return (
    <Layout.Container>
      <List className="items-center">
        <Title text="GALERI KAMI" />

        <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full px-0 sm:px-12 mb-8">
          {isLoading ? Loader.GalleryLoader() : data.length > 0 ? (
            RenderGallery(data)
          ) : (
            <p>Galeri Tidak Ditemukan</p>
          )}
        </div>

        <Button>
          <Link href={"/galeri"}>LIHAT LEBIH BANYAK</Link>
        </Button>
      </List>
    </Layout.Container>
  );
};

function RenderGallery(data: GalleryItem[]) {
  return data.slice(0, 8).map((item, index) => (
    <Image
      key={index}
      src={item?.image?.toString() ?? ""}
      alt="Image"
      className="brightness-75 hover:brightness-100 transition-all duration-300 cursor-pointer"
    />
  ));
}

