import { useState, useEffect } from 'react';

// Hook untuk mendeteksi media query dengan breakpoints Tailwindcss
function useBreakpoints() {
  const [breakpoints, setBreakpoints] = useState({
    isLessThanSmall: false,
    isSmall: false,
    isMedium: false,
    isLarge: false,
    isXLarge: false,
  });

  useEffect(() => {
    // function untuk memperbarui state breakpoints
    const updateBreakpoints = () => {
      setBreakpoints({
        isLessThanSmall: window.matchMedia('(max-width: 639px)').matches,
        isSmall: window.matchMedia('(min-width: 640px) and (max-width: 767px)').matches,
        isMedium: window.matchMedia('(min-width: 768px) and (max-width: 1023px)').matches,
        isLarge: window.matchMedia('(min-width: 1024px) and (max-width: 1279px)').matches,
        isXLarge: window.matchMedia('(min-width: 1280px)').matches,
      });
    };

    // Menjalankan fungsi update saat komponen pertama kali dirender
    updateBreakpoints();

    // Menambahkan event listener untuk perubahan ukuran jendela
    window.addEventListener('resize', updateBreakpoints);

    // Membersihkan event listener saat komponen di-unmount
    return () => window.removeEventListener('resize', updateBreakpoints);
  }, []);

  return breakpoints; 
}

export default useBreakpoints;
