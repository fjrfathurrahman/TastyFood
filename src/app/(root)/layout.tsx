import { Footer } from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";
import { Navigation } from "@/components/layouts/Navbar";

export default function Layout({children}: {children: React.ReactNode}): JSX.Element {
  return (
    <>
      <Header/>
      <Navigation className="text-white" justify="justify-between"/>
      {children}
      <Footer/>
    </>
  );
}