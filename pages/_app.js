import "../app/globals.css";
import RootLayout from "@/app/layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
