import App from "next/app";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";

import Page from "../components/Page";
import { ApolloProvider } from "@apollo/react-hooks";

const cache = new InMemoryCache();
const client = new ApolloClient({
  //uri: "http://localhost:4466",
  uri: "http://localhost:8383",
  cache,
});

// import { withApollo } from "../lib/apollo";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
};

MyApp.getInitialProps = async (context) => {
  const initialProps =
    App.getInitialProps && (await App.getInitialProps(context));
  return {
    pageProps: { appData: "Hello _App Component", ...initialProps.pageProps },
  };
};

// export default withApollo(MyApp);
export default MyApp;
