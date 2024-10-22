"use client";

import { useState, useEffect } from 'react';

/**
 * * Hook untuk memperbarui state breakpoints tailwind berdasarkan ukuran layar yang berbeda-beda.
 * Hook ini akan memperbarui state breakpoints saat komponen berubah atau di-resize.
 *
 * @returns Objek yang berisi state breakpoints
 */
export default function Breakpoints() {
  const [breakpoints, setBreakpoints] = useState({
    isLessThanSmall: false,
    isSmall: false,
    isMedium: false,
    isLarge: false,
    isXLarge: false,
  });

  // Gunakan hook useEffect untuk memperbarui breakpoints saat berubah
  useEffect(() => {
    // Definisikan fungsi untuk memperbarui breakpoints berdasarkan ukuran window saat ini
    const updateBreakpoints = () => {
      // Gunakan window.matchMedia untuk memeriksa apakah ukuran window saat ini cocok dengan setiap breakpoint
      setBreakpoints({
        isLessThanSmall: window.matchMedia('(max-width: 639px)').matches,
        isSmall: window.matchMedia('(min-width: 640px) and (max-width: 767px)').matches,
        isMedium: window.matchMedia('(min-width: 768px) and (max-width: 1023px)').matches,
        isLarge: window.matchMedia('(min-width: 1024px) and (max-width: 1279px)').matches,
        isXLarge: window.matchMedia('(min-width: 1280px)').matches,
      });
    };

    // Panggil fungsi updateBreakpoints secara awal
    updateBreakpoints();

    // Tambahkan event listener untuk memperbarui breakpoints saat window berubah
    window.addEventListener('resize', updateBreakpoints);

    // Return fungsi cleanup menghapus function updateBreakpoints
    return () => window.removeEventListener('resize', updateBreakpoints);
  }, []);

  // Return objek state breakpoints
  return breakpoints;
}
