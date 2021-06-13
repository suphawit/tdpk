import Head from 'next/head';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';

import '../styles/global.css';
import theme from '../theme';
import '../styles/tailwind.css';
import '../styles/header.scss';
import '../styles/googleMap.scss';
import '../styles/contentContainer.scss';
import '../styles/featuredArticles.scss';
import '../styles/privacyPolicy.scss';
import '../styles/card.scss';
import '../styles/space.scss';
import '../styles/termCondition.scss';
import '../styles/contactUs.scss';
import '../styles/aboutTDPK.scss';
import '../styles/shared.scss';
import '../styles/animatedArrow.scss';
import { client } from '@libs/apollo-client';
import { MainLayout } from '@layouts';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}
        >
          <ApolloProvider client={client}>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </ApolloProvider>
        </ColorModeProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
