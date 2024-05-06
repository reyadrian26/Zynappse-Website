/** LIBRARIES */
import { useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";

const ToastContainer = dynamic(() =>
  import("react-toastify").then(({ ToastContainer }) => ToastContainer)
);

/** COMPONENTS */
import { SetValue } from "actions";
import { DEFAULT } from "actions/ActionTypes";
import store from "../store";

/** STYLES */
import "semantic-ui-css/semantic.min.css";
import "../styles/globals.scss";

const MyApp = (props) => {
  let { Component, pageProps } = props;

  /** Initialize default values */
  useEffect(() => {
    let isIgnore = false;

    let { isInitialize } = store.getState().Default;

    if (!isInitialize && !isIgnore) {
      store.dispatch(SetValue({ isInitialize: true }, DEFAULT));
    }

    return () => {
      isIgnore = true;
    };
  }, []);

  /** Dynamic import CSS */
  useEffect(() => {
    let isIgnore = false;

    const loadCss = async () => {
      await import("react-toastify/dist/ReactToastify.css");
    };

    if (!isIgnore) {
      loadCss();
    }

    if (!isIgnore) {
      loadCss();
    }

    return () => {
      isIgnore = true;
    };
  }, []);

  let componentProps = {
    ...pageProps,
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={store}>
        <Component {...componentProps} />
      </Provider>
      <ToastContainer />
    </>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let props = {
    pageProps: Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {},
  };

  if (ctx.res) {
    props.API_SERVER_URL = ctx.res.locals.API_SERVER_URL;
    props.WEB_PATH = ctx.res.locals.WEB_PATH;
    props.UNDER_CONSTRUCTION = ctx.res.locals.UNDER_CONSTRUCTION;
  }

  return props;
};

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
