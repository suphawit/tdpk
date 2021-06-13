import Head from 'next/head';

interface ISharedHead {
  title: string;
  metaDescription: string;
  metaKeywords?: string;
  children?: JSX.Element | string;
}

const SharedHead = ({
  title,
  metaDescription = '',
  metaKeywords = '',
  children = null,
}: ISharedHead) => {
  const isUndefinedWindow = typeof window !== 'undefined';
  const domainName = isUndefinedWindow && window.location.origin;
  let urlPathName = '';
  if (isUndefinedWindow) {
    const { pathname } = window.location;
    urlPathName =
      pathname.substring(0, 3) === '/en' ? pathname.slice(3) : pathname;
  }
  const thaiUrl = `${domainName}${urlPathName}`;
  const englishUrl = `${domainName}/en${urlPathName}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="alternate" hrefLang="th" href={thaiUrl} />
      <link rel="alternate" hrefLang="en" href={englishUrl} />
      {children}
    </Head>
  );
};

export default SharedHead;
