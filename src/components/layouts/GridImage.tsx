export const GridImage = (): JSX.Element => {
  return (
    <div className="w-full hidden lg:grid grid-cols-3 grid-rows-3 gap-2.5 *:rounded-3xl">
      <div className="col-start-1 col-end-2 row-start-1 row-end-3 bg-gray-300"></div>
      <div className="col-start-2 col-end-4 row-start-1 row-end-2 bg-gray-400"></div>
      <div className="col-start-2 col-end-3 row-start-2 row-end-3 bg-gray-500"></div>
      <div className="col-start-3 col-end-4 row-start-2 row-end-3 bg-gray-600"></div>
      <div className="col-start-1 col-end-3 row-start-3 row-end-4 bg-gray-700"></div>
      <div className="col-start-3 col-end-4 row-start-3 row-end-4 bg-gray-800"></div>
    </div>
  );
};
