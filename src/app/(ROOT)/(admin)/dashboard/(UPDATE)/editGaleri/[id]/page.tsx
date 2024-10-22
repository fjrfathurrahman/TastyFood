'use client'

import usePutGallery from "@/lib/hooks/gallery/usePutGallery";
import Inputs from "@/resource";
import { Form, RenderInput } from "@/components/fragments/Form";
import { GallerySchema, SchemaGallery } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ResponseData } from "@/lib/types/response";
import Link from "next/link";

export default function EditGaleri({ params }: { params: { id: string } }) {
  const { handleSubmit, register, formState: { errors } } = useForm<SchemaGallery>({
    mode: 'onChange',
    resolver: zodResolver(GallerySchema),
  })
  
  const onSubmit = async (data: SchemaGallery) => {
    const formData = new FormData();

    formData.append('_method', 'PUT');
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('category', data.category);
    if (data.image && data.image) {
      formData.append('image', data.image[0]);
    }

    mutate({ id: params.id, formData });
  };

  const { mutate, isLoading, error: Error, isSuccess } = usePutGallery({
    onSuccess: () => {
      alert('Data Galeri Berhasil Diperbarui')
    },
    onError: (error) => {
      console.log(error);
      alert(error)
    }
  })
  
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>

        <Form.Header
          headline={`Edit Gallery ${params.id}`}
          description="Perbarui galeri dengan mengisi formulir berikut ini."
        />

        <Form.Body>
          {Inputs.Gallery.map((input) => (
            <RenderInput
              id={input.name}
              key={input.name}
              {...input}
              registration={register(input.name as keyof SchemaGallery)}
              isInvalid={Boolean(errors[input.name as keyof SchemaGallery])}
              errorMessage={
                errors[input.name as keyof SchemaGallery]?.message as string
              }
            />
          ))}
        </Form.Body>

        <Form.Footer isSubmitting={isLoading}>
          <Link href={`${isSuccess ? '/dashboard/tableGaleri' : ''}`} as="small" className={`${Error ? 'text-error' : 'text-success'} text-sm`}>
            {(Error?.response?.data as ResponseData)?.message ? 'Terjadi Kesalahan, Silahkan Coba Lagi' : ''}
            {isSuccess ? 'Data Berhasil Diperbarui, Lihat Data...' : ''}
          </Link>
        </Form.Footer>
      </Form>
    </div>
  );
}
