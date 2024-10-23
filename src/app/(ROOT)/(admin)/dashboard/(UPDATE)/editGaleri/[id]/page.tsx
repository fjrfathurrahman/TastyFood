'use client'

import usePutGallery from "@/lib/hooks/gallery/usePutGallery";
import { Inputs } from "@/resource";
import { Form, RenderInput } from "@/components/fragments/Form";
import { GallerySchema, SchemaGallery } from "@/resource/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { ResponseData } from "@/lib/types/response";
import Link from "next/link";
import { toast } from "sonner";
import { LuCheckCircle } from "react-icons/lu";

export default function EditGaleri({ params }: { params: { id: string } }) {
  const methods = useForm<SchemaGallery>({
    resolver: zodResolver(GallerySchema),
    mode: "onChange",
  });

  const { handleSubmit, reset } = methods;
  
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
      toast.success(
        <Link href="/dashboard/tableGaleri" className="flex items-center gap-2.5 text-sm">
          <LuCheckCircle size={18}/>Berhasil diubah! Klik untuk melihat.
        </Link>
      )
      reset();
    },
    onError: (error) => {
      toast.error('Terjadi Kesalahan, Silahkan Coba Lagi')
      console.log(error);
    }
  })
  
  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>

        <Form.Header
          headline={`Edit Galeri ID: ${params.id}`}
          description="Perbarui galeri dengan mengisi formulir berikut ini."
        />

        <Form.Body>
          {Inputs.Gallery.map((input) => (
            <RenderInput
              key={input.name}
              {...input}
            />
          ))}
        </Form.Body>

        <Form.Footer isSubmitting={methods.formState.isSubmitting || isLoading}>
          <Link href={`${isSuccess ? '/dashboard/tableGaleri' : ''}`} as="small" className={`${Error ? 'text-error' : 'text-success'} text-sm`}>
            {(Error?.response?.data as ResponseData)?.message ? 'Terjadi Kesalahan, Silahkan Coba Lagi' : ''}
          </Link>
        </Form.Footer>
      </Form>
    </FormProvider>
  );
}
