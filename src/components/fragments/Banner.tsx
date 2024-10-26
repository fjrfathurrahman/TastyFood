import { usePathname } from "next/navigation"
import { Layout } from "../layout"
import banner from "@/app/public/banner.png"
import Image from "next/image";

export const Banner = () => {
  const pathName = usePathname();

  // Cari item menu berdasarkan pathName
  const currentMenu = menu.find(item => item.link === pathName);

  return (
    <Layout.Section className={`${pathName === '/' ? 'hidden' : 'block'}`}>
      <div className="absolute top-0 left-0 right-0 z-50">
        <Layout.Container spacing={['py-28', 'md:py-36']}>
          <h3 className="text-white uppercase font-bold">
            {currentMenu ? `${currentMenu.name} KAMI` : null}
          </h3>
        </Layout.Container>
      </div>
      <Image 
        src={banner} 
        alt="image" 
        quality={50} 
        className="w-full h-52 sm:h-56 md:h-72 brightness-90 object-cover" 
      />
    </Layout.Section>
  );
};

const menu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Tentang",
    link: "/tentang",
  },
  {
    name: "Galeri",
    link: "/galeri",
  },
  {
    name: "Berita",
    link: "/berita",
  },
  {
    name: "Kontak",
    link: "/kontak",
  },
];