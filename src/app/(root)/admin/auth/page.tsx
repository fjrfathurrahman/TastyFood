"use client";

import { BoxFlex } from "@/components/common";
import { MainContainer } from "@/components/containers/MainContainer";
import { FormAuthentication } from "@/components/forms/FormAuth";
import { GridImage } from "@/components/items/GridImage";
import useBreakpoints from "@/lib/hook/useMediaQuery";


export default function AuthPage(): JSX.Element {
  const { isLarge, isXLarge } = useBreakpoints();

  return (
    <MainContainer height="h-screen" paddingY="py-24">
      <BoxFlex gap="gap-8" justify="justify-center">
        {isLarge || isXLarge ? <GridImage /> : null}
        <FormAuthentication />
      </BoxFlex>
    </MainContainer>
  );
}