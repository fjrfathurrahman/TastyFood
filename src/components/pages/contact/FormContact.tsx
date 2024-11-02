'use client';

import { Button, Title, Toast } from "@/components/common";
import { Layout } from "@/components/layout";
import { InfoCompany } from "@/components/pages/contact/InfoCompany";
import { Input, Textarea } from "@nextui-org/react";
import { FormEvent } from "react";
import axios from "axios";

export const FormContact = () => {

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    formData.append('access_key', process.env.NEXT_PUBLIC_WEBFORMS_API_KEY as string ?? '');

    const response = await axios.post('https://api.web3forms.com/submit', formData,   {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    if (response.status ===  200) {
      (e.target as HTMLFormElement).reset();
      return Toast.Success("Pesan Berhasil dikirim");
    } else {
      return Toast.Error("Terjadi kesalahan, silahkan coba lagi");
    }

  };

  return (
    <Layout.Container sizing={"h-max"} className="z-50 relative">
        <form  onSubmit={onSubmit} className="max-w-[1024px] mx-auto mb-24">
          <Title text="KONTAK KAMI" />

          <div className="mb-12 mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <Input name="subject" type="text" placeholder="Apa yang ingin kami tanyakan..."/>
              <Input name="name" type="text" placeholder="Masukan Nama Anda"  />
              <Input name="email" type="email" placeholder="Masukan Email Anda" />
            </div>
            <Textarea name="message" placeholder="Tulis Pesan Anda" minRows={7} />
          </div>

          <Button fullWidth type="submit">SUBMIT</Button>
        </form>

      <InfoCompany />
    </Layout.Container>
  );
};
