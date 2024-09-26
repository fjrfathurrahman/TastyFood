import { handleLogin } from "@/lib/hook/handlePost";
import { BoxFlex, ButtonEl, InputEl } from "../common";
import { dIcons } from "@/lib/data/data";
import { useState } from "react";


export const FormAuthentication = (): JSX.Element => {
  const [value, setValue] = useState({username: '', email:'', password: ''});
  const [loading, setLoading] = useState(false);

  const onSubmitLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = new URL( process.env.NEXT_PUBLIC_BACKEND_URL + "api/login" || "" );
  const data = { username: value.username, email: value.email, password: value.password };
    setLoading(true);
    const result = await handleLogin({ url, data });

    setLoading(false);
    return result;
  };

  return (
    <form className="w-full space-y-8 sm:w-max sm:px-8 sm:py-16 mx-auto sm:border sm:rounded-3xl" onSubmit={onSubmitLogin}>
      <HeaderForm />
      <BoxFlex direction="flex-col">
        <InputEl
          onChange={(e) => setValue({...value, username: e.target.value})}
          placeholder="Masukkan Username Anda"
          type="text"
          icon={dIcons.user}
        />
        <InputEl
          onChange={(e) => setValue({...value, email: e.target.value})}
          placeholder="Masukkan Email Anda"
          type="email"
          icon={dIcons.email}
        />
        <InputEl
          onChange={(e) => setValue({...value, password: e.target.value})}
          placeholder="Masukkan Password Anda"
          type="password"
          icon={dIcons.password}
        />
      </BoxFlex>
      <div>
        <ButtonEl
          text={loading ? "Loading..." : "Login"}
          width="w-full"
          type="submit"
        />
      </div>
      <FooterForm />
    </form>
  );
};

const HeaderForm = (): JSX.Element => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Welcome</h1>
      <p className="font-medium">Lorem ipsum dolor sit adipisicing.</p>
    </div>
  );
};

const FooterForm = (): JSX.Element => {
  return (
    <BoxFlex direction="flex-col">
      <BoxFlex align="items-center">
        <div className="h-1 w-full bg-black rounded-full" />
        <p className="min-w-max font-semibold text-sm sm:text-base">Atau dengan</p>
        <div className="h-1 w-full bg-black rounded-full" />
      </BoxFlex>

      <BoxFlex
        align="items-center"
        justify="justify-between"
        className="flex-col sm:flex-row"
      >
        <ButtonEl
          variant="bordered"
          icon={dIcons.google}
          className="text-xl"
          width="w-full"
        />
        <ButtonEl
          variant="bordered"
          icon={dIcons.github}
          className="text-xl"
          width="w-full"
        />
        <ButtonEl
          variant="bordered"
          icon={dIcons.linkedin}
          className="text-xl"
          width="w-full"
        />
      </BoxFlex>
    </BoxFlex>
  );
};