export interface RowTableProps {
  id: number;
  number: number;
  title?: string;
  category?: string;
  image?: string;
  description?: string;
  created_at?: string;
  updated_at?: string;
  content?: string;
  company_name?: string;
  address?: string;
  city?: string;
  country?: string;
  email?: string;
  website?: string;
  [key: string]: unknown;
}