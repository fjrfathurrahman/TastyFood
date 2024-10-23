import { Footer } from "@/components/layout/Footer";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}