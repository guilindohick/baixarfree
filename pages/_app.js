import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import Loading from "../components/loading";
import "../public/webfonts/flaticon.css";
import { wrapper } from "../redux/store";
import "../style/all.min.css";
import "../style/style.css";
import "../style/rtl.css";
import "../style/custom.css";
import 'swiper/scss';
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
const MyApp = ({ Component, ...rest }) => {
  const router = useRouter();
  const [translateData, setTranslateData] = useState();
  const [lang, setLang] = useState();
  const [adSense, setAdSense] = useState();
  const [enableAdSense, setEnableAdSense] = useState(0);

  const [state, setState] = useState({
    isRouteChanging: false,
    loadingKey: 0,
  });

  useEffect(() => {
    setTranslateData(JSON.parse(localStorage.getItem("langData")));
    setLang(localStorage.getItem("lang"));

    if (!localStorage.getItem('ad-sense-c')) {
      fetch(`${process.env.BASE_URL}ad-sense-setting`).then(response => response.json())
        .then(resData => {
          if (resData.data.google_adsense_enable == 1) {
            localStorage.setItem("ad-sense-c", resData.data.google_adsense_client_id, 3600000)
            localStorage.setItem("enable-adSense", 1, 3600000)
          }
          else{
            localStorage.setItem("ad-sense-c", "", 3600000)
            localStorage.setItem("enable-adSense", 0, 3600000)
          }

          setAdSense(localStorage.getItem("ad-sense-c"));
          setEnableAdSense(localStorage.getItem("enable-adSense"));
        });
    }
    else {
      setAdSense(localStorage.getItem("ad-sense-c"));
      setEnableAdSense(localStorage.getItem("enable-adSense"));
    }

    const handleRouteChangeStart = (url) => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey ^ 1,
      }));
    };

    const handleRouteChangeEnd = (url) => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: false,
      }));
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeEnd);
    router.events.on("routeChangeError", handleRouteChangeEnd);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeEnd);
      router.events.off("routeChangeError", handleRouteChangeEnd);
    };
  }, [router.events]);

  i18next
    .use(initReactI18next)
    .init({
      lng: lang,
      resources: {
        [lang]: {
          translation: translateData
        }
      }
    })
  i18next.reloadResources([lang]);
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        enableAdSense && (
        <script
          data-ad-client={adSense}
          async="true"
          onError={(e) => { console.error('Script failed to load', e) }}
          strategy="beforeInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
        )
      </Head>
      <Loading isRouteChanging={state.isRouteChanging} key={state.loadingKey} />
      <Component {...props.pageProps} />
      <ToastContainer position="top-left" autoClose={2000} />
    </Provider>
  );
};

export default wrapper.withRedux(MyApp);
