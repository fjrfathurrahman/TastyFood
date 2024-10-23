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

export interface GalleryItem {
  id: number;
  title: string;
  image: null | string | File;
  description: string;
  category: string;
  created_at: string;
  updated_at: string;
}

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: null | string | File;
  category: string;
  created_at: string;
  updated_at: string;
}