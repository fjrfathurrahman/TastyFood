"use client";

import { Title } from "@/components/common";
import { NewsItem } from "@/lib/types/response";
import { Box, Layout, List } from "@/components/layout";
import useGetNews from "@/lib/hooks/news/useGetNews";
import { CardNews } from "@/components/common/Card";
import { Result } from "@/components/fragments/Result";

export const OtherNews = () => {
  const { data, status } = useGetNews();

  return (
    <Layout.Container sizing={'h-max'}>
      <List>
        <Title text="BERITA LAINNYA" />

        <Result status={status} card="CardNews" data={data}>
          <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {RenderNews(data)}
          </Box>
        </Result>
      </List>
    </Layout.Container>
  );
};

function RenderNews(data: NewsItem[]) {
  return data.slice(0, 9).map((item: NewsItem) => <CardNews key={item.id} {...item}/>);
}
