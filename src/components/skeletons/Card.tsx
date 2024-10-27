import { Card, CardBody, CardFooter, CardHeader, Skeleton } from "@nextui-org/react"

export const CardNews = () => {
  return (
    <Card className="h-max">
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
  )
}


export const Loaders = { CardNews }