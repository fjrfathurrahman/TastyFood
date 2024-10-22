"use client";

import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "sonner";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const ToastClassNames = {
  success: "text-white bg-success-500 text-base shadow",
  error: "text-white bg-danger-400 text-base shadow",
  info: "text-white bg-primary-400 text-base shadow",
  warning: "text-white bg-warning-400 text-base shadow",
  icon: "text-xl",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <Toaster toastOptions={{ classNames: ToastClassNames }} duration={5000}/>
        {children}
      </NextUIProvider>
    </QueryClientProvider>
  );
}
