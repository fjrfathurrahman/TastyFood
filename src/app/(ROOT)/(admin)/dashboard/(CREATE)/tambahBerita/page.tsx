"use client";

import usePostNews from "@/lib/hooks/news/usePostNews";
import { Form, RenderInput } from "@/components/fragments/Form";
import { NewsSchema, SchemaNews } from "@/resource/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Inputs } from "@/resource";
import { Toast } from "@/components/common";

export default function TambahBerita() {
  const methods = useForm<SchemaNews>({
    resolver: zodResolver(NewsSchema),
    mode: "onChange",
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = async (data: SchemaNews) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("excerpt", data.excerpt);
    formData.append("category", data.category);
    if (data.image) formData.append("image", data.image[0]);

    mutate(formData);
  };

  const { mutate, isLoading } = usePostNews({
    onSuccess: () => {
      Toast.Success("Berita Berhasil Ditambahkan", "/dashboard/tableBerita");
      reset();
    },
  });

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Header
          headline="Tambah Berita Baru"
          description="Tambahkan Berita baru dengan mengisi formulir berikut ini."
        />

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
