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
    link: "/",
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

const News = [
  {
    name: 'title',
    type: 'text',
    label: 'Judul',
    placeholder: 'Masukan Judul Berita',
  },
  {
    name: 'excerpt',
    type: 'text',
    label: 'Excerpt',
    placeholder: 'Masukan Excerpt Berita',
  },
  {
    name: 'image',
    type: 'file',
    label: 'Image',
    placeholder: 'Masukan Image Berita',
  },
  {
    name: 'content',
    type: 'text',
    label: 'Content',
    placeholder: 'Masukan Content Berita',
  },
]

const Company = [
  {
    name: 'company_name',
    label: 'Nama Perusahaan',
  },
  {
    name: 'description',
    label: 'Deskripsi Perusahaan',
  },
  {
    name: 'address',
    label: 'Alamat Perusahaan',
  },
  {
    name: 'address_url',
    label: 'Link Alamat Perusahaan',
  },
  {
    name: 'city',
    label: 'Kota Perusahaan',
  },
  {
    name: 'country',
    label: 'Negara Perusahaan',
  },
  {
    name: 'phone',
    label: 'Telepon Perusahaan',
  },
  {
    name: 'email',
    label: 'Email Perusahaan',
  },
  {
    name: 'facebook',
    label: 'Facebook',
  },
  {
    name: 'instagram',
    label: 'Instagram',
  },
  {
    name: 'twitter',
    label: 'Twitter',
  }
]


const Inputs = {
  Gallery,
  Authentication,
  News,
  Company
}

const Menus = {
  Menu,
  Service
}
export { Inputs, Menus }