import { Footer } from "@/components/items/Footer";
import { Header } from "@/components/items/Header";
import { Navigation } from "@/components/items/Navbar";

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