import { dIcons } from "@/lib/data/data";
import { BoxFlex, ButtonEl } from "../common";
import InputEl from "../common/InputEl";

export const FormAuth = (): JSX.Element => {

  return (
    <div>
      <form className="w-5/6 h-max px-8 pt-12 pb-16 mx-auto border rounded-3xl flex flex-col gap-8">
        <HeaderForm />

        <BoxFlex direction="flex-col">
          <InputEl placeholder="Masukkan Nama Anda" icon={dIcons.user} />
          <InputEl placeholder="Masukkan Email Anda" icon={dIcons.email} />
          <InputEl placeholder="Masukkan Password Anda" icon={dIcons.password} />
        </BoxFlex>
        <div>
          <ButtonEl text="Login" width="w-full" />
        </div>

        <FooterForm />
      </form>
    </div>
  );
};

const HeaderForm = (): JSX.Element => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Welcome</h1>
      <p>Lorem ipsum dolor sit amet adipisicing.</p>
    </div>
  );
};

const FooterForm = (): JSX.Element => {
  return (
    <BoxFlex direction="flex-col">
      <BoxFlex align="items-center">
        <div className="h-1 w-full bg-black rounded-full" />
        <p className="min-w-max font-semibold">Atau dengan</p>
        <div className="h-1 w-full bg-black rounded-full" />
      </BoxFlex>

      <BoxFlex align="items-center" justify="justify-between" gap="gap-0">
        <ButtonEl icon={dIcons.google} className="text-xl" />
        <ButtonEl icon={dIcons.github} className="text-xl" />
        <ButtonEl icon={dIcons.linkedin} className="text-xl" />
      </BoxFlex>
    </BoxFlex>
  );
};
