import { Box, List } from "@/components/layout";
import useGetCompany from "@/lib/hooks/company/useGetCompany";
import useGetGallery from "@/lib/hooks/gallery/useGetGallery";
import useGetNews from "@/lib/hooks/news/useGetNews";
import { CgDatabase } from "react-icons/cg";
import { GrGallery } from "react-icons/gr";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { IoNewspaperOutline } from "react-icons/io5";

export const AmountData = () => {
  const { data: galleryCount } = useGetGallery();
  const { data: newsCount } = useGetNews();
  const { data: companyCount } = useGetCompany();

  return (
    <>
      <List className="border-b pb-2.5 items-center" direction="horizontal">
        <CgDatabase size={20} />
        <p>Overview</p>
      </List>
      <Box flexbox={['flex', 'gap-4']}>
        <Box className="border border-violet-500 *:text-violet-500 dark:*:text-violet-500 bg-violet-50 *:font-semibold rounded-full w-max h-10 px-4 flex justify-center items-center gap-2">
          <GrGallery />
          <p className="text-sm flex gap-2">{galleryCount?.length?? 0} <span className="hidden sm:block ">Data Galeri</span></p>
        </Box>
        <Box className="border border-green-500 *:text-green-500 dark:*:text-green-500 bg-green-50 font-semibold rounded-full w-max h-10 px-4 flex justify-center items-center gap-2">
          <IoNewspaperOutline/>
          <p className="text-sm flex gap-2">{newsCount?.length?? 0} <span className="hidden sm:block">Data Berita</span></p>
        </Box>
        <Box className="border border-red-500 *:text-red-500 dark:*:text-red-500 bg-red-50 font-semibold rounded-full w-max h-10 px-4 flex justify-center items-center gap-2">
          <HiOutlineOfficeBuilding/>
          <p className="text-sm flex gap-2">{companyCount?.length?? 0} <span className="hidden sm:block">Data Perusahaan</span></p>
        </Box>
      </Box>
    </>
  );
};

// Tambhkan Jumlah Data
