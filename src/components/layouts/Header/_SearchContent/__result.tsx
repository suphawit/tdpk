import classNames from 'classnames';
import useTranslation from 'next-translate/useTranslation';

import { ArticleList, PageList } from '@components';

const __result = ({
  isScrolled,
  result,
  showedResult,
  activeTab,
  setActiveTab,
  setShowedResult,
  keyword,
}) => {
  const activeTabClass = 'border-b-2 font-bold border-true-v';
  const tabClass =
    'first:ml-0 z-10 mx-4 pb-2 lg:pb-1 text-sm lg:text-lg text-mid-black block focus:outline-none';

  let searchResult = ['searchResult overflow-y-scroll'];

  const { total, totalArticles, totalNewsAndPromotions, totalOther } = result;
  const { articles, newsAndPromotions, other } = showedResult;

  const { t } = useTranslation('common');

  if (isScrolled) searchResult.push('scrolled');

  return (
    <section className="bg-gray-100">
      <div className={searchResult.join(' ')}>
        {total > 0 && (
          <>
            <div className="-mb-14 lg:-mb-24 py-1.5 lg:py-2 px-6 lg:px-36 2xl:container 2xl:mx-auto">
              <h3 className="mt-6 text-xl font-bold">{total} results found</h3>
              <nav className="relative mt-6 flex flex-row">
                <button
                  className={classNames(tabClass, {
                    [`${activeTabClass}`]: activeTab === 1,
                  })}
                  onClick={() => setActiveTab(1)}
                >
                  {t('article.one')}
                </button>
                <button
                  className={classNames(tabClass, {
                    [`${activeTabClass}`]: activeTab === 2,
                  })}
                  onClick={() => setActiveTab(2)}
                >
                  {t('newsAndPromotions.other')}
                </button>
                <button
                  className={classNames(tabClass, {
                    [`${activeTabClass}`]: activeTab === 3,
                  })}
                  onClick={() => setActiveTab(3)}
                >
                  {t('others')}
                </button>
                <div className="absolute w-full bottom-0 border-b-2 border-metallic-gray"></div>
              </nav>
            </div>
            <ArticleList
              articles={articles}
              extraClasses={classNames({
                hidden: activeTab !== 1,
              })}
              loadMore={() => {
                setShowedResult({
                  ...showedResult,
                  articles: totalArticles.slice(0, articles.length + 5),
                });
              }}
              isLoadMore={articles.length < totalArticles.length}
            />
            <ArticleList
              articles={newsAndPromotions}
              extraClasses={classNames({
                hidden: activeTab !== 2,
              })}
              loadMore={() => {
                setShowedResult({
                  ...showedResult,
                  newsAndPromotions: totalNewsAndPromotions.slice(
                    0,
                    newsAndPromotions.length + 5
                  ),
                });
              }}
              isLoadMore={
                newsAndPromotions.length < totalNewsAndPromotions.length
              }
            />
            <PageList
              pages={other}
              extraClasses={classNames('pt-18 lg:pt-30', {
                hidden: activeTab !== 3,
              })}
              loadMore={() => {
                setShowedResult({
                  ...showedResult,
                  other: totalOther.slice(0, other.length + 5),
                });
              }}
              isLoadMore={other.length < totalOther.length}
            />
          </>
        )}
        {total === 0 && activeTab !== 0 && (
          <div className="font-bold text-2xl mt-10 px-6 lg:px-36 2xl:container 2xl:mx-auto">{`Sorry, there are no results found with keyword “${keyword}”`}</div>
        )}
      </div>
    </section>
  );
};

export default __result;
