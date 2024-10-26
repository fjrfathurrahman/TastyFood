import { Box, Layout, List } from "@/components/layout";
import { Image } from "@nextui-org/react";

export const Featured = () => {
  return (
    <Layout.Section bg="bg-zinc-100">
      <Layout.Container>
        <Box className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-x-8">
          <Image
            src="https://dummyimage.com/1000x1000/000/fff"
            alt="image"
            className="w-full h-72 lg:h-full"
          />
          <List direction="vertical" className="col-span-2">
            <h3>JUDUL BERITA</h3>
            <small>Dibuat: 1 Januari 2022</small>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              quas ad deleniti exercitationem ipsum ut similique, aperiam neque
              consequatur omnis, magnam natus. Quia, voluptatem vero. Ex,
              voluptatibus numquam sapiente tempora reprehenderit ipsam iusto
              maiores sunt alias. Explicabo quidem cumque necessitatibus quae
              veritatis temporibus tempora molestiae
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquid reiciendis reprehenderit blanditiis quasi nihil dolorem at molestiae nisi rerum dignissimos facere rem id laboriosam temporibus impedit consequuntur nobis beatae, neque amet. Laborum itaque eveniet ab labore veritatis architecto similique exercitationem, corporis sed, perspiciatis alias ducimus, at nam eaque iusto.
            </p>
          </List>
        </Box>
      </Layout.Container>
    </Layout.Section>
  );
};
