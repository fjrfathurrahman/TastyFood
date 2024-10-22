"use client";

import React from "react";
import FormatDate from "@/lib/utils/FormatDate";
import { Box } from "@/components/layout";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { Menus } from "@/resource";
import { Icons } from "@/resource/icons";
import clsx from "clsx";


export const Header = () => {
  const pathName = usePathname();

  return (
    <Box className="py-6 mb-8 border-b" flexbox={["flex", "justify-between", "items-center"]}>
      <div>
        <span className="font-bold block text-2xl md:text-3xl">Dashboard</span>
        <small>{FormatDate()}</small>
      </div>

      <div className="flex gap-1.5">
        <Button isIconOnly variant="light" size="sm">
          <Icons.MdNotificationsNone size={22} />
        </Button>
        <Button isIconOnly variant="light" size="sm">
          <Icons.LuMoonStar size={20} />
        </Button>

        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Button isIconOnly variant="flat" color="primary" size="sm">
              <Icons.LuMenu size={20} />
            </Button>
          </DropdownTrigger>

          <DropdownMenu aria-label="Dropdown">
            <DropdownSection title="Menu Link" showDivider>
              {RenderItems(Menus.Menu, pathName)}
            </DropdownSection>

            <DropdownSection title="Service">
              {RenderItems(Menus.Service, pathName)}
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </div>
    </Box>
  );
};


const RenderItems = (data: { name: string, link: string, icon: React.ReactNode }[], pathName: string,) => data.map((item) => (
  <DropdownItem
      key={item.name}
      href={item.link}
      variant={item.name === 'Logout' ? "solid" : "faded"}
      className={clsx(item.name === 'Logout' ? "text-danger" : pathName === item.link ? "text-primary" : "text-default-600")}
      color={pathName === item.link ? "primary" : item.name === 'Logout' ? "danger" : "default"}
      startContent={item.icon}
    >
    {item.name}
  </DropdownItem>
))