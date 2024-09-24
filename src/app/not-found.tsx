"use client";

import { BoxFlex, ButtonEl, ImageEl } from "@/components/common";
import { MainContainer } from "@/components/containers/MainContainer";
import { dImages } from "@/lib/data/data";

export default function notFound() {
  return (
    <MainContainer>
      <BoxFlex direction="flex-col" justify="justify-center" align="items-center">
        <ImageEl src={dImages.notPage} width="w-80" />
        <h1 className="text-center font-semibold italic text-xl mb-4">Oops! Halaman yang Anda cari tidak ditemukan</h1>
        <BoxFlex direction="flex-col" className="sm:flex-row">
          <ButtonEl text="Kembali ke Beranda" variant="primary" onClick={() => window.location.href = "/"} />
          <ButtonEl text="Refresh" variant="bordered" onClick={() => window.location.reload()} />
        </BoxFlex>
      </BoxFlex>
    </MainContainer>
  );
}