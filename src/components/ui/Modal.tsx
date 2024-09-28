"use client";

import { dIcons } from "@/lib/data/data";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Bersihkan efek ketika modal ditutup
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Function untuk menutup modal
  const closeModal = () => {
    router.back();
  };

  return (
    <div className="fixed w-full h-screen top-0 left-0 z-50 bg-black/50 text-white backdrop-blur-sm">
      <button
        onClick={closeModal}
        className="absolute left-1/2  z-50 bottom-16 p-3 bg-red-500 text-xl hover:bg-red-600 animate-bounce rounded-full"
      >
        {dIcons.close}
      </button>
      <div className="w-full absolute top-1/2 left-1/2 mx-auto px-4 -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </div>
  );
}
