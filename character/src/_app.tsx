import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from '../src/apolloClient';

function MyApp({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
}

export default MyApp;
