import { Icons } from "./icons";

// Ukuran ikon default yang bisa diatur global
const defaultIconSize = 18;

export const Menu = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: <Icons.LuLayoutDashboard size={defaultIconSize} />,
  },
  {
    name: "Galeri",
    link: "/dashboard/tableGaleri",
    icon: <Icons.RiGalleryLine size={defaultIconSize} />,
  },
  {
    name: "Berita",
    link: "/dashboard/tableBerita",
    icon: <Icons.ImNewspaper size={defaultIconSize} />,
  },
  {
    name: "Tambah Galeri",
    link: "/dashboard/tambahGaleri",
    icon: <Icons.TbPhotoPlus size={defaultIconSize} />,
  },
  {
    name: "Tambah Berita",
    link: "/dashboard/tambahBerita",
    icon: <Icons.LuCopyPlus size={defaultIconSize} />,
  },
  {
    name: "Update Perusahaan",
    link: "/dashboard/editPerusahaan",
    icon: <Icons.HiOutlineBuildingOffice2 size={defaultIconSize} />,
  },
];
const Service = [
  {
    name: "User",
    link: "/dashboard/user",
    icon: <Icons.LuUser size={defaultIconSize} />,
  },
  {
    name: "Setting",
    link: "/dashboard/setting",
    icon: <Icons.MdOutlineSettings size={defaultIconSize} />,
  },
  {
    name: "Logout",
    link: "/dashboard/logout",
    icon: <Icons.MdLogout size={defaultIconSize} />,
  },
];



const Gallery = [
  {
    label: "Judul",
    name: "title",
    type: "text",
    placeholder: "Masukan Judul Galeri",
  },
  {
    label: "Deskripsi",
    name: "description",
    type: "text",
    placeholder: "Masukan Deskripsi Galeri",
  },
  {
    label: "Kategori",
    name: "category",
    type: "text",
    placeholder: "Kategori: New, Best Seller, Popular",
  },
  {
    label: "Gambar",
    name: "image",
    type: "file",
    placeholder: "Masukan Gambar Galeri",
  }
]

const Authentication = [
  {
    name: 'username',
    type: 'text',
    label: 'Username',
    placeholder: 'Masukan Username Anda',
  },
  {
    name: 'email',
    type: 'text',
    label: 'Email',
    placeholder: 'Masukan Email Anda',
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Masukan Password Anda',
  }
]


const Inputs = {
  Gallery,
  Authentication
}

const Menus = {
  Menu,
  Service
}
export { Inputs, Menus }