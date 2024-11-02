"use client";

import useGetGallery from "@/lib/hooks/gallery/useGetGallery";
import { getKeyValue } from "@/lib/utils/GetKeyValue";
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { List } from "@/components/layout";
import { IoMdAdd } from "react-icons/io";
import { RowTableProps } from "@/lib/types/elements";
import useDeleteGallery from "@/lib/hooks/gallery/useDeleteGallery";

const columns = [
  { key: "number", label: "No." },
  { key: "title", label: "Judul" },
  { key: "category", label: "Kategori" },
  { key: "image", label: "Gambar" },
  { key: "action", label: "Aksi" },
]

export default function TableGaleri() {
  const { data, isLoading, isError } = useGetGallery();

  const feedbackText = isLoading ? "Loading..." : isError ? "Terjadi kesalahan pada server" : data.length === 0 ? "Data tidak ditemukan" : "";

  return (
    <>

      <List>
        <h2>Table Galeri</h2>
          <p>Mengelola semua koleksi galeri yang ada dengan<span className="text-primary underline font-semibold">{" "}total {data?.length} item{" "}</span> dalam sistem. Anda dapat menambah, mengedit, atau menghapus data galeri sesuai kebutuhan langsung dari tabel ini untuk memastikan semua informasi tetap up-to-date.</p>
          <List direction="horizontal">
            <Button as='a' href="/dashboard/tambahGaleri" color="primary" startContent={<IoMdAdd size={24} />}>
              Buat Galeri Baru
            </Button>
          </List>
      </List>

      <Table aria-label="Table" className="min-w-full mt-12">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>

        <TableBody items={data as RowTableProps[]} emptyContent={feedbackText}>
          {RenderCell(data)}
        </TableBody>
      </Table>
    </>
  );
}

function RenderCell(data: RowTableProps[]) {
  const { mutate: deleteGallery } = useDeleteGallery();

  const styleBase: React.CSSProperties = {
    textOverflow: "ellipsis",
    textWrap: "wrap",
  }

  return data.map((item: RowTableProps, index: number) => (
    <TableRow key={item.id}>
      {(columnKey) => (
        <TableCell style={{ ...styleBase, width: columnKey === "image" ? "300px" : "auto" }}>
          {getKeyValue(item, columnKey as string, index, "Galeri", deleteGallery)}
        </TableCell>
      )}
    </TableRow>
  ));
}
