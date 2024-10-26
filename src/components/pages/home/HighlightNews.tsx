"use client";

import { Title } from "@/components/common";
import { Box, Layout, List } from "@/components/layout";
import { NewsItem } from "@/lib/types/response";
import { Loader } from "@/components/loader";
import useGetNews from "@/lib/hooks/news/useGetNews";
import Image from "@/components/common/Image";
import FormatDate from "@/lib/utils/FormatDate";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

export const HighlightNews = () => {
  const { data, isLoading } = useGetNews();

  return (
    <Layout.Section bg="bg-zinc-100" sizing={"h-max"}>
      <Layout.Container>
        <List className="items-center gap-8">
          <Title text="BERITA TERBARU" />

          <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {isLoading
              ? [1, 2, 3, 4].map(() => Loader.DetailLoader())
              : RenderNews(data)}
          </Box>
        </List>
      </Layout.Container>
    </Layout.Section>
  );
};

function RenderNews(data: NewsItem[]) {
  return data.slice(0, 5)?.map((item: NewsItem) => (
    <Box key={item.id} className="w-full bg-white p-2.5 rounded-xl shadow-md space-y-4">
      <Image src={item?.image?.toString() ?? ""} alt="Image" />

      <div className="border-b pb-4">
        <h5 className="font-bold line-clamp-1">{item?.title}</h5>
        <small>{FormatDate(item?.created_at)}</small>
      </div>
      
      <p className="line-clamp-3">{item?.excerpt}</p>

      <Link href={`/berita/detail/${item?.id}`} className="text-primary font-medium flex items-center">
        Baca Selengkapnya
        <MdKeyboardArrowRight size={28}/>
      </Link>

    </Box>
  ));
}
