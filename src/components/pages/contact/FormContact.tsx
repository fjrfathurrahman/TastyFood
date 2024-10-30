import { Button, Title } from "@/components/common";
import { Layout } from "@/components/layout";
import { InfoCompany } from "@/components/pages/contact/InfoCompany";
import { Input, Textarea } from "@nextui-org/react";

export const FormContact = () => {
  return (
    <Layout.Container sizing={"h-max"} className="z-50 relative">

      <form className="max-w-[1024px] mx-auto mb-24">
        <Title text="KONTAK KAMI" />
        
        <div className="mb-12 mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <Input name="subject" type="text" placeholder="Apa yang ingin kami tanyakan..."/>
            <Input name="name" type="text" placeholder="Masukan Nama Anda" />
            <Input name="email" type="email" placeholder="Masukan Email Anda" />
          </div>
          <Textarea name="message" placeholder="Tulis Pesan Anda" minRows={7} className="h-full" />
        </div>
        
        <Button fullWidth type="submit">SUBMIT</Button>
      </form>

      <InfoCompany />
    </Layout.Container>
  );
};
