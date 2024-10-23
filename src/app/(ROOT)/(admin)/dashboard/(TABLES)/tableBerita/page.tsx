"use client";

import useGetNews from "@/lib/hooks/berita/useGetNews";
import { axiosInstance } from "@/lib/axios";
import { RowTableProps } from "@/lib/types/elements";
import { getKeyValue } from "@/lib/utils/GetKeyValue";
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { useMutation } from "react-query";
import { toast } from "sonner";
import { List } from "@/components/layout";
import { IoMdAdd } from "react-icons/io";
import Link from "next/link";

const columns = [
  { key: "number", label: "No." },
  { key: "title", label: "Judul" },
  { key: "image", label: "Gambar" },
  { key: "action", label: "Aksi" },
];

export default function TableBerita() {
  const { data, isLoading, isError } = useGetNews();

  return (
    <>
      <List>
        <h2>Table Berita</h2>
        <p>
          Mengelola semua koleksi berita yang ada dengan
          <span className="text-primary underline font-semibold">total {data?.length} item</span>
          dalam sistem. Anda dapat menambah, mengedit, atau menghapus data
          galeri sesuai kebutuhan langsung dari tabel ini untuk memastikan semua
          informasi tetap up-to-date.
        </p>
        <List direction="horizontal">
          <Button
            variant="shadow"
            color="primary"
            startContent={<IoMdAdd size={24} />}
          >
            <Link href="/dashboard/tambahBerita">Buat Berita Baru</Link>
          </Button>
        </List>
      </List>

      <Table aria-label="Table" className="min-w-full mt-12">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>

        <TableBody items={data as RowTableProps[]} 
          emptyContent={ isLoading ? "Loading..." : isError ? "Terjadi kesalahan pada server" : data.length === 0 ? "Data tidak ditemukan" : ""}
        >
          {RenderData({ data })}
        </TableBody>
      </Table>
    </>
  );
}

function RenderData(props: { data: RowTableProps[] }) {
  const { refetch } = useGetNews();

  const { mutate: deleteGallery } = useMutation({
    mutationFn: async (id: number) => {
      const galleryResponse = await axiosInstance.delete("/news/" + id);
      return galleryResponse;
    },
    onSuccess: () => {
      toast.success("Galeri Berhasil dihapus");
      refetch();
    },
    onError: (error) => {
      console.log(error);
      toast.error("Terjadi kesalahan, silahkan coba lagi");
    },
  });

  return props.data.map((item: RowTableProps, index: number) => (
    <TableRow key={item.id}>
      {(columnKey) => (
        <TableCell
          style={{
            textOverflow: "ellipsis",
            textWrap: "wrap",
            width: columnKey === "image" ? "300px" : "auto",
          }}
        >
          {
            getKeyValue( item, columnKey as string, index, "Berita", deleteGallery) as React.ReactNode
          }
        </TableCell>
      )}
    </TableRow>
  ));
}
