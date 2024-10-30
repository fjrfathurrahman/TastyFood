import ListAnimation from "@/components/animations/ListAnimation";
import { Box, Layout } from "@/components/layout";
import { Images } from "@/resource";
import { Image } from "@nextui-org/react";

export const AboutUs = () => {
  return (
    <Layout.Section bg="bg-zinc-100" sizing={"h-3/4"}>
      <Layout.Container>
        <Box grid={["grid", "grid-cols-1", "lg:grid-cols-2"]}>
          <ListAnimation direction="vertical">
            <h4>Tasty Food</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              soluta saepe ipsum labore officiis illum corrupti nesciunt ducimus
              totam necessitatibus, iusto tempora dolor eveniet, omnis dicta
              voluptas! Doloribus incidunt laudantium iusto, id voluptatem
              harum. Optio, numquam. In quod cumque eius.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad ipsum
              iste itaque cupiditate maxime sit unde laudantium eligendi facere
              sed quasi animi, obcaecati beatae non provident voluptates
              suscipit hic est quia sunt dolorem molestias? Et, mollitia ullam?
              Laboriosam, quibusdam molestiae.
            </p>
          </ListAnimation>

          <Box flexbox={["justify-center", "gap-6"]} className="hidden lg:flex">
            {Images.about.slice(0, 2).map((item) => (
              <Image
                key={item.name}
                src={item.src.src}
                alt="image"
                height={370}
              />
            ))}
          </Box>
        </Box>
      </Layout.Container>
    </Layout.Section>
  );
};
