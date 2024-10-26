"use client";

import usePutCompany from "@/lib/hooks/company/usePutCompany";
import useGetCompany from "@/lib/hooks/company/useGetCompany";
import { Form, RenderInput } from "@/components/fragments/Form";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { Inputs } from "@/resource";
import { Skeleton } from "@nextui-org/react";
import { companySchema, SchemaCompany } from "@/resource/schema";

export default function EditPerusahaan() {
  const { data, isLoading } = useGetCompany();
  const { mutate, isLoading: isUpdating } = usePutCompany();

  const methods = useForm<SchemaCompany>({
    mode: "onSubmit",
    resolver: zodResolver(companySchema),
  });

  const { handleSubmit, reset, formState: { isSubmitting } } = methods;

  useEffect(() => {
    if (data && Object.keys(data).length > 0) {
      reset(data);
    }
  }, [data, reset]);

  const onSubmit = (values: SchemaCompany) => {
    const formData = new FormData();
    formData.append("_method", "PUT");
    Object.entries(values).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, value);
      }
    });

    mutate({ formData });
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>

        <Form.Header
          headline="Edit Data Perusahaan"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis libero iusto distinctio aut recusandae sint aliquam voluptates repudiandae illum ipsam natus eum, dolores ratione dignissimos!"
        />

        <Form.Body>
          {isLoading? Loader() : (
            Inputs.Company.map((item, index) => (
              <RenderInput
                key={index}
                name={item.name}
                label={item.label}
              />
            ))
          )}
        </Form.Body>

        <Form.Footer isSubmitting={isSubmitting || isUpdating} />
      </Form>
    </FormProvider>
  );
}

const Loader = () => {
  return [1, 2, 3, 4, 5, 6].map((item) => (
    <Skeleton key={item} className="rounded-lg">
      <div className="bg-default-700 py-6 rounded-lg" />
    </Skeleton>
  ));
};
