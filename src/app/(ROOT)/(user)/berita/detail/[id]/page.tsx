"use client";

import useGetNews from "@/lib/hooks/news/useGetNews";
import FormatDate from "@/lib/utils/FormatDate";
import Image from "next/image";
import { NewsItem } from "@/lib/types/response";
import { Layout } from "@/components/layout";
import { CardNews } from "@/components/common/Card";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

export default function DetailBerita({ params }: { params: { id: string } }) {
  const { data } = useGetNews(params.id);

  return (
    <Layout.Container>

      <Card className="grid grid-cols-1 lg:grid-cols-6 xl:grid-cols-5">
        <CardHeader className="col-span-3 xl:col-span-2">
          <div className="relative w-full h-80 rounded-xl col-span-2">
            <Image
              src={data?.image?.toString() ?? ""}
              alt="Image"
              sizes="100vw, 100vh"
              className="w-full h-full object-cover rounded-xl"
              fill
            />
          </div>
        </CardHeader>

        <CardBody className="space-y-6 col-span-3">
          <div>
            <h3>{data?.title}</h3>
            <small>Dibuat: {FormatDate(data?.created_at)}</small>
          </div>

          <p className="text-small">{data?.excerpt}</p>
        </CardBody>

        <CardBody className="col-span-3 xl:col-span-2">
          <div dangerouslySetInnerHTML={{ __html: data?.content as string }} className="prose p-4 tiptap h-max"/>
        </CardBody>

        <CardBody className="col-span-3 space-y-6 h-max">
          <h4>BERITA LAINNYA</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 ">
            {RenderOtherNews(params.id)}
          </div>
        </CardBody>
      </Card>
    </Layout.Container>
  );
}

function RenderOtherNews(currentId: string) {
  const { data } = useGetNews();

  return data?.filter((item: NewsItem) => item.id !== Number(currentId)).slice(0, 4)
    .map((item: NewsItem) => <CardNews key={item.id} {...item} />);
}
