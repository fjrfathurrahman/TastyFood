import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import { Navigation } from "@/components/ui/Navbar";

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