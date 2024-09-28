"use client";

import { BoxFlex, MainContainer } from "@/components/containers";
import { FormAuthentication, GridImage } from "@/components/import";
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