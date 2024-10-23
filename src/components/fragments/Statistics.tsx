import { HiOutlineChartBar } from "react-icons/hi2";
import { List } from "../layout";

export const Statistics = () => {
  return (
    <>
      <List className="border-b pb-2.5 items-center" direction="horizontal">
        <HiOutlineChartBar size={20} />
        <p>Statistics</p>
      </List>

      <div className="h-72 border rounded-xl flex justify-center items-center text-center">
        <p>Fitur belum tersedia, silahkan tunggu...</p>
      </div>
    </>
  );
};
