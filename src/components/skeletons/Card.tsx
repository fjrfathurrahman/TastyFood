import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Skeleton,
} from "@nextui-org/react";

export const CardNews = () => {
  return [1, 2, 3, 4].map((item) => (
    <Card key={item} className="h-max">
      <CardHeader>
        <Skeleton className="w-full h-52 rounded-xl" />
      </CardHeader>
      <CardBody>
        <Skeleton className="w-4/5 h-4 rounded-lg mb-2" />
        <Skeleton className="w-3/5 h-4 rounded-lg" />
      </CardBody>
      <CardFooter>
        <Skeleton className="w-2/4 h-4 rounded-lg" />
      </CardFooter>
    </Card>
  ));
};

const CardGallery = () => {
  return [1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
    <Skeleton key={index} className="rounded-xl">
      <div className="w-full h-44 sm:h-52 md:h-64 rounded-xl bg-default-700" />
    </Skeleton>
  ));
}

export const Loaders = { CardNews, CardGallery };
