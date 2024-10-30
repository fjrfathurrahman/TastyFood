import { Icons } from "./icons";
import about1 from '@/app/public/about/about1.jpg'
import about2 from '@/app/public/about/about2.jpg'
import about3 from '@/app/public/about/about3.jpg'
import about4 from '@/app/public/about/about4.jpg'
import about5 from '@/app/public/about/about5.jpg'

import slider1 from '@/app/public/slider/slider1.jpg'
import slider2 from '@/app/public/slider/slider2.jpg'
import slider3 from '@/app/public/slider/slider3.jpg'
import slider4 from '@/app/public/slider/slider4.jpg'

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
    label: 'Ringkasan',
    placeholder: 'Masukan Ringaksan Berita',
  },
  {
    name: 'category',
    type: 'text',
    label: 'Kategori',
    placeholder: 'Masukan Kategori Berita',
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

const Images = {
  about: [
    {
      name: "about",
      src: about1,
    },
    {
      name: "about",
      src: about2,
    },
    {
      name: "about",
      src: about3,
    },
    {
      name: "about",
      src: about4,
    },
    {
      name: "about",
      src: about5,
    },
  ],
  slider: [
    {
      name: "slider",
      src: slider1,
    },
    {
      name: "slider",
      src: slider2,
    },
    {
      name: "slider",
      src: slider3,
    },
    {
      name: "slider",
      src: slider4,
    }
  ]
}

const Menus = {
  Menu,
  Service
}

export { Inputs, Menus, Images }