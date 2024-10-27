"use client";

import { Button, Title } from "@/components/common";
import { Box, Layout, List } from "@/components/layout";
import { NewsItem } from "@/lib/types/response";
import useGetNews from "@/lib/hooks/news/useGetNews";
import Link from "next/link";
import { CardNews } from "@/components/common/Card";
import { Loaders } from "@/components/skeletons/Card";

export const HighlightNews = () => {
  const { data, isLoading } = useGetNews();

  return (
    <Layout.Section bg="bg-zinc-100" sizing={"h-max"}>
      <Layout.Container>
        <List className="items-center gap-8">
          <Title text="BERITA TERBARU" />

          <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {isLoading
              ? [1, 2, 3, 4].map(() => Loaders.CardNews())
              : RenderNews(data)}
          </Box>

          <Button>
            <Link href={"/berita"}>LIHAT LEBIH BANYAK</Link>
          </Button>
        </List>
      </Layout.Container>
    </Layout.Section>
  );
};

function RenderNews(data: NewsItem[]) {
  return data.slice(0, 5)?.map((item: NewsItem) => <CardNews key={item.id} {...item} />);
}
