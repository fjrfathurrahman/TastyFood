import { z } from 'zod'

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/svg+xml"];

const GallerySchema = z.object({
  title: z.string().min(3, 'Judul harus minimal 3 karakter').max(20, 'Judul harus maksimal 20 karakter'),
  description: z.string().min(3, 'Deskripsi harus minimal 3 karakter').max(700, 'Deskripsi harus maksimal 700 karakter'),
  category: z.string().refine((value) => ["New", "Best Seller", "Popular"].includes(value), 'Kategori hanya dapat berupa New, Best Seller, atau Pupular'),
  image: z.custom<FileList>().optional().refine((files) => !files || files.length === 0 || ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
  'Hanya format .jpg, .jpeg, .png, .gif dan .svg yang didukung'
)
})

type SchemaGallery = z.infer<typeof GallerySchema>;

const AuthenticationSchema = z.object({
  username: z.string().min(3, 'Nama pengguna harus minimal 3 karakter').max(20, 'Nama pengguna harus maksimal 20 karakter'),
  email: z.string().email('Alamat email tidak valid').min(3, 'Alamat email harus minimal 3 karakter').max(50, 'Alamat email harus maksimal 50 karakter').includes('@', { message: 'Alamat email harus mengandung @' }),
  password: z.string().min(6, 'Kata sandi harus minimal 6 karakter').max(20, 'Kata sandi harus maksimal 20 karakter'),
})

type SchemaAuth = z.infer<typeof AuthenticationSchema>;

const NewsSchema = z.object({
  title: z.string().min(3, 'Judul harus minimal 3 karakter').max(20, 'Judul harus maksimal 20 karakter'),
  content: z.string().min(3, 'Deskripsi harus minimal 3 karakter'),
  excerpt: z.string().min(3, 'Ringkasan harus minimal 3 karakter').max(700, 'Ringkasan harus maksimal 700 karakter'),
  category: z.string().refine((value) => ["New", "Berita Utama", "Berita Umum"].includes(value), 'Kategori hanya dapat berupa New, Berita Utama, dan Berita Umum'),
  image: z.custom<FileList>().optional().refine((files) => !files || files.length === 0 || ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
  'Hanya format .jpg, .jpeg, .png, .gif dan .svg yang didukung',
  )
})

type SchemaNews = z.infer<typeof NewsSchema>;

const companySchema = z.object({
  company_name: z.string().min(1, "Company name is required"),
  description: z.string().min(1, "Description is required"),
  address: z.string().min(1, "Address is required"),
  address_url: z.string().min(1, "Address URL is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
  email: z.string().email("Invalid email format"),
  website: z.string().min(1, "Website is required"),
  phone: z.string().min(1, "Phone is required"),
  facebook: z.string().optional(),
  twitter: z.string().optional(),
  instagram: z.string().optional(),
  linkedin: z.string().optional(),
  copyright: z.string().optional(),
});

type SchemaCompany = z.infer<typeof companySchema>;

export { GallerySchema, type SchemaGallery, AuthenticationSchema, type SchemaAuth, NewsSchema, type SchemaNews, companySchema, type SchemaCompany }