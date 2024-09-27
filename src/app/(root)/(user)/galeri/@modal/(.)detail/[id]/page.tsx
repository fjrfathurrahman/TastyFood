import { BoxFlex, ImageEl } from "@/components/common";
import { useGetDataForceCache } from "@/lib/hook/useGetData";
import Modal from "@/components/layouts/Modal";
import { PropsDetail } from "@/lib/types/types";

export default async function DetailPage(props: { params: { id: string } }) {
  const { params } = props;
  const result: PropsDetail = await useGetDataForceCache({
    url: `http://localhost:8000/api/gallery/${params.id}`,
  });

  const { data } = result;

  if (data) {
    return (
      <Modal>
        <BoxFlex
          height="h-screen"
          direction="flex-col"
          justify="justify-center"
          align="items-center"
        >
          <div className="w-full text-center lg:w-4/5 lg:text-start">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              {data.title}
            </h1>
            <span>
              {data.category} - {data.created_at.substring(0, 10)}
            </span>
          </div>
          <ImageEl
            src={data.image}
            className="select-none w-full h-1/5 sm:h-2/4 lg:w-4/5 lg:h-[80%]"
          />
        </BoxFlex>
      </Modal>
    );
  }
}
