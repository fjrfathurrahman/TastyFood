import { Button } from "@/components/common";
import { Box, Layout, List } from "@/components/layout";

export const Hero = () => {
  return (
    <Layout.Section bg="bg-zinc-100">
      <Layout.Container>
        <Box className="grid lg:grid-cols-2">
          <List gap="gap-6">
            <div className="h-0.5 bg-black w-32"  />
            <div>
              <h1 className="font-light">
                HEALTHY <span className="font-bold block">TASTY FOOD</span>
              </h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              delectus libero doloremque, cumque ducimus ex dolorum beatae, ipsa
              itaque quis atque, quidem blanditiis inventore neque earum cum!
              Est debitis atque perferendis, natus velit ducimus vero a ullam
              adipisci nobis illo fuga unde amet.
            </p>
            <Button>TENTANG KAMI</Button>
          </List>
        </Box>
      </Layout.Container>
    </Layout.Section>
  );
};
