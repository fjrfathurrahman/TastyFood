import TableElement from "@/components/ui/Table";
import HeaderDashboard from "@/components/pages/dashboard/Header";
import { useGetDataNoStore } from "@/lib/hook/useGetData";

const columnGallery = [
  { key: "id", label: "ID" },
  { key: "title", label: "Title" },
  { key: "category", label: "Category" },
  { key: "image", label: "Image" },
  { key: "description", label: "Description" },
]

export default async function DashboardPage(): Promise<JSX.Element> {
  const result = await useGetDataNoStore({url: process.env.NEXT_PUBLIC_GALLERY_URL || ''})

  return (
    <>
      <HeaderDashboard />
      <div className="p-6 rounded-2xl bg-white shadow-lg">
        <TableElement column={columnGallery} data={result.data} />
      </div>
    </>
  );
}
