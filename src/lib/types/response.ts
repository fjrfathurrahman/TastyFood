import { AxiosError } from "axios";

// type untuk post data 
export type PostProps = {
  onSuccess: () => void
  onError: (error: AxiosError) => void 
}

export type ResponseData = {
  status: boolean
  message: string;
  data: []
};

