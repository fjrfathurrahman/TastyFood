"use client";

import useGetGallery from "@/lib/hooks/gallery/useGetGallery";
import Link from "next/link";
import { axiosInstance } from "@/lib/axios";
import { getKeyValue } from "@/lib/utils/GetKeyValue";
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { useMutation } from "react-query";
import { List } from "@/components/layout";
import { IoMdAdd } from "react-icons/io";
import { RowTableProps } from "@/lib/types/elements";

const columns = [
  { key: "number", label: "No." },
  { key: "title", label: "Judul" },
  { key: "category", label: "Kategori" },
  { key: "image", label: "Gambar" },
  { key: "action", label: "Aksi" },
]

export default function TableGaleri() {
  const { data, isLoading, isError } = useGetGallery();

  return (
    <div>

      <List>
        <h2>Table Galeri</h2>
          <p>Mengelola semua koleksi galeri yang ada dengan <span className="text-primary underline font-semibold">total {data?.length} item</span> dalam sistem. Anda dapat menambah, mengedit, atau menghapus data galeri sesuai kebutuhan langsung dari tabel ini untuk memastikan semua informasi tetap up-to-date.</p>
          <List direction="horizontal">
            <Button variant="shadow" color="primary" startContent={<IoMdAdd size={24} />}>
              <Link href="/dashboard/tambahGaleri">Buat Galeri Baru</Link>
            </Button>
          </List>
      </List>

      <Table aria-label="Table" className="min-w-full mt-12">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>

        <TableBody
          items={data as RowTableProps[]}
          emptyContent={
            isLoading ? "Loading..." : isError ? "Terjadi kesalahan pada server" : data.length === 0 ? "Data tidak ditemukan" : ""
          }
        >
          {RenderData({data})}
        </TableBody>
      </Table>
    </div>
  );
}

function RenderData(props: { data: RowTableProps[] }) {
  const { refetch } = useGetGallery()

  const { mutate: deleteGallery } = useMutation({
    mutationFn: async (id: number) => {
      const galleryResponse = await axiosInstance.delete("/gallery/" + id);
      return galleryResponse;
    },
    onSuccess: () => {
      alert("Galeri Berhasil Dihapus");
      refetch();
    },
    onError: (error) => {
      alert(error);
    }
  });

  return props.data.map((item: RowTableProps, index: number) => (
    <TableRow key={item.id}>
      {(columnKey) => (
        <TableCell style={{ textOverflow: "ellipsis", textWrap: "nowrap", width: columnKey === "image" ? "300px" : "auto" }}>
          {getKeyValue(item, columnKey as string, index, deleteGallery) as React.ReactNode}
        </TableCell>
      )}
    </TableRow>
  ));
}
