"use client";

import { Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { NavMobile } from "../fragments/NavMobile";
import { Box, Layout } from "@/components/layout";
import clsx from "clsx";
import Breakpoints from "@/lib/utils/Breakpoints";
import ListAnimation from "../animations/ListAnimation";

const Navigation = () => {
  const pathname = usePathname();
  const { isXLarge, isLarge, isMedium, isLessThanSmall, isSmall } =
    Breakpoints();
  const active = "underline decoration-wavy underline-offset-4";
  const textColor = pathname === "/" ? "text-black" : "text-white";

  return (
    <Layout.Container
      sizing={"h-max"}
      spacing={["py-8"]}
      className="absolute top-0 left-0 right-0 z-50 bg-transparent"
    >
      <Box className="flex items-center justify-between lg:justify-start lg:gap-24">
        <div>
          {/* Title color changes based on pathname */}
          <span className={`text-2xl sm:text-3xl font-bold ${textColor}`}>
            TASTY FOOD
          </span>
        </div>

        {isXLarge || isLarge || isMedium ? (
          <ListAnimation direction="horizontal" className={`${textColor}`}>
            {Menu.slice(0, 5).map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className={clsx("font-medium text-lg", pathname === item.link ? active : "", textColor)}
              >
                {item.name}
              </Link>
            ))}
          </ListAnimation>
        ) : isLessThanSmall || isSmall ? (
          NavMobile(Menu)
        ) : null}
      </Box>
    </Layout.Container>
  );
};

export default Navigation;

const Menu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Tentang",
    link: "/tentang",
  },
  {
    name: "Galeri",
    link: "/galeri",
  },
  {
    name: "Berita",
    link: "/berita",
  },
  {
    name: "Kontak",
    link: "/kontak",
  },
  {
    name: "Dashboard",
    link: "/dashboard",
  },
];