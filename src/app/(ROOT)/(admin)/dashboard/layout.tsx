import FormatDate from "@/lib/utils/FormatDate";
import { Box } from "@/components/layout";
import { Button } from "@nextui-org/react";
import { LuMoonStar, LuMenu } from "react-icons/lu";
import { MdNotificationsNone } from "react-icons/md";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <section className="lg:w-[768px] mx-auto px-6 lg:px-0 pb-24">
     
      <Box className="py-6 mb-8 border-b" flexbox={['flex', 'justify-between', 'items-center']}>
        <div>
          <span className="font-bold block text-2xl md:text-3xl">Dashboard</span>
          <small>{FormatDate()}</small>
        </div>

        <div className="flex gap-1.5">
          <Button isIconOnly variant="light" size="sm">
            <MdNotificationsNone size={22} />
          </Button>
          <Button isIconOnly variant="light" size="sm">
            <LuMoonStar size={20} />
          </Button>
          <Button isIconOnly variant="bordered" size="sm" color="primary">
            <LuMenu size={20} />
            {/* Dropdown Menu untuk Link Page */}
          </Button>
        </div>
      </Box>

      {children}
    </section>
  );
}