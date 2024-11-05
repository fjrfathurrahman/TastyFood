'use client';

import { Button, Title, Toast } from "@/components/common";
import { Layout } from "@/components/layout";
import { InfoCompany } from "@/components/pages/contact/InfoCompany";
import { contactSchema, SchemaContact } from "@/resource/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Textarea } from "@nextui-org/react";
import axios from "axios";
import { useForm } from "react-hook-form";

export const FormContact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting, isLoading } } = useForm<SchemaContact>({
    mode: "onChange",
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: SchemaContact) => {

    const formData =  new FormData();
    formData.append('access_key', process.env.NEXT_PUBLIC_WEBFORMS_API_KEY ?? '');
    formData.append('subject', data.subject);
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('message', data.message);

    const response = await axios.post('https://api.web3forms.com/submit', formData)

    if (response.status ===  200) {
      reset()
      return Toast.Success("Pesan Berhasil dikirim");
    } 
    
    return Toast.Error("Terjadi kesalahan, silahkan coba lagi");
  };

  return (
    <Layout.Container sizing={"h-max"} className="z-50 relative">
        <form  onSubmit={handleSubmit(onSubmit)} className="max-w-[1024px] mx-auto mb-24">
          <Title text="KONTAK KAMI" />

          <div className="mb-12 mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <Input {...register("subject")} type="text" placeholder="Apa yang ingin kami tanyakan..." errorMessage={errors.subject?.message} isInvalid={Boolean(errors.subject)} />
              <Input {...register("name")} type="text" placeholder="Masukan Nama Anda" errorMessage={errors.name?.message} isInvalid={Boolean(errors.name)}  />
              <Input {...register("email")} type="email" placeholder="Masukan Email Anda" errorMessage={errors.email?.message} isInvalid={Boolean(errors.email)} />
            </div>
            <Textarea {...register("message")} placeholder="Tulis Pesan Anda" minRows={7} errorMessage={errors.message?.message} isInvalid={Boolean(errors.message)} />
          </div>

          <Button fullWidth disabled={isSubmitting ||isLoading} type="submit">SUBMIT</Button>
        </form>

      <InfoCompany />
    </Layout.Container>
  );
};
