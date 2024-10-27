import { NewsItem } from "@/lib/types/response";
import { Box } from "../layout";
import Image from "next/image";
import formatDate from "@/lib/utils/FormatDate";
import { Skeleton } from "@nextui-org/react";

interface DetailNewsProps extends React.PropsWithChildren {
  data?: NewsItem;
  isLoading?: boolean;
}

export const DetailNews = ({ children, data, isLoading }: DetailNewsProps) => {
  return (
    <Box className="grid grid-cols-1 lg:grid-cols-6 xl:grid-cols-5 gap-12">
      {isLoading ? (
        DetailNewsLoader()
      ) : (
        <>
          <div className="col-span-3 xl:col-span-2">
            <div className="relative w-full h-72 rounded-xl col-span-2">
              <Image
                src={data?.image?.toString() ?? ""}
                alt="Image"
                sizes="100vw, 100vh"
                className="w-full h-full object-cover rounded-xl"
                fill
              />
            </div>
          </div>

          <div className="space-y-6 col-span-3">
            <div>
              <h3>{data?.title}</h3>
              <small>Dibuat: {formatDate(data?.created_at)}</small>
            </div>
            <p className="text-small">{data?.excerpt}</p>
          </div>

          <div className="col-span-3 xl:col-span-2 bg-zinc-100/70 rounded-xl">
            <div
              dangerouslySetInnerHTML={{ __html: data?.content as string }}
              className="prose p-4 tiptap h-max"
            />
          </div>
        </>
      )}

      {children}
    </Box>
  );
};

const Footer = ({ children }: { children: React.ReactNode }) => {
  return <div className="col-span-3 space-y-6 h-max">{children}</div>;
};

DetailNews.Footer = Footer;

function DetailNewsLoader() {
  return (
    <>
      <div className="col-span-3 xl:col-span-2">
        <Skeleton className="w-full h-72 rounded-lg default-700" />
      </div>

      <div className="space-y-6 col-span-3">
        <div>
          <Skeleton className="w-3/5 h-6 rounded-lg default-700" />
          <Skeleton className="w-2/5 h-6 mt-4 rounded-lg default-700" />
        </div>
        <Skeleton className="w-full h-32 rounded-lg default-700" />
      </div>

      <div className="col-span-3 xl:col-span-2  rounded-xl">
        <Skeleton className="w-3/5 h-8 rounded-lg default-700" />
        <Skeleton className="w-1/3 h-6 my-4 rounded-lg default-700" />
        <Skeleton className="w-full h-32 rounded-lg default-700" />
      </div>
    </>
  );
}
