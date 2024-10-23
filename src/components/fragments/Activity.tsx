import { List } from "../layout";
import { RiListCheck3 } from "react-icons/ri";

export const Activity = () => {
  return (
    <>
      <List className="border-b pb-2.5 items-center" direction="horizontal">
        <RiListCheck3 size={20} />
        <p>Aktivitas Terakhir</p>
      </List>
    </>
  );
};
