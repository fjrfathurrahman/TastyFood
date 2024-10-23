'use client';

import { Box } from "@/components/layout";
import { NewsItem } from "@/lib/types/response";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Skeleton } from "@nextui-org/react";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import FormatDate from "@/lib/utils/FormatDate";
import Image from "next/image";
import Link from "next/link";
import useGetNews from "@/lib/hooks/berita/useGetNews";
import Dompurify from "dompurify";
import { Loader } from "@/components/loader";

export default function DetailBerita({ params }: { params: { id: string } }) {
  const { data, isLoading } = useGetNews(params.id);

  return (
    <Box flexbox={["flex", "flex-col", "gap-4"]}>

      {isLoading ? Loader.DetailLoader() : data ? RenderGallery({ data }) : (
        <p>Galeri Tidak Ditemukan</p>
      )}
    </Box>
  );
}

function RenderGallery({ data }: { data: NewsItem }) {
  return (
    <>
      <div className="relative w-full min-h-72 shadow-lg rounded-xl">
        <Image src={data?.image as string} alt="image" className="w-full h-full rounded-xl object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={100} fill />
      </div>

      <div className="pb-4 border-b">
        <div className="flex justify-between items-center">
          <h4 className="font-bold">{data?.title}</h4>
          {RenderDropdown(data?.id)}
        </div>
        <small>Dibuat: {FormatDate(data?.created_at)}</small>
        <br />
        <small>Terakhir diubah: {FormatDate(data?.updated_at)}</small>
      </div>

      <div>
        <p className="text-lg">Ringkasan:</p>
        <p>{data?.excerpt}</p>
      </div>

      <div>
        <p>Content:</p>
        <div
          className="prose px-4 py-6 border rounded-xl mt-4"
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(data?.content as string),
          }}
        />
      </div>
    </>
  );
}

function RenderDropdown(id: number) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <button>
          <IoEllipsisVerticalSharp />
        </button>
      </DropdownTrigger>

      <DropdownMenu aria-label="Static Actions">
        <DropdownItem textValue="edit" key="edit" color="primary">
          <Link href={`/dashboard/editBerita/${id}`} color="primary">
            Edit Item {id}
          </Link>
        </DropdownItem>
        <DropdownItem textValue="delete" key="delete" className="text-danger" color="danger" onClick={() => alert("delete item " + id)}>
          Delete Item {id}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}