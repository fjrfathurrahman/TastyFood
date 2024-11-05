"use client";

import { Button, Title } from "@/components/common";
import { Box, Layout, List } from "@/components/layout";
import { NewsItem } from "@/lib/types/response";
import { CardNews } from "@/components/common/Card";
import { Result } from "@/components/fragments/Result";
import useGetNews from "@/lib/hooks/news/useGetNews";
import Link from "next/link";

export const HighlightNews = () => {
  const { data, status } = useGetNews();

  return (
    <Layout.Section bg="bg-zinc-100" className="*:border">
      <Layout.Container sizing={"h-max"}>
        <List className="items-center gap-8">
          <Title text="BERITA TERBARU" />

          <Result status={status} data={data} card="CardNews">
            {data && data.length > 0 ? RenderNews(data) : null}
          </Result>

          {data.length > 0 ? (
            <Button>
              <Link href={"/berita"}>LIHAT LEBIH BANYAK</Link>
            </Button>
          ) : null}
        </List>
      </Layout.Container>
    </Layout.Section>
  );
};

function RenderNews(data: NewsItem[]) {
  const newsPrimary = data.find((item) => item.category === "Berita Utama");

  return (
    <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-y-6 lg:gap-x-6 w-full">
      <div className="col-span-3">
        {newsPrimary && <CardNews item={newsPrimary} />}
      </div>
      <div className="col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data.filter((item) => item.category !== "Berita Utama").slice(0, 5).map(item => (
          <CardNews key={item.id} item={item} />
        ))}
      </div>
    </Box>
  );
}

