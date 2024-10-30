import { Layout } from "@/components/layout";
import { FormContact } from "@/components/pages/contact/FormContact";
import dynamic from "next/dynamic";

const Map = dynamic(
  () => import("@/components/fragments/Map").then((module) => module.Map),
  { ssr: false, loading: () => null }
);

export default function Kontak() {
  return (
    <>
      <FormContact />
      <Layout.Section bg="bg-zinc-100">
        <Layout.Container>
          <Map />
        </Layout.Container>
      </Layout.Section>
    </>
  );
}