import { AppProvider } from "@/entities/User/providers/AppProvider";
import "../app/globals.css";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
        <Component {...pageProps} />;
    </AppProvider>
  )
}
