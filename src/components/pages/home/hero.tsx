import { BoxFlex, BoxGrid, ButtonEl } from "@/components/common";
import { MainContainer } from "@/components/containers/MainContainer";
import { SectionLayout } from "@/components/containers/SectionLayout";

export const HeroSection = (): JSX.Element => {
  return (
    <SectionLayout bg="bg-gray-300">
      <MainContainer>
        <BoxGrid gridColumns="grid-cols-2">
          <BoxFlex direction="flex-col">
            <div className="text-7xl uppercase font-light">
              <h1>healthy</h1>
              <h1 className="font-bold">tasty food</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              impedit laudantium dolor laboriosam, dignissimos cum aperiam odit
              dicta consectetur quo accusantium omnis adipisci rerum at nesciunt
              odio error necessitatibus iusto nostrum sint provident amet
              itaque? Voluptates consequatur voluptatum porro exercitationem
              modi odio ex inventore vero sunt! Sequi facere, perferendis at
              soluta culpa temporibus mollitia fuga quasi rerum beatae quidem
              incidunt in quae nulla provident? Porro alias maxime tempora odio
              sapiente.
            </p>
            <ButtonEl text="LIHAT TENTANG KAMI" variant="primary" />
          </BoxFlex>
        </BoxGrid>
      </MainContainer>
    </SectionLayout>
  );
};
