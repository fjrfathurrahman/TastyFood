"use client";

import Box from "./Box";
import Layout from "./Layout";
import List from "./List";
import useGetCompany from "@/lib/hooks/company/useGetCompany";
import { Link } from "@nextui-org/react";
import { Icons } from "@/resource/icons";
import { SchemaCompany } from "@/resource/schema";

const Footer = () => {
  const { data, isLoading } = useGetCompany("1");

  return (
    <Layout.Section bg="bg-black">
      <Layout.Container sizing={"h-max"}>
        {isLoading ? (
          "Loading..."
        ) : (
          <Box className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-white">
            <List>
              <h3 className="font-bold">{data?.company_name ?? "-"}</h3>
              <p className="text-white">{data?.description ?? "-"}</p>

              {Sosmed(data)}
            </List>

            <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:col-span-2 gap-8">
              <List>
                <h5 className="font-bold">Usefull Links</h5>
                {Menu.map((item) => (
                  <Link key={item.name} href={item.link} className="text-white">
                    {item.name}
                  </Link>
                ))}
              </List>

              <List>
                <h5 className="font-bold">Privacy</h5>
                {Privacy.map((item) => (
                  <Link key={item.name} href={item.link} className="text-white">
                    {item.name}
                  </Link>
                ))}
              </List>

              {InfoContact(data)}
            </Box>
          </Box>
        )}

        <div className="border-t text-center pt-12 mt-12">
          <p className="text-white">
            Copyright &copy; {new Date().getFullYear()}, All rights reserved.
          </p>
        </div>
      </Layout.Container>
    </Layout.Section>
  );
};

export default Footer;

const Sosmed = (data: SchemaCompany) => {
  return (
    <div className="flex items-center gap-4">
      <Link href={`https://www.facebook.com/${data?.facebook}`} target="_blank" className="text-3xl xl:text-4xl text-blue-400">
        <Icons.MdFacebook />
      </Link>
      <Link href={`https://www.youtube.com/channel/${data?.company_name}`} target="_blank" className="text-3xl xl:text-4xl text-red-500">
        <Icons.FaYoutube />
      </Link>
      <Link href={`https://twitter.com/${data?.twitter}`} className="text-3xl xl:text-4xl text-white" target="_blank">
        <Icons.FaXTwitter size={24} />
      </Link>
    </div>
  );
};

const InfoContact = (data: SchemaCompany) => {
  return (
    <List>
      <h5 className="font-bold">Contact Info</h5>
      <Link href={`mailto:${data?.email}`} target="_blank" className="text-white flex items-center gap-2">
        <span className="text-2xl">
          <Icons.MdOutlineMailOutline />
        </span>
        {data?.email ?? "-"}
      </Link>
      <Link target="_blank" href={`https://wa.me/${data?.phone}`} className="text-white flex items-center gap-2">
        <span className="text-2xl">
          <Icons.MdOutlineLocalPhone />
        </span>
        {data?.phone ?? "-"}
      </Link>
      <Link href={data?.address_url} target="_blank" className="text-white flex items-center gap-2">
        <span className="text-2xl">
          <Icons.MdOutlineLocationOn />
        </span>
        {data?.address ?? "-"}
      </Link>
    </List>
  );
};

const Menu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Tentang",
    link: "/tentang",
  },
  {
    name: "Galeri",
    link: "/galeri",
  },
  {
    name: "Berita",
    link: "/berita",
  },
  {
    name: "Kontak",
    link: "/kontak",
  },
  {
    name: "Dashboard",
    link: "/dashboard",
  },
];

const Privacy = [
  {
    name: "Privacy Policy",
    link: "/privacy",
  },
  {
    name: "Terms & Conditions",
    link: "/terms",
  },
  {
    name: "Cookie Policy",
    link: "/cookie",
  },
  {
    name: "Sitemap",
    link: "/sitemap",
  },
  {
    name: "FAQ",
    link: "/faq",
  },
];
