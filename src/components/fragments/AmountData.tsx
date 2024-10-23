import { List } from "@/components/layout";
import { CgDatabase } from "react-icons/cg";

export const AmountData = () => {
  return (
    <>
      <List className="border-b pb-2.5 items-center" direction="horizontal">
        <CgDatabase size={20} />
        <p>Overview</p>
      </List>
    </>
  );
};
