import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

import { useEffect } from "react";
import { useRouter } from "next/router";

import Layout from "../components/Layout/Layout";
import Footer from "../components/Layout/Footer";

export default function App({ Component, pageProps }) {
  // const router = useRouter();

  // if (router.asPath == "/") {
  //   return <Component {...pageProps} />;
  // }

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min.js");
  }, []);

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  );
}
