import { List } from "../layout";
import { RiListCheck3 } from "react-icons/ri";

export const Activity = () => {
  return (
    <>
      <List className="border-b pb-2.5 items-center" direction="horizontal">
        <RiListCheck3 size={20} />
        <p>Aktivitas Terakhir</p>
      </List>
      <div className="h-32 border-2 border-dashed border-zinc-700 dark:border-zinc-300 rounded-xl flex justify-center items-center text-center">
        <p>Fitur belum tersedia, silahkan tunggu...</p>
      </div>
    </>
  );
};
