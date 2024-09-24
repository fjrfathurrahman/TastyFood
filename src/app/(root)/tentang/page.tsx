import { BoxFlex, BoxGrid, TittleEl, ImageEl } from "@/components/common";
import { MainContainer } from "@/components/containers/MainContainer";
import { SectionLayout } from "@/components/containers/SectionLayout";
import { dImages } from "@/lib/data/data";

export default function TentangPage() {
  return (
    <>
      <AboutComponent />
      <VisiMisiComponent />
    </>
  );
}

const AboutComponent = (): JSX.Element => {

  return (
    <SectionLayout bg="bg-gray-200">
      <MainContainer>
        <BoxGrid className="lg:grid-cols-2" gap="gap-12">
          <div>
            <TittleEl text="TASTY FOOD" />
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which dont look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isnt anything embarrassing hidden in the
              middle of text. All the Lorem Ipsum generators on the Internet
              tend to repeat predefined chunks as necessary, making this the
              first true generator on the Internet. It uses a dictionary of over
              200 Latin words,
            </p>
          </div>
          <BoxFlex justify="justify-center" className="hidden lg:flex">
            {dImages.about.slice(0, 2).map((item, index) => (
              <ImageEl src={item.image} key={index} />
            ))}
          </BoxFlex>
        </BoxGrid>
      </MainContainer>
    </SectionLayout>
  );
};

const VisiMisiComponent = (): JSX.Element => {

  return (
    <MainContainer>
      <BoxGrid className="lg:grid-cols-2" gap="gap-12">
        <BoxFlex justify="justify-center" className="hidden lg:flex">
          {dImages.about.slice(2, 4).map((item, index) => (
            <ImageEl src={item.image} key={index} />
          ))}
        </BoxFlex>
        <div>
          <TittleEl text="VISI" />
          <p>
            lorem consectetur ac. Etiam eleifend non enim nec bibendum. Sed
            egestas pellentesque elit id gravida. Nunc non lorem ac urna
            sollicitudin tristique. Mauris consectetur nulla vel ligula
            tristique finibus. Donec quis lorem a nibh dictum sollicitudin.
            Integer molestie ante condimentum, vestibulum leo sit amet, congue
            nisi. Etiam convallis lorem quis felis congue, et pulvinar nunc
            facilisis. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Suspendisse facilisis tincidunt
            fermentum. Sed gravida egestas mattis. Curabitur a aliquam erat. Nam
            vel elementum eros.
          </p>
        </div>
        <div>
          <TittleEl text="MISI" />
          <p>
            lorem consectetur ac. Etiam eleifend non enim nec bibendum. Sed
            egestas pellentesque elit id gravida. Nunc non lorem ac urna
            sollicitudin tristique. Mauris consectetur nulla vel ligula
            tristique finibus. Donec quis lorem a nibh dictum sollicitudin.
            Integer molestie ante condimentum, vestibulum leo sit amet, congue
            nisi. Etiam convallis lorem quis felis congue, et pulvinar nunc
            facilisis. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Suspendisse facilisis tincidunt
            fermentum. Sed gravida egestas mattis. Curabitur a aliquam erat. Nam
            vel elementum eros.
          </p>
        </div>
        <BoxFlex justify="justify-center" className="hidden md:flex">
          <ImageEl src={dImages.about[4].image} height="h-72" />
        </BoxFlex>
      </BoxGrid>
    </MainContainer>
  );
};
