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
        {newsPrimary ? <CardNews item={newsPrimary} /> : defaultPrimary && <CardNews item={defaultPrimary} /> }
      </div>
      <div className="col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data.filter((item) => item.category !== "Berita Utama").slice(0, 5).map(item => (
          <CardNews key={item.id} item={item} />
        ))}
      </div>
    </Box>
  );
}

export const defaultPrimary = {
  id: 99999999,
  title: "Resep Makanan Sehat untuk Diet",
  content: "Diet sehat bukan hanya tentang mengurangi kalori, tetapi juga tentang memilih bahan makanan yang tepat. Dalam artikel ini, kita akan membahas berbagai resep makanan sehat yang dapat membantu Anda mencapai tujuan diet Anda.",
  excerpt: "Pelajari cara membuat makanan sehat yang lezat dan bergizi untuk mendukung diet Anda.",
  image: "https://img.freepik.com/free-photo/sukiyaki-pork-served-with-suki-spicy-sauce_1150-27328.jpg?ga=GA1.1.1003546452.1730452171&semt=ais_hybrid",
  category: "Berita Utama",
  created_at: "2024-11-05T10:00:00Z",
  updated_at: "2024-11-05T10:00:00Z"
}