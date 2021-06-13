import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import { IHomePageArticleResponse } from '@models';
import { NoSSR } from '@components/common/NoSSR';
import ArticlesGrid from './ArticlesGrid';

interface ArticlesProps {
  homePageArticles: IHomePageArticleResponse;
}

const Articles = ({
  homePageArticles: { section01, articles = [] },
}: ArticlesProps) => {
  const { lang } = useTranslation();

  return (
    <section className="bg-gray-100">
      <div className="grid px-6 py-10 lg:pl-36 lg:pr-10 lg:py-20 lg:grid-cols-12 lg:gap-4 2xl:container 2xl:mx-auto">
        <article className="col-span-4 lg:my-auto">
          {section01 && (
            <>
              <h2 className="font-extrabold text-2xl md:text-3xl">
                {section01.title}
              </h2>
              <p className="mt-4">{section01.detail}</p>
              <p className="underline font-bold text-link-blue mt-6 lg:mt-8">
                <Link href="/insights/articles" locale={lang}>
                  <a>{section01.targetLabel}</a>
                </Link>
              </p>
            </>
          )}
        </article>
        <article className="col-span-8 grid mt-10 gap-8 md:grid-cols-2 lg:mt-0 lg:grid-cols-3 lg:gap-10">
          <NoSSR>
            <ArticlesGrid articles={articles} />
          </NoSSR>
        </article>
      </div>
    </section>
  );
};

export default Articles;
