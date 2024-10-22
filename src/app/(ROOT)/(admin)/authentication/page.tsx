'use client';

import usePostAdmin from "@/lib/hooks/admin/usePostAdmin";
import { Form, RenderInput } from "@/components/fragments/Form";
import { Layout } from "@/components/layout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AuthenticationSchema, SchemaAuth } from "@/resource/schema";
import { ResponseData } from "@/lib/types/response";
import { Inputs } from "@/resource";
import { toast } from "sonner";

export default function Authentication() {
  const { register, handleSubmit, formState: { isSubmitting , errors }, reset} = useForm<SchemaAuth>({
    resolver: zodResolver(AuthenticationSchema),
    mode: 'onChange',
  })

  const onSubmit = async (data: SchemaAuth) => {
    const formData = new FormData();
    formData.append('username', data.username);
    formData.append('email', data.email);
    formData.append('password', data.password);

    mutate(formData)
  };

  const { mutate, error: Error } = usePostAdmin({
    onSuccess: () => {
      reset()
    },
    onError: (error) => {
      console.log(error)
      toast.error('Terjadi Kesalahan, Silahkan Coba Lagi')
    }
  })

  return (
    <Layout.Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        
        <Form.Header headline="Welcome Back Admin" description="Masuk ke dashboard untuk mengelola data."/>

        <Form.Body>
          {Inputs.Authentication.map((item) => (
              <RenderInput
                id={item.name}
                key={item.name}
                {...item}
                registration={register(item.name as keyof SchemaAuth)}
                isInvalid={!!errors[item.name as keyof SchemaAuth]}
                errorMessage={errors[item.name as keyof SchemaAuth]?.message}
              />
          ))}
        </Form.Body>


        <Form.Footer isSubmitting={isSubmitting}>
          <small className="text-danger">{(Error?.response?.data as ResponseData)?.message ? 'Data Login Invalid, Silahkan Coba Lagi' : ''}</small>
        </Form.Footer>
      </Form>
    </Layout.Container>
  );
}