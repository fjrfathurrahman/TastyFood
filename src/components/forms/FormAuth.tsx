import { handleLogin } from "@/lib/hook/handlePost";
import { BoxFlex, ButtonEl, InputEl } from "../common";
import { dIcons } from "@/lib/data/data";
import { useState } from "react";

const FormAuthMobile = (): JSX.Element => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = new URL(
      process.env.NEXT_PUBLIC_BACKEND_URL + "api/login" || ""
    );
    const data = { username, email, password };
    setLoading(true);
    const result = await handleLogin({ url, data });

    setLoading(false);
    return result;
  };

  return (
    <form className="w-full space-y-8" onSubmit={onSubmitLogin}>
      <HeaderForm />
      <BoxFlex direction="flex-col">
        <InputEl
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Masukkan Username Anda"
          type="text"
          icon={dIcons.user}
        />
        <InputEl
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Masukkan Email Anda"
          type="email"
          icon={dIcons.email}
        />
        <InputEl
          onChange={(e) => setPassword(e.target.value)}
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

const FormAuthDesktop = (): JSX.Element => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = new URL(
      process.env.NEXT_PUBLIC_BACKEND_URL + "api/login" || ""
    );
    const data = { username, email, password };
    setLoading(true);
    const result = await handleLogin({ url, data });

    setLoading(false);
    return result;
  };

  return (
    <div>
      <form
        className="w-max px-8 py-16 mx-auto border rounded-3xl flex flex-col gap-8"
        onSubmit={onSubmitLogin}
      >
        <HeaderForm />
        <BoxFlex direction="flex-col">
          <InputEl
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Masukkan Username Anda"
            type="text"
            icon={dIcons.user}
          />
          <InputEl
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan Email Anda"
            type="email"
            icon={dIcons.email}
          />
          <InputEl
            onChange={(e) => setPassword(e.target.value)}
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
    </div>
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
        <p className="min-w-max font-semibold">Atau dengan</p>
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

export { FormAuthDesktop, FormAuthMobile };
