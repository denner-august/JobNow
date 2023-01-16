import "../styles/globals.scss";
import { SessionProvider } from "next-auth/react";
import ContextProvider from "../context/userContext";
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()


function MyApp({ Component, pageProps }: any) {
  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;
