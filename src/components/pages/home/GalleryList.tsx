"use client";

import { Title } from "@/components/common";
import { Layout } from "@/components/layout";
import { Loader } from "@/components/skeletons";
import Image from "@/components/common/Image";
import useGetGallery from "@/lib/hooks/gallery/useGetGallery";

export const GalleryList = () => {
  const { data, isLoading } = useGetGallery();

  return (
    <Layout.Container className="space-y-8">
      <Title text="GALERI KAMI" center />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {isLoading ? Loader.GalleryLoader() : data.length > 0 ? RenderGallery(data) : null}
      </div>
    </Layout.Container>
  );
};

function RenderGallery(data: { image: string; id: number }[]) {
  return data.map((item) => (
    <Image
      key={item.id}
      src={item.image}
      alt="image"
      className="brightness-75 hover:brightness-100 transition-all duration-300 cursor-pointer"
    />
  ));
}
