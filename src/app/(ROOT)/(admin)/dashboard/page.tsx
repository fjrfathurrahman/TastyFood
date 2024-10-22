'use client'

import { BannerDasboard } from "@/components/fragments/BannerDasboard";
import { toast } from "sonner";

export default function Dashboard() {

  return (
    <>
      <BannerDasboard/>
      <button onClick={() => toast.success('This is a sonner toast')}>Render my toast</button>;
      <button onClick={() => toast.error('This is a sonner Error')}>Render my toast Error</button>;
      <button onClick={() => toast.info('This is a sonner Info')}>Render my toast Info</button>
      <button onClick={() => toast.warning('This is a sonner Warnign')}>Render my toast Waring</button>
    </>
  );
}