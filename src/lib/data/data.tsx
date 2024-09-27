import { AiOutlineHome } from "react-icons/ai";
import { RiContactsLine, RiLockPasswordFill, RiInstagramFill } from "react-icons/ri";
import { GrGallery } from "react-icons/gr";
import { IoFastFoodOutline, IoNewspaperOutline, IoClose } from "react-icons/io5";
import { MdEmail, MdOutlineLocalPhone, MdOutlineLocationOn,} from "react-icons/md";
import { FaUser, FaGithub, FaTwitter, FaSquareFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { LuImagePlus } from "react-icons/lu";

import imageHero from "../../../assets/hero.png";
import imagenotdata from "../../../assets/nofounddata.png";
import imagenotfound from "../../../assets/notfound.png";
import imageAbout1 from "../../../assets/about1.jpg";
import imageAbout2 from "../../../assets/about2.jpg";
import imageAbout3 from "../../../assets/about3.jpg";
import imageAbout4 from "../../../assets/about4.jpg";
import imageAbout5 from "../../../assets/about5.jpg";

export const dIcons = {
  user: <FaUser />,
  password: <RiLockPasswordFill />,
  home: <AiOutlineHome />,
  contact: <RiContactsLine />,
  gallery: <GrGallery />,
  addGallery: <LuImagePlus/>,
  food: <IoFastFoodOutline />,
  news: <IoNewspaperOutline />,
  email: <MdEmail />,
  phone: <MdOutlineLocalPhone />,
  location: <MdOutlineLocationOn />,
  github: <FaGithub />,
  google: <FcGoogle />,
  linkedin: <FaLinkedin />,
  facebook: <FaSquareFacebook />,
  instagram: <RiInstagramFill />,
  twitter: <FaTwitter />,
  close: <IoClose />,
};

export const dNavigation = {
  menu: [
    { name: "Home", url: "/", icon: dIcons.home },
    { name: "Tentang", url: "/tentang", icon: dIcons.food },
    { name: "Galeri", url: "/galeri", icon: dIcons.gallery },
    { name: "Berita", url: "/berita", icon: dIcons.news },
    { name: "Kontak", url: "/kontak", icon: dIcons.contact },
    { name: "Dashboard", url: "/admin/dashboard", icon: null },
    { name: "Authentication ", url: "/admin/auth", icon: null },
  ],
  privacy: [
    { name: "Privacy Policy" },
    { name: "Privacy Center" },
    { name: "FAQ" },
    { name: "Sitemap" },
    { name: "Cookie Policy" },
    { name: "Terms & Conditions" },
  ],
};

export const dImages = {
  hero: imageHero,
  notData: imagenotdata,
  notPage: imagenotfound,
  about: [
    { image: imageAbout1 },
    { image: imageAbout2 },
    { image: imageAbout3 },
    { image: imageAbout4 },
    { image: imageAbout5 },
  ],
  swiper: [
    
  ]
};
