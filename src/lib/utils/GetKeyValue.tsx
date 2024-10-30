import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import Link from "next/link";
import { RowTableProps } from "../types/elements";
import Image from "next/image";

export function getKeyValue( item: RowTableProps, columnKey: string, index: number, table: 'Berita' | 'Galeri', handleDelete: (id: number) => void ): React.ReactNode {

  switch (columnKey) {
    case "number":
      return index + 1;

    case "action":
      return (
        <Dropdown>
          <DropdownTrigger>
            <button className="w-full text-xl flex justify-center">
              <IoEllipsisVerticalSharp />
            </button>
          </DropdownTrigger>
          
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem textValue="detail" key="detail" color="primary" className="text-primary">
              <Link href={`/dashboard/detail${table}/${item.id}`}>Detail Item {item.id}</Link>
            </DropdownItem>
            <DropdownItem textValue="edit" key="edit">
              <Link href={`/dashboard/edit${table}/${item.id}`}>Edit Item {item.id}</Link>
            </DropdownItem>
            <DropdownItem textValue="delete" key="delete" className="text-danger" color="danger" onClick={() => handleDelete(item.id)}>
              Delete Item {item.id}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );

    case "image":
      return item.image && (
        <div className="relative w-full h-12 md:h-72 shadow-lg rounded-xl">
          <Image src={item.image.toString()} alt="image" className="w-auto h-auto rounded-xl object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  fill />
        </div>
      )

    default:
      return item[columnKey]  as React.ReactNode ?? "-";
  }
}
