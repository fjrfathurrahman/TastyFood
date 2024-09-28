"use client";

import { PropsTable } from "@/lib/types/types";
import { Image, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";

/**
 * * Menghasilkan JSX.Element, jika ditemukan gambar dengan ekstensi .jpg, .jpeg, atau .png maka akan ditampilkan Image component. // dibantu AI
 * 
 * @param {Object} item - The object data.
 * @param {string} columnKey - The key of the column.
 * @returns {JSX.Element | string | number} return the JSX.Element or string.
 */
const getKeyValue = (item: { [key: string]: string | number }, columnKey: string): JSX.Element | string | number => {
  const value = item[columnKey];

  const isImage = typeof value === 'string' && (value.endsWith('.jpg') || value.endsWith('.jpeg') || value.endsWith('.png'));

  if (isImage) {
    return (
      <div className="w-max">
        <Image src={value} alt={columnKey} className="w-full h-24" />
      </div>
    )
  }

  return value || '-';
};

const TableElement = ({ column, data }: PropsTable) => {
  if (!column || !data) return null;

  return (
      <Table aria-label="Example table with static content" color={"primary"} selectionMode="single" defaultSelectedKeys={["2"]} >
        <TableHeader columns={column}>
          {(col) => <TableColumn key={col.key}>{col.label}</TableColumn>}
        </TableHeader>
        <TableBody items={data}>
          {(item) => (
            <TableRow key={item.id}>
              {column.map((col) => (
                <TableCell key={col.key} style={{ whiteSpace: 'nowrap', overflow: 'scroll', textOverflow: 'ellipsis', width: '200px' }}>
                  {getKeyValue(item, col.key)}
                </TableCell>
              ))}
            </TableRow>
          )}
        </TableBody>
      </Table>
  );
};

export default TableElement;
