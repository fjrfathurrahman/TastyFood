import Link from "next/link";
import { LuCheckCircle } from "react-icons/lu";
import { toast } from "sonner";

const Success = (message: string, url?: string) => {
  return toast.success(
    <Link href={url?? "#"} className="flex items-center gap-2.5 text-sm">
      <LuCheckCircle size={18} />
      {message}
    </Link>
  );
};

const Error = (message: string) => {
  return toast.error(message);
};

export const Toast = {
  Success,
  Error,
}

export default Toast