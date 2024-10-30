"use client";

import { Title } from "@/components/common";
import { Layout } from "@/components/layout";
import Image from "@/components/common/Image";
import useGetGallery from "@/lib/hooks/gallery/useGetGallery";
import { Result } from "@/components/fragments/Result";

export const GalleryList = () => {
  const { data, status } = useGetGallery();

  return (
    <Layout.Container className="space-y-8">
      <Title text="GALERI KAMI" center />

      <Result status={status} data={data} card="CardGallery">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {RenderGallery(data)}
        </div>
      </Result>
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
