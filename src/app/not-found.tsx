"use client";

import { ButtonEl, ImageEl } from "@/components/common";
import { BoxFlex, MainContainer } from "@/components/containers";
import { dImages } from "@/lib/data/data";

export default function notFound() {
  return (
    <MainContainer height="h-screen">
      <BoxFlex direction="flex-col" justify="justify-center" align="items-center">
        <ImageEl src={dImages.notPage} width="w-80" shadow="shadow-none" />
        <h1 className="text-center font-semibold italic text-xl mb-4">Oops! Halaman yang Anda cari tidak ditemukan</h1>
        <BoxFlex direction="flex-row">
          <ButtonEl text="Beranda" variant="primary" onClick={() => window.location.href = "/"} />
          <ButtonEl text="Refresh" variant="bordered" onClick={() => window.location.reload()} />
        </BoxFlex>
      </BoxFlex>
    </MainContainer>
  );
}