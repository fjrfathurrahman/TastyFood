"use client";

import { Title } from "@/components/common";
import { NewsItem } from "@/lib/types/response";
import { Box, Layout, List } from "@/components/layout";
import useGetNews from "@/lib/hooks/news/useGetNews";
import { Loader } from "@/components/loader";
import { CardNews } from "@/components/common/Card";

export const OtherNews = () => {
  const { data, isLoading } = useGetNews();

  return (
    <Layout.Container>
      <List>
        <Title text="BERITA LAINNYA" />

        <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {isLoading
            ? [1, 2, 3, 4, 5, 6].map(() => Loader.DetailLoader())
            : data.length > 0
            ? RenderNews(data)
            : null}
        </Box>
      </List>
    </Layout.Container>
  );
};

function RenderNews(data: NewsItem[]) {
  return data.slice(0, 9).map((item: NewsItem) => <CardNews key={item.id} {...item}/>);
}
