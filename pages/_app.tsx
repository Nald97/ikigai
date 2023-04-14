import "../styles/globals.css";
import "../styles/EditCtaForm.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import Layout from "../components/layout/Layout";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "../store/store";
import Loader from "../components/common/Loader";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

library.add(faFilter);

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      {loading && <Loader />}
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={true}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
