"use client";

import { BoxFlex } from "@/components/common";
import { MainContainer } from "@/components/containers/MainContainer";
import { FormAuthDesktop, FormAuthMobile } from "@/components/forms/FormAuth";
import useBreakpoints from "@/lib/hook/useMediaQuery";

// TODO : Form Auth bisa dibuat sederhana

export default function AuthPage(): JSX.Element {
  return (
    <MainContainer height="h-screen" paddingY="py-24">
      <BoxFlex gap="gap-8" justify="justify-center">
        <ImageGrid />
        <FormAuthentication/>
      </BoxFlex>
    </MainContainer>
  );
}

const ImageGrid = (): JSX.Element => {
  return (
    <div className="w-full hidden lg:grid grid-cols-3 grid-rows-3 gap-2.5 *:rounded-3xl">
      <div className="col-start-1 col-end-2 row-start-1 row-end-3 bg-gray-300"></div>
      <div className="col-start-2 col-end-4 row-start-1 row-end-2 bg-gray-400"></div>
      <div className="col-start-2 col-end-3 row-start-2 row-end-3 bg-gray-500"></div>
      <div className="col-start-3 col-end-4 row-start-2 row-end-3 bg-gray-600"></div>
      <div className="col-start-1 col-end-3 row-start-3 row-end-4 bg-gray-700"></div>
      <div className="col-start-3 col-end-4 row-start-3 row-end-4 bg-gray-800"></div>
    </div>
  );
};

const FormAuthentication = (): JSX.Element | null => {
  const { isLessThanSmall, isSmall, isMedium, isLarge, isXLarge } = useBreakpoints();

  if (isLessThanSmall) {
    return <FormAuthMobile />;
  } else if (isSmall || isMedium || isLarge || isXLarge) {
    return <FormAuthDesktop />;
  } else {
    return null;
  }
};
