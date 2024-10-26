"use client";

import useGetNews from "@/lib/hooks/news/useGetNews";
import { RowTableProps } from "@/lib/types/elements";
import { getKeyValue } from "@/lib/utils/GetKeyValue";
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { List } from "@/components/layout";
import { IoMdAdd } from "react-icons/io";
import Link from "next/link";
import useDeleteNews from "@/lib/hooks/news/useDeleteNews";

const columns = [
  { key: "number", label: "No." },
  { key: "title", label: "Judul" },
  { key: "image", label: "Gambar" },
  { key: "action", label: "Aksi" },
];

export default function TableBerita() {
  const { data, isLoading, isError } = useGetNews();

  const feedbackText = isLoading ? "Loading..." : isError ? "Terjadi kesalahan pada server" : data.length === 0 ? "Data tidak ditemukan" : "";


  return (
    <>
      <List>
        <h2>Table Berita</h2>
        <p>
          Mengelola semua koleksi berita yang ada dengan
          <span className="text-primary underline font-semibold">{" "}total {data?.length} item{" "}</span>
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
  const { mutate: deleteGallery } = useDeleteNews();

  const styleBase: React.CSSProperties = {
    textOverflow: "ellipsis",
    textWrap: "wrap",
  }

  return data.map((item: RowTableProps, index: number) => (
    <TableRow key={item.id}>
      {(columnKey) => (
        <TableCell style={{...styleBase, width: columnKey === "image" ? "300px" : "auto" }}>
          {getKeyValue( item, columnKey as string, index, "Berita", deleteGallery) as React.ReactNode}
        </TableCell>
      )}
    </TableRow>
  ));
}
