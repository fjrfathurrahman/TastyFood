import { useState, useEffect } from 'react';

export default function ToggleTheme() {
  const [theme, setTheme] = useState<string>('light'); // Set default theme

  useEffect(() => {
    // Memuat tema dari localStorage ketika komponen pertama kali dimuat
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme); // Set theme from localStorage
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');

    if (theme === 'dark') {
      localStorage.setItem('theme', theme); // Simpan tema di localStorage jika tema 'dark'
    } else {
      localStorage.removeItem('theme'); // Hapus tema dari localStorage jika tema bukan 'dark'
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
}
