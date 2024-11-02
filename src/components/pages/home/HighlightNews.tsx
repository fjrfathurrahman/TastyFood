"use client";

import { Button, Title } from "@/components/common";
import { Box, Layout, List } from "@/components/layout";
import { NewsItem } from "@/lib/types/response";
import useGetNews from "@/lib/hooks/news/useGetNews";
import Link from "next/link";
import { CardNews } from "@/components/common/Card";
import { Result } from "@/components/fragments/Result";

export const HighlightNews = () => {
  const { data, status } = useGetNews();

  return (
    <Layout.Section bg="bg-zinc-100" className="*:border">
      <Layout.Container sizing={"h-max"} >
        <List className="items-center gap-8">
          <Title text="BERITA TERBARU" />

            <Result status={status} data={data} card="CardNews">
              <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {RenderNews(data)}
              </Box>
            </Result>

          {data.length > 0 ?  <Button><Link href={"/berita"}>LIHAT LEBIH BANYAK</Link></Button> : null}
        </List>
      </Layout.Container>
    </Layout.Section>
  );
};

function RenderNews(data: NewsItem[]) {
  return data.slice(0, 5)?.map((item: NewsItem) => <CardNews key={item.id} {...item} />);
}
