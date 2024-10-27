'use client';

import Box from "./Box";
import Layout from "./Layout";
import List from "./List";
import { Link } from "@nextui-org/react";
import { MdFacebook, MdOutlineLocationOn, MdOutlineLocalPhone, MdOutlineMailOutline   } from "react-icons/md";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import useGetCompany from "@/lib/hooks/company/useGetCompany";

const Footer = () => {
  const { data } = useGetCompany();

  return (
    <Layout.Section bg="bg-black" className="text-white">
      <Layout.Container sizing={"h-max"}>
      
        <Box className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <List>
            <h3 className="font-bold">{data?.company_name ?? '-'}</h3>
            <p>{data?.description ?? '-'}</p>

            <div className="flex items-center gap-4">
              <Link href={`https://www.facebook.com/${data?.facebook}`} className="text-3xl xl:text-4xl text-blue-400">
                <MdFacebook/>
              </Link>
              <Link href={`https://www.youtube.com/channel/${data?.company_name}`} className="text-3xl xl:text-4xl text-red-500">
                <FaYoutube/>
              </Link>
              <Link href={`https://twitter.com/${data?.twitter}`} className="text-3xl xl:text-4xl text-white">
                <FaXTwitter size={24}/>
              </Link>
            </div>
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

            <List>
              <h5 className="font-bold">Contact Info</h5>
                <Link href={`mailto:${data?.email}`} target="_blank" className="text-white flex items-center gap-2">
                  <span className="text-2xl"><MdOutlineMailOutline/></span>
                  {data?.email ?? '-'}
                </Link>
                <Link href={`tel:${data?.phone}`} className="text-white flex items-center gap-2">
                  <span className="text-2xl"><MdOutlineLocalPhone/></span>
                  {data?.phone ?? '-'}
                </Link>
                <Link href={data?.address_url} target="_blank" className="text-white flex items-center gap-2">
                  <span className="text-2xl"><MdOutlineLocationOn/></span>
                  {data?.address ?? '-'}
                </Link>
            </List>
          </Box>

        </Box>

        <div className="border-t text-center pt-12 mt-12">
          <p>
            Copyright &copy; {new Date().getFullYear()}, All rights reserved.
          </p>
        </div>
      </Layout.Container>
    </Layout.Section>
  );
};

export default Footer;


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
