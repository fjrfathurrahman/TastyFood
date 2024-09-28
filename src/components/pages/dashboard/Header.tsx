import { BoxFlex, BoxGrid } from "@/components/containers";
import { useGetDataNoStore } from "@/lib/hook/useGetData";
import { GlobalProps } from "@/lib/types/types";

const HeaderDashboard = async (): Promise<JSX.Element> => {

  const resultGallery = await useGetDataNoStore({
    url: process.env.NEXT_PUBLIC_GALLERY_URL || "",
  });

  const resultCompany = await useGetDataNoStore({
    url: process.env.NEXT_PUBLIC_COMPANY_URL || "",
  });

  return (
    <BoxGrid className="sm:grid-cols-3">
      <FragmentHeader data={resultGallery.data} text="Total Data Gallery" className="bg-gradient-to-bl from-[#3CDCFF] to-[#310E50]" />
      <FragmentHeader data={resultGallery.data} text="Total Data News" className="bg-gradient-to-bl from-[#62D3FF] to-[#6D21D9]" />
      <FragmentHeader data={resultCompany.data} text="Total Data Company" className="bg-gradient-to-bl from-[#3CDCFF] to-[#310E50]" />
    </BoxGrid>
  );
};

export default HeaderDashboard;

const FragmentHeader = ({ text = "Total Gallery", data, ...props}: GlobalProps & { data?: { length: number }; text?: string; icon?: React.ReactNode; }): JSX.Element => {
  return (
    <div className={`${props.className} my-auto h-14 p-3 text-center font-medium  text-white shadow-lg rounded-2xl`}>
      <BoxFlex justify="justify-center" align="items-center">
        {props.children}
        {data && data.length ? (
          <>
            <span className="text-2xl font-semibold">{data.length}</span>
            <h3>{text}</h3>
          </>
        ) : null}
      </BoxFlex>
    </div>
  );
};
