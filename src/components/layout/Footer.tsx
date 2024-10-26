import Box from "./Box";
import Layout from "./Layout";
import List from "./List";
import { Link } from "@nextui-org/react";
import { MdFacebook, MdOutlineLocationOn, MdOutlineLocalPhone, MdOutlineMailOutline   } from "react-icons/md";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  // use Get Company

  return (
    <Layout.Section bg="bg-black" className="text-white">
      <Layout.Container sizing={"h-max"}>
      
        <Box className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <List>
            <h3 className="font-bold">Tasty Food</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              minus alias numquam consequatur nam iusto. At minus doloribus
              maxime impedit placeat cupiditate. Ab iste, labore saepe quasi
              eveniet accusamus cum?
            </p>

            <div className="flex items-center gap-4">
              <Link href="https://www.facebook.com/" className="text-3xl xl:text-4xl text-blue-400">
                <MdFacebook/>
              </Link>
              <Link href="https://www.youtube.com/" className="text-3xl xl:text-4xl text-red-500">
                <FaYoutube/>
              </Link>
              <Link href="https://www.twitter.com/" className="text-3xl xl:text-4xl text-white">
                <FaXTwitter size={24}/>
              </Link>
            </div>
          </List>

          <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
              {InfoContact.map((item) => (
                <Link key={item.name} href={item.link} className="text-white flex items-center gap-2">
                  <span className="text-2xl">{item.icon}</span>
                  {item.value}
                </Link>
              ))}
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

const InfoContact = [
  {
    name: "Email",
    value: "tastyfood@example.com",
    link: "mailto:tastyfood@example.com",
    icon: <MdOutlineMailOutline size={18} />,
  },
  {
    name: "Phone",
    value: "081234567890",
    link: "tel:081234567890",
    icon: <MdOutlineLocalPhone size={18} />,
  },
  {
    name: "Address",
    value: "Jl. Jendral Sudirman No. 1",
    link: "https://goo.gl/maps/1aJ8nQqS5aY7k9Lp9",
    icon: <MdOutlineLocationOn size={18} />,
  }
]
