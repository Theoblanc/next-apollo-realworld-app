import "../src/styles/globals.tsx";
import React from "react";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../src/lib/apollo-client";
import { GlobalStyle } from "../src/styles/globals";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);
  const Layout = (Component as any).layout || React.Fragment;

  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
