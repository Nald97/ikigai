import "../styles/globals.css";
import "../styles/EditCtaForm.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import Layout from "../components/layout/Layout";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "../store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Layout>
          {" "}
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
