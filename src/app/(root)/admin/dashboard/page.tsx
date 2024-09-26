"use client";

import { Table, TableBody, TableColumn, TableHeader } from "@nextui-org/react";

export default function DashboardPage(): JSX.Element {

  return (
    <div className="bg-white w-full p-6 mx-auto rounded-xl shadow-lg">

      <Table aria-label="Example empty table">
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>TITLE</TableColumn>
          <TableColumn>DESCRIPTION</TableColumn>
          <TableColumn>IMAGE</TableColumn>
          <TableColumn>CATEGORY</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"Data tidak ditemukan..."}>{[]}</TableBody>
      </Table>

    </div>
  );

}
