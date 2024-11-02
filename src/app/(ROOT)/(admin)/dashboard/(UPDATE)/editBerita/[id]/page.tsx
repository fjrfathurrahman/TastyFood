'use client'

import { Inputs } from "@/resource";
import { Form, RenderInput } from "@/components/fragments/Form";
import { NewsSchema, SchemaNews } from "@/resource/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Toast } from "@/components/common";
import usePutNews from "@/lib/hooks/news/usePutNews";

export default function EditBerita({ params }: { params: { id: string } }) {
  const { mutate, isLoading } = usePutNews({
    onSuccess: () => {
      Toast.Success('Berhasil Update, Click untuk Lihat', '/dashboard/tableBerita')
      reset();
    },
  })

  const methods = useForm<SchemaNews>({
    resolver: zodResolver(NewsSchema),
    mode: "onChange"
  })

  const { handleSubmit, reset } = methods;

  const onSubmit = async (data: SchemaNews) => {
    const formData = new FormData();

    formData.append('_method', 'PUT');
    formData.append('title', data.title);
    formData.append('content', data.content);
    formData.append('excerpt', data.excerpt);
    formData.append('category', data.category);
    if (data.image && data.image) {
      formData.append('image', data.image[0]);
    }

    console.log(data.category, data.image && data.image[0], data.title, data.content, data.excerpt, data.category);
    mutate({ id: params.id, formData });
  }


  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Header headline={`Edit Berita ID: ${params.id}`} description="Perbarui berita dengan mengisi formulir berikut ini."/>

        <Form.Body>
          {Inputs.News.map((input) => (
            <RenderInput key={input.name} {...input} />
          ))}
        </Form.Body>

        <Form.Footer
          isSubmitting={methods.formState.isSubmitting || isLoading}
        />
      </Form>
    </FormProvider>
  );
}
