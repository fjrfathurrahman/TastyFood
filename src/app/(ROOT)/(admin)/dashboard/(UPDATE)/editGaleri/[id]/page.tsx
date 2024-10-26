'use client'

import usePutGallery from "@/lib/hooks/gallery/usePutGallery";
import { Inputs } from "@/resource";
import { Form, RenderInput } from "@/components/fragments/Form";
import { GallerySchema, SchemaGallery } from "@/resource/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Toast } from "@/components/common";

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

  const { mutate, isLoading } = usePutGallery({
    onSuccess: () => {
      Toast.Success('Berhasil meupdate galeri', '/dashboard/tableGaleri')
      reset();
    },
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
            <RenderInput key={input.name} {...input} />
          ))}
        </Form.Body>

        <Form.Footer isSubmitting={methods.formState.isSubmitting || isLoading}/>
      </Form>
    </FormProvider>
  );
}
