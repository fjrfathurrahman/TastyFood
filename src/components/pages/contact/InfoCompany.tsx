'use client';

import useGetCompany from "@/lib/hooks/company/useGetCompany";
import { Box } from "@/components/layout";
import { Icons } from "@/resource/icons";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export const InfoCompany = () => {
  const { data, isLoading } = useGetCompany('1');

  if (isLoading) {
    return null;
  }

  return (
    <Box className="flex flex-col md:flex-row justify-center items-center gap-6 *:text-center">
      <div className="flex flex-col items-center gap-4 w-[350px]">
        <Button
          isIconOnly
          radius="full"
          startContent={<Icons.MdOutlineMailOutline />}
          className="bg-black text-white text-2xl md:text-3xl w-12 h-12 md:h-14 md:w-14"
        />
        <Link href={`mailto:${data?.email}`}>{data?.email}</Link>
      </div>
      <div className="flex flex-col items-center gap-4 w-[350px]">
        <Button
          isIconOnly
          radius="full"
          startContent={<Icons.MdOutlineLocalPhone />}
          className="bg-black text-white text-2xl md:text-3xl w-12 h-12 md:h-14 md:w-14"
        />
        <Link href={`tel:${data?.phone}`}>{data?.phone}</Link>
      </div>
      <div className="flex flex-col items-center gap-4 w-[350px]">
        <Button
          isIconOnly
          radius="full"
          startContent={<Icons.MdOutlineLocationOn />}
          className="bg-black text-white text-2xl md:text-3xl w-12 h-12 md:h-14 md:w-14"
        />
        <Link href={`https://maps.google.com/?q=${data?.address}`} target="_blank">{data?.address}</Link>
      </div>
    </Box>
  );
};
