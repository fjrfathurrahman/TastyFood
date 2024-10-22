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
export default Inputs