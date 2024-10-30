import ListAnimation from "@/components/animations/ListAnimation";
import { Box, Layout } from "@/components/layout";
import { Images } from "@/resource";
import { Image } from "@nextui-org/react";

export const VisiMisi = () => {
  return (
    <Layout.Container>
      <Box grid={["grid", "grid-cols-1", "md:grid-cols-2", "gap-8"]}>

        <Box flexbox={["justify-center", "gap-6"]} className="hidden lg:flex">
          {Images.about.slice(2, 4).map((item) => (
            <Image key={item.name} src={item.src.src} alt="image" height={370} className="object-cover"/>
          ))}
        </Box>

        <ListAnimation direction="vertical">
          <h4>VISI</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
            vero. Quos sint omnis architecto modi temporibus voluptas
            dignissimos repudiandae ipsum, sit tempore excepturi at ut!
            Veritatis atque incidunt laboriosam odit, fugiat ipsam molestias
            error numquam cum vero soluta, nobis excepturi neque praesentium
            veniam iusto tenetur! Eveniet animi iure iusto quam!
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores hic provident autem, aliquam corporis nisi voluptatem nesciunt illo a rem velit perspiciatis dicta? Perspiciatis ducimus repudiandae eos, animi laboriosam quo.</p>
        </ListAnimation>

        <ListAnimation direction="vertical">
          <h4>MISI</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            illum recusandae doloribus explicabo natus, ullam iure iusto quasi,
            possimus eligendi veniam quam praesentium illo id earum cumque aut
            eius molestiae ipsam rem nisi expedita. Ullam veniam nulla
            consequatur magnam nemo!
          </p>
        </ListAnimation>

        <Box>
          <Image src={Images.about[4].src.src} alt="image" className="md:hidden lg:block sm:w-[600px] sm:h-52 object-cover"/>
        </Box>

      </Box>
    </Layout.Container>
  )
}
