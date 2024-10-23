"use client";

import usePostGallery from "@/lib/hooks/gallery/usePostGallery";
import Link from "next/link";
import { Form, RenderInput } from "@/components/fragments/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { GallerySchema, SchemaGallery } from "@/resource/schema";
import { Inputs } from "@/resource";
import { toast } from "sonner";
import { LuCheckCircle } from "react-icons/lu";

export default function TambahGaleri() {
  const methods = useForm<SchemaGallery>({
    resolver: zodResolver(GallerySchema),
    mode: "onChange",
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = async (data: SchemaGallery) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    if (data.image) {
      formData.append("image", data.image[0]);
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));
    mutate(formData);
  };

  const { mutate, isLoading } = usePostGallery({
    onSuccess: () => {
      toast.success(
        <Link
          href="/dashboard/tableGaleri"
          className="flex items-center gap-2.5 text-sm"
        >
          <LuCheckCircle size={18} />
          Berhasil ditambahkan! Klik untuk melihat.
        </Link>
      );
      reset();
    },
    onError: (error) => {
      toast.error("Terjadi Kesalahan, Silahkan Coba Lagi");
      console.log(error);
    },
  });

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Header
          headline="Tambah Galeri Baru"
          description="Tambahkan galeri baru dengan mengisi formulir berikut ini."
        />

        <Form.Body>
          {Inputs.Gallery.map((input) => (
            <RenderInput key={input.name} {...input} />
          ))}
        </Form.Body>

        <Form.Footer isSubmitting={methods.formState.isSubmitting || isLoading} />
      </Form>
    </FormProvider>
  );
}
