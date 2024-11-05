"use client";

import { Box, Layout, List } from "@/components/layout";
import { Button, Image, Skeleton } from "@nextui-org/react";
import ImageUtama from "@/app/public/banner.png";
import useGetNews from "@/lib/hooks/news/useGetNews";
import formatDate from "@/lib/utils/FormatDate";
import { NewsItem } from "@/lib/types/response";

export const Featured = () => {
  const { status } = useGetNews();
  const { data } = useGetNews();

  const newsPrimary = data.find(
    (news: NewsItem) => news.category === "Berita Utama"
  );


  return (
    <Layout.Section bg="bg-zinc-100">
      <Layout.Container sizing="h-max">
        <Box className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-x-8">
          {status === "loading" ? Loader() : RenderDetail(newsPrimary)}
        </Box>
      </Layout.Container>
    </Layout.Section>
  );
};

const RenderDetail = (newsPrimary: NewsItem) => {

  return (
    <>
      <Image src={newsPrimary?.image?.toString() ?? ImageUtama.src} alt="image" className="w-full h-72 lg:h-full object-cover origin-center"/>
      <List direction="vertical" className="col-span-2">
        <div>
          <h3 className="line-clamp-1">{newsPrimary?.title ?? "Judul Berita Utama"}</h3>
          <small>Dibuat: {formatDate(newsPrimary?.created_at ?? "-")}</small>
        </div>
        <p className="line-clamp-5">{newsPrimary.excerpt ??"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquid reiciendis reprehenderit blanditiis quasi nihil dolorem at molestiae nisi rerum dignissimos facere rem id laboriosam temporibus impedit consequuntur nobis beatae, neque amet. Laborum itaque eveniet ab labore veritatis architecto similique exercitationem, corporis sed, perspiciatis alias ducimus, at nam eaque iusto."}</p>

        <Button as="a" href={`/berita/detail/${newsPrimary?.id}`} color="primary" className="font-semibold w-max mt-6">Baca Selengkapnya</Button>
      </List>
    </>
  );
};

const Loader = () => {
  return (
    <>
      <Skeleton className="w-full h-72 lg:h-80 bg-default-300 rounded-2xl" />
      <List direction="vertical" className="col-span-2">
        <Skeleton className="w-3/4 h-8 bg-default-300 rounded-2xl" />
        <Skeleton className="w-2/5 h-8 bg-default-300 rounded-2xl" />
        <Skeleton className="mt-2 w-full h-16 bg-default-300 rounded-2xl" />
      </List>
    </>
  );
};
