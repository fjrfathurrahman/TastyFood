import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Image } from "@nextui-org/react";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { RowTableProps } from "@/app/(ROOT)/(admin)/dashboard/(TABLES)/tableGaleri/page";
import Link from "next/link";

export function getKeyValue( item: RowTableProps, columnKey: string, index: number, handleDelete: (id: number) => void ) {

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
              <Link href={`/dashboard/detailGaleri/${item.id}`}>Detail Item {item.id}</Link>
            </DropdownItem>
            <DropdownItem textValue="edit" key="edit">
              <Link href={`/dashboard/editGaleri/${item.id}`}>Edit Item {item.id}</Link>
            </DropdownItem>
            <DropdownItem textValue="delete" key="delete" className="text-danger" color="danger" onClick={() => handleDelete(item.id)}>
              Delete Item {item.id}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );

    case "image":
      return item.image && <Image src={item.image} alt="image" className="rounded-xl bg-cover object-cover"/>

    default:
      return item[columnKey] ?? "-";
  }
}
