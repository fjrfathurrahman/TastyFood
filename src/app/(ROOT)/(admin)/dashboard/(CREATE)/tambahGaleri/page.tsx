'use client';

import usePostGallery from "@/lib/hooks/gallery/usePostGallery";
import { Form, RenderInput } from "@/components/fragments/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { GallerySchema, SchemaGallery } from "@/lib/schema";
import Inputs from "@/resource";
import { ResponseData } from "@/lib/types/response";
import Link from "next/link";

export default function TambahGaleri() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<SchemaGallery>({
    resolver: zodResolver(GallerySchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: SchemaGallery) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('category', data.category);
    if (data.image) {
      formData.append('image', data.image[0]);
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));
    mutate(formData)
  }

  const { mutate, error: Error, isLoading, isSuccess } = usePostGallery({
    onSuccess: () => {
      alert('Data Galeri Berhasil Dibuat')
      reset()
    },
    onError: (error) => {
      alert(error)
    }
  })

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
  
        <Form.Header headline="Tambah Galeri Baru" description="Tambahkan galeri baru dengan mengisi formulir berikut ini."/>

        <Form.Body>
          {Inputs.Gallery.map(input => (
            <RenderInput
              id={input.name}
              key={input.name}
              {...input}
              registration={register(input.name as keyof SchemaGallery)}
              isInvalid={Boolean(errors[input.name as keyof SchemaGallery])}
              errorMessage={errors[input.name as keyof SchemaGallery]?.message as string}
            />
          ))}
        </Form.Body>

        <Form.Footer isSubmitting={isLoading}>
          <Link href={`${isSuccess ? '/dashboard/tableGaleri' : ''}`} className={`${isSuccess ? 'text-green-500' : 'text-red-500'} text-sm`}>
            {(Error?.response?.data as ResponseData)?.message ? 'Terjadi Kesalahan, Silahkan Coba Lagi' : ''}
            {isSuccess ? 'Data Berhasil Diperbarui, Lihat Data...' : ''}
          </Link>
        </Form.Footer>
      </Form>
    </>
  );
}