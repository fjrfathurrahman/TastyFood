import { z } from 'zod'

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/svg+xml"];
const MAX_FILE_SIZE = 5 * 1024 * 1024; 

const GallerySchema = z.object({
  title: z.string().min(3, 'Judul must be at least 3 characters').max(20, 'Judul must be at most 20 characters'),
  description: z.string().min(3, 'Deskripsi must be at least 3 characters').max(700, 'Deskripsi must be at most 700 characters'),
  category: z.string().min(3, 'Kategori must be at least 3 characters').max(20, 'Kategori must be at most 20 characters'),
  image: z
    .custom<FileList>()
    .optional()
    .refine((files) => !files || files.length === 0 || files?.[0]?.size <= MAX_FILE_SIZE, 
      'Max image size is 5MB')
    .refine(
      (files) => !files || files.length === 0 || ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      'Only .jpg, .jpeg, .png, .gif and .svg formats are supported'
    )
})

type SchemaGallery = z.infer<typeof GallerySchema>;

const AuthenticationSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters').max(20, 'Username must be at most 20 characters'),
  email: z.string().email('Invalid email').min(3, 'Email must be at least 3 characters').max(50, 'Email must be at most 50 characters').includes('@', { message: 'Email must include @' }),
  password: z.string().min(6, 'Password must be at least 6 characters').max(20, 'Password must be at most 20 characters'),
})

type SchemaAuth = z.infer<typeof AuthenticationSchema>;

export { GallerySchema, type SchemaGallery, AuthenticationSchema, type SchemaAuth }