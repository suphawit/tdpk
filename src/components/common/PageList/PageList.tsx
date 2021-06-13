import Link from 'next/link';
import classNames from 'classnames';
import useTranslation from 'next-translate/useTranslation';

import { Container, PageCard } from '@components';
interface PageListrops {
  pages: [];
  extraClasses?: string;
  loadMore?();
  isLoadMore?: boolean;
}

const PageList = ({
  pages = [],
  extraClasses = '',
  loadMore = () => {},
  isLoadMore = false,
}: PageListrops) => {
  const { lang } = useTranslation();
  return (
    <Container extraClasses={extraClasses}>
      <div className="grid gap-4 grid-cols-1 ">
        {pages.map((page) => {
          const { id, parentSlugs, slug, title, detail } = page;

          return (
            <Link key={id} href={`/${parentSlugs[0]}/${slug}`} locale={lang}>
              <a>
                <PageCard title={title} detail={detail} />
              </a>
            </Link>
          );
        })}
      </div>
      <div
        onClick={() => loadMore()}
        className={classNames(
          { hidden: !isLoadMore },
          'cursor-pointer block bg-mid-gray w-max mt-8 px-4 py-3 font-bold'
        )}
      >
        Load More
      </div>
    </Container>
  );
};

export default PageList;
