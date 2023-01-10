import "bootstrap/dist/css/bootstrap.css";

import "../styles/globals.css";

import { ContextProvider } from "../store/AuthContext";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  if (router.asPath == "/") {
    return <Component {...pageProps} />; //checks for the login Page path and
    //omits the Layout wrapper
  }

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
