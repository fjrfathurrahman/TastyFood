import { Skeleton } from "@nextui-org/react";

export default function GalleryLoader() {
  return [1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
    <Skeleton key={index} className="rounded-xl">
      <div className="w-full h-44 sm:h-52 md:h-64 rounded-xl bg-default-700" />
    </Skeleton>
  ));
}

function DetailLoader() {
  return (
    <div className="w-full space-y-5 p-4">
      <Skeleton className="rounded-lg">
        <div className="h-32 sm:h-48 md:h-72 rounded-lg bg-default-500"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-4 sm:h-5 md:h-6 w-3/5 rounded-lg bg-default-500"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-4 sm:h-5 md:h-6 w-4/5 rounded-lg bg-default-500"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-4 sm:h-5 md:h-6 w-2/5 rounded-lg bg-default-500"></div>
        </Skeleton>
      </div>
    </div>
  );
}

export const Loader = { GalleryLoader, DetailLoader };
