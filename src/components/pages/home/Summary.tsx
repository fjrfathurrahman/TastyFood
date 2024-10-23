import { Layout, List } from "@/components/layout";

export const Summary = () => {
  return (
    <Layout.Container sizing={"h-max"}>
      <List className="items-center w-full sm:w-2/3 mx-auto text-center">
        <h3>TENTANG KAMI</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dicta
          aliquam impedit est eos beatae enim. Minima similique adipisci ea
          nostrum. Incidunt qui dolore repellat iure. Quae, iusto ut aliquam
          modi omnis, quo optio nostrum recusandae eos beatae delectus natus.
        </p>
        <div className="h-0.5 bg-black w-32 mt-6" />
      </List>
    </Layout.Container>
  );
};
