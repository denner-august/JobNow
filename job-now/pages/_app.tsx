import "../styles/globals.scss";
import { SessionProvider } from "next-auth/react";
import ContextProvider from "../context/userContext";

function MyApp({ Component, pageProps }: any) {
  return (
    <SessionProvider session={pageProps.session}>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </SessionProvider>
  );
}

export default MyApp;
