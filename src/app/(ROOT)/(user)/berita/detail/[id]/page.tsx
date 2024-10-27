"use client";

import useGetNews from "@/lib/hooks/news/useGetNews";
import { NewsItem } from "@/lib/types/response";
import { Layout } from "@/components/layout";
import { CardNews } from "@/components/common/Card";
import { Loaders } from "@/components/skeletons/Card";
import { DetailNews } from "@/components/fragments/DetailNews";
import { notFound } from "next/navigation";

export default function DetailBerita({ params }: { params: { id: string } }) {
  const { data, isLoading, result, } = useGetNews(params.id);

  if (result?.data.data === null) {
    notFound();
  }

  return (
    <Layout.Container>
      <DetailNews data={data} isLoading={isLoading}>
        <DetailNews.Footer>
          <h4>BERITA LAINNYA</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 ">
            {RenderOtherNews(params.id)}
          </div>
        </DetailNews.Footer>
      </DetailNews>
    </Layout.Container>
  );
}

function RenderOtherNews(currentId: string) {
  const { data, isLoading } = useGetNews();

  if (isLoading)
    return [1, 2, 3, 4].map((item) => <Loaders.CardNews key={item} />);

  return data?.filter((item: NewsItem) => item.id !== Number(currentId)).slice(0, 4).map((item: NewsItem) => <CardNews key={item.id} {...item} />);
}