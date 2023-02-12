import "bootstrap/dist/css/bootstrap.css";

import "../styles/globals.css";

import { ContextProvider } from "../store/AuthContext";
import Layout from "../components/Layout/Layout";
import { useRouter } from "next/router";
import Footer from "../components/Layout/Footer";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  if (router.asPath == "/") {
    return <Component {...pageProps} />;
  }

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  );
}
