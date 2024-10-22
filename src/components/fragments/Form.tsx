import { Button, Input, Textarea } from "@nextui-org/react"
import { UseFormProps, UseFormRegisterReturn } from "react-hook-form"

interface FormPropss extends React.FormHTMLAttributes<HTMLFormElement>, UseFormProps {
  onSubmit: () => void
}

export const Form = ({ onSubmit, ...props }: FormPropss) => {
  return (
    <form className="w-full md:max-w-[768px] mx-auto bg-white rounded-xl" onSubmit={onSubmit} {...props}>
      {props.children}
    </form>
  )
}

const Header = (props: { headline: string, description: string }) => {
  return (
    <div>
      <h3 className="font-bold text-primary">{props.headline}</h3>
      <small>{props.description}</small>
   </div>
  )
}

const Body = (props: {children: React.ReactNode}) => {
  return (
    <div className="mt-8 mb-6 flex flex-col gap-4">
      {props.children}
    </div>
  )
}

const Footer = (props : { isSubmitting: boolean, children?: React.ReactNode }) => {
  return (
    <div>
      {props.children}
      <Button className="w-full mt-2.5 font-medium" type="submit" isDisabled={props.isSubmitting} isLoading={props.isSubmitting} variant="shadow" color="primary">
        {props.isSubmitting ? 'Submitting...' : 'Submit'}
      </Button>
    </div>
  )
}

Form.Header = Header
Form.Body = Body
Form.Footer = Footer

export function RenderInput({ registration, ...props}: RenderInputProps) {
  switch (props.name) {
    case 'description':
     return <Textarea labelPlacement="outside" {...props} {...registration} onChange={registration.onChange} />
  
    default:
      return <Input labelPlacement="outside" {...props} {...registration} onChange={registration.onChange} />
  }
}

interface RenderInputProps {
  type: string
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  errorMessage?: string;
  isInvalid?: boolean;
  registration: UseFormRegisterReturn;
}