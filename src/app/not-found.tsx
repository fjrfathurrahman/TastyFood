'use client';

import { Button } from "@/components/common";
import { Layout, List } from "@/components/layout";
import randomNumberText from "@/lib/utils/RandomNumber";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFoundPage() {
  const router = useRouter();
  const [num404, setNum404] = useState("0000");

  useEffect(() => {
    randomNumberText("404", setNum404);
  }, []);

  return (
    <Layout.Container flexbox={['flex', 'justify-center']} sizing={'h-screen'}>
      {num404 !== "0000" && (
        <List className="items-center justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black font-monospace font-bold opacity-100">{`{ error: ${num404} }`}</h1>
          <div className="my-6 w-3/4 text-center space-y-3">
            <h4 className="font-bold">Oops! Halaman Tidak Ditemukan</h4>
            <p>
              Kami tidak bisa menemukan halaman yang Anda cari. Coba hubungi tim dukungan kami untuk bantuan.
            </p>
          </div>
          <List direction="horizontal">
            <Button onClick={() => router.back()} variant="outlined">Kembali</Button>
            <Button onClick={() => router.push('/')}>Home</Button>
          </List>
        </List>
      )}
    </Layout.Container>
  );
}
