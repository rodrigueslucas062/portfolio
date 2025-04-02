import "@/styles/globals.scss";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";
import Navbar from "@/components/navbar/Navbar";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const hideNavbarRoutes = ["/rodrigueslucas"];

  return (
    <>
      {!hideNavbarRoutes.includes(router.pathname) && <Navbar />}
      <Component {...pageProps} />
      <Toaster />
      <SpeedInsights />
      <Analytics />
    </>
  );
}
