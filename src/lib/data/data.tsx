import { AiOutlineHome } from "react-icons/ai";
import { RiContactsLine, RiLockPasswordFill, RiInstagramFill } from "react-icons/ri";
import { GrGallery } from "react-icons/gr";
import { IoFastFoodOutline, IoNewspaperOutline } from "react-icons/io5";
import { MdEmail, MdOutlineLocalPhone, MdOutlineLocationOn } from "react-icons/md";
import { FaUser, FaGithub, FaTwitter, FaSquareFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";

import imageHero from '../../../assets/hero.png'

export const dIcons = {
  user: <FaUser />,
  password: <RiLockPasswordFill />,
  home: <AiOutlineHome />,
  contact: <RiContactsLine />,
  gallery: <GrGallery />,
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
};

export const dNavigation = {
  menu: [
    { name: "Home", url: "/", icon: dIcons.home },
    { name: "Tentang", url: "/tentang", icon: dIcons.food },
    { name: "Galeri", url: "/galeri", icon: dIcons.gallery },
    { name: "Berita", url: "/berita", icon: dIcons.news },
    { name: "Kontak", url: "/kontak", icon: dIcons.contact },
    { name: "Dashboard", url: "/dashboard", icon: null },
    { name: "Authentication ", url: "/auth", icon: null },
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
  hero: imageHero
}