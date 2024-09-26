import { BoxFlex } from "@/components/common";

export default function Layout({ children, header}: { children: React.ReactNode; header: React.ReactNode; }): JSX.Element {
  return (
    <div className="w-screen h-screen bg-gray-300/15  py-16" style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.3) 0%, transparent 0%), radial-gradient(circle, rgba(0,0,0,0.7) 5%, transparent 0%)", backgroundSize: "35px 35px",}}>
      <BoxFlex className="w-full sm:w-[768px] mx-auto px-6" direction="flex-col">
        {header} 
        {children}
      </BoxFlex>
    </div>
  );
}
