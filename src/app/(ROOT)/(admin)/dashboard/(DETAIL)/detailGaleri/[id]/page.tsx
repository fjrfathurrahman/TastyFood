'use client';

import { Box } from "@/components/layout";
import useGetGallery from "@/lib/hooks/gallery/useGetGallery";
import { GalleryItem } from "@/lib/types/response";
import FormatDate from "@/lib/utils/FormatDate";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Skeleton,} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { IoEllipsisVerticalSharp } from "react-icons/io5";

export default function DetailGaleri({ params }: { params: { id: string } }) {
  const { data, isLoading } = useGetGallery(params.id);


  return (
    <Box flexbox={["flex", "flex-col", "gap-4"]}>

      {isLoading ? Loader() : data ? RenderGallery({ data }) : (
        <p>Galeri Tidak Ditemukan</p>
      )}
    </Box>
  );
}


function RenderGallery({ data }: { data: GalleryItem }) {
  return (
    <>
      <div className="relative w-full min-h-72 shadow-lg rounded-xl">
        <Image src={data?.image as string} alt="image" className="w-full h-full rounded-xl object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  fill  />
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
        <p className="font-bold">Deskripsi:</p>
        <p>{data?.description}</p>
      </div>
    </>
  );
}

function Loader() {
  return (
    <div className="w-full space-y-5 p-4">
      <Skeleton className="rounded-lg">
        <div className="h-32 sm:h-48 md:h-72 rounded-lg bg-default-500"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-4 sm:h-5 md:h-6 w-3/5 rounded-lg bg-default-500"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-4 sm:h-5 md:h-6 w-4/5 rounded-lg bg-default-500"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-4 sm:h-5 md:h-6 w-2/5 rounded-lg bg-default-500"></div>
        </Skeleton>
      </div>
    </div>
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
          <Link href={`/dashboard/editGaleri/${id}`} color="primary">
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
