import { BoxFlex, BoxGrid } from "@/components/common";
import { useGetDataNoStore } from "@/lib/hook/useGetData";
import { GlobalProps } from "@/lib/types/types";

const HeaderDashboard = async (): Promise<JSX.Element> => {
  const result = await useGetDataNoStore({
    url: process.env.NEXT_PUBLIC_GALLERY_URL || "",
  });

  return (
    <BoxGrid className="sm:grid-cols-2">
      <FragmentHeader data={result.data} text="Total Gallery" />
      <FragmentHeader data={result.data} text="Total News" />
    </BoxGrid>
  );
};

export default HeaderDashboard;

const FragmentHeader = ({ text = "Total Gallery", data, ...props}: GlobalProps & { data?: { length: number }; text?: string; icon?: React.ReactNode; }): JSX.Element => {
  return (
    <div className={`${props.className} my-auto h-14 p-3 text-center font-medium  text-white shadow-lg rounded-2xl bg-gradient-to-bl from-[#4dc9e6] to-[#210cae]`}>
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
