import "@/styles/globals.scss";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }) {

  return (
    <>
      <Component {...pageProps} />
      <Toaster />
      <SpeedInsights />
      <Analytics />
    </>
  );
}
