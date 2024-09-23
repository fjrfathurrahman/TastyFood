import { AiOutlineHome } from "react-icons/ai";
import { RiContactsLine, RiLockPasswordFill, RiInstagramFill } from "react-icons/ri";
import { GrGallery } from "react-icons/gr";
import { IoFastFoodOutline, IoNewspaperOutline } from "react-icons/io5";
import { MdEmail, MdOutlineLocalPhone, MdOutlineLocationOn } from "react-icons/md";
import { FaUser, FaGithub, FaTwitter, FaSquareFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";

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
    { name: "Home", url: "/", icon: "" },
    { name: "About", url: "/", icon: "" },
    { name: "Gallery", url: "/", icon: "" },
    { name: "Contact", url: "/", icon: "" },
    { name: "Dashboard", url: "/", icon: null },
    { name: "Authentication ", url: "/", icon: null },
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