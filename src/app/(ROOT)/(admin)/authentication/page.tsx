"use client";

import usePostAdmin from "@/lib/hooks/admin/usePostAdmin";
import { Form, RenderInput } from "@/components/fragments/Form";
import { Layout } from "@/components/layout";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { AuthenticationSchema, SchemaAuth } from "@/resource/schema";
import { Inputs } from "@/resource";
import { useRouter } from "next/navigation";

export default function Authentication() {
  const router = useRouter();
  const methods = useForm<SchemaAuth>({
    resolver: zodResolver(AuthenticationSchema),
    mode: "onChange",
  });

  const { mutate, isLoading } = usePostAdmin({
    onSuccess: () => {
      router.push("/dashboard");
    }
  });

  const onSubmit = async (data: SchemaAuth) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password);

    mutate(formData);
  };

  return (
    <Layout.Container>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <Form.Header
            headline="Welcome Back Admin"
            description="Masuk ke dashboard untuk mengelola data."
          />

          <Form.Body>
            {Inputs.Authentication.map((item) => (
              <RenderInput key={item.name} {...item} />
            ))}
          </Form.Body>

          <Form.Footer isSubmitting={methods.formState.isSubmitting || isLoading} />
        </Form>
      </FormProvider>
    </Layout.Container>
  );
}
