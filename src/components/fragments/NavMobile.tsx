"use client";

import { DropdownItem } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Icons } from "@/resource/icons";
import {
  Button,
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

export const NavMobile = (Menu: { name: string; link: string }[]) => {
  const pathname = usePathname();

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Button isIconOnly variant="flat" size="sm">
          <Icons.LuMenu size={20} />
        </Button>
      </DropdownTrigger>

      <DropdownMenu aria-label="Dropdown">
        {Menu.map((item) => (
          <DropdownItem
            key={item.name}
            href={item.link}
            variant="light"
            className={clsx(pathname === item.link ? "text-primary" : "text-default-600")}
            color={pathname === item.link ? "primary" : "default"}
          >
            {item.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
