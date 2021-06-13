import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

import { GoogleTagManager } from '@components';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/szy7poo.css" />
          <link rel="icon" href="/favicon-true.ico" type="image/x-icon" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <script
            src="https://cdn-apac.onetrust.com/scripttemplates/otSDKStub.js"
            type="text/javascript"
            data-domain-script="be1f4332-942d-4813-8f58-c5ee7780e7ff"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-MS2FW82');`,
            }}
          ></script>
        </Head>
        <body>
          <GoogleTagManager />
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
