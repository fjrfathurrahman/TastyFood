import { TittleEl } from "@/components/common";
import { BoxFlex, MainContainer } from "@/components/containers";

export const SummarySection = (): JSX.Element => {
  return (
    <MainContainer>
      <div>
        <BoxFlex
          className="w-full md:w-3/4 mx-auto text-center"
          direction="flex-col"
          justify="justify-center"
          align="items-center"
        >
          <TittleEl text="Tentang Kami" paddingY="py-0" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            fugit ea, officia placeat, necessitatibus earum a debitis nihil
            provident, voluptatibus quis sint deleniti rem neque? Ex aspernatur
            sapiente nihil consequuntur cupiditate? Ex laudantium nemo dicta
            laborum eos amet sed ratione.
          </p>
          <div className="w-1/3 lg:w-1/5 h-1 bg-black" />
        </BoxFlex>
      </div>
    </MainContainer>
  );
};
