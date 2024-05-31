// Importação de estilos globais
import "../styles/globals.scss";
import { useEffect } from "react";
import i18n from "@/utils/i18n";
import { I18nextProvider } from "react-i18next";
import { AppProps } from "next/app";
import "../styles/globals.scss";

// Esta é a assinatura padrão do componente _app
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!i18n.isInitialized) {
      i18n.init();
    }
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  );
}

export default MyApp;
