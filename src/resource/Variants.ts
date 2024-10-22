export const imageVariants = {
  visible: (custom: number) => ({
    y: [30, -20, 30], 
    transition: {
      y: {
        repeat: Infinity,  
        duration: Math.random() * 4 + 2,  // Durasi acak antara 2 hingga 6 detik
        ease: "easeInOut",
        repeatType: "reverse",  // Membuat animasi bolak-balik
      },
      delay: custom * Math.random(),  // Menambahkan delay acak untuk setiap gambar
    },
  }),
};