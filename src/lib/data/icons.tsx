import { AiOutlineHome } from "react-icons/ai";
import { RiContactsLine, RiLockPasswordFill } from "react-icons/ri";
import { GrGallery } from "react-icons/gr";
import { IoFastFoodOutline, IoNewspaperOutline } from "react-icons/io5";
import { MdEmail, MdOutlineLocalPhone, MdOutlineLocationOn } from "react-icons/md";
import { FaUser, FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";

export const dIcons : object = {
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
};
