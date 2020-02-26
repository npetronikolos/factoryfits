import React from "react";
import App from "next/app";

//import { ApolloProvider } from "react-apollo";
//import withApolloClient from "../utils/with-apollo-client";
//import "antd/dist/antd.css";
import Page from "../components/Page";

class MyApp extends App {
  render() {
    // @ts-ignore
    //const { Component, pageProps, apolloClient } = this.props;
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Page>
          <Component {...pageProps} />
        </Page>
      </div>

      //<ApolloProvider client={apolloClient}>
      //  <Component {...pageProps} />
      // </ApolloProvider>
    );
  }
}

// export default withApolloClient(MyApp);
export default MyApp;
