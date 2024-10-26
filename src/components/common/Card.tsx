import { NewsItem } from "@/lib/types/response";
import formatDate from "@/lib/utils/FormatDate";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

export const CardNews = (item: NewsItem) => {
  return (
    <Card key={item.id} isPressable>
      <CardHeader className="pb-0 px-4 flex-col items-start">
        <Link
          href={`/berita/detail/${item?.id}`}
          className="relative w-full h-52 rounded-xl"
        >
          <Image
            src={item?.image?.toString() ?? ""}
            alt="Image"
            sizes="100vw, 100vh"
            className="w-full h-full object-cover rounded-xl"
            fill
          />
        </Link>
      </CardHeader>
      <CardBody className="overflow-visible pt-2">
        <h4 className="font-bold text-large line-clamp-1">{item?.title}</h4>
        <small className="text-default-500">
          {formatDate(item?.created_at)}
        </small>
        <p className="text-small line-clamp-3 mt-2">{item?.excerpt}</p>
      </CardBody>
      <CardFooter>
        <Link
          href={`/berita/detail/${item?.id}`}
          className="text-primary font-medium flex items-center text-sm"
        >
          Baca Selengkapnya
          <MdKeyboardArrowRight size={28} />
        </Link>
      </CardFooter>
    </Card>
  );
};
