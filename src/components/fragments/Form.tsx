"use client";

import { Button, Input, Textarea } from "@nextui-org/react";
import { Controller, useFormContext, UseFormProps } from "react-hook-form";
import { TextEditor } from "./TextEditor";

interface FormPropss
  extends React.FormHTMLAttributes<HTMLFormElement>,
    UseFormProps {
  onSubmit: () => void;
}

export const Form = ({ onSubmit, ...props }: FormPropss) => {
  return (
    <form
      className="w-full md:max-w-[768px] mx-auto bg-white rounded-xl"
      onSubmit={onSubmit}
      {...props}
    >
      {props.children}
    </form>
  );
};

const Header = (props: { headline: string; description: string }) => {
  return (
    <div className="border-b pb-6">
      <h3 className="font-bold">{props.headline}</h3>
      <small>{props.description}</small>
    </div>
  );
};

const Body = (props: { children: React.ReactNode }) => {
  return <div className="mt-8 mb-6 flex flex-col gap-4">{props.children}</div>;
};

const Footer = (props: {
  isSubmitting: boolean;
  children?: React.ReactNode;
}) => {
  return (
    <div>
      {props.children}
      <Button
        className="w-full mt-2.5 font-medium"
        type="submit"
        isDisabled={props.isSubmitting}
        isLoading={props.isSubmitting}
        color="primary"
      >
        {props.isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </div>
  );
};

Form.Header = Header;
Form.Body = Body;
Form.Footer = Footer;

export function RenderInput({ name, label, placeholder, type = "text" }: RenderInputProps) {
  const { register, control, formState: { errors } } = useFormContext();

  const getErrorMessage = () => {
    return errors[name]?.message as string;
  };

  const baseProps = {
    label,
    placeholder: placeholder || label,
    isInvalid: Boolean(errors[name]),
    errorMessage: getErrorMessage(),
    labelPlacement: "outside" as const,
  };

  const renderField = () => {
    switch (name) {
      case "description":
      case "excerpt":
      case "address":
      case "address_url":
        return <Textarea {...baseProps} {...register(name)} />;

      case "content":
        return (
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <TextEditor
                label={label ?? ""}
                value={field.value}
                onChange={(value: string) => field.onChange(value)}
                error={getErrorMessage()}
              />
            )}
          />
        );
      case "image":
        return <Input {...baseProps} type="file" {...register(name)} />;

      default:
        return <Input {...baseProps} type={type} {...register(name)} />;
    }
  };

  return renderField();
}

interface RenderInputProps {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
}
