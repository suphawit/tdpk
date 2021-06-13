import * as React from 'react';
import useTranslation from 'next-translate/useTranslation';

import { LOCALES } from '@models';
import {
  getArticleList,
  getNewsAndPromotionsList,
  getPageList,
} from '@services';

import Result from './__result';

const _SearchContent = ({ isScrolled }) => {
  const [keyword, setKeyword] = React.useState('');
  const [result, setResult] = React.useState({
    total: 0,
    totalArticles: [],
    totalNewsAndPromotions: [],
    totalOther: [],
  });
  const [showedResult, setShowedResult] = React.useState({
    articles: [],
    newsAndPromotions: [],
    other: [],
  });

  const [activeTab, setActiveTab] = React.useState(0);

  const { t, lang } = useTranslation('common');
  let searchBox = ['searchBox absolute top-16 xl:top-24 left-0 z-10 w-full'];
  if (isScrolled) searchBox.push('scrolled');

  const searchPage = async (e) => {
    e.preventDefault();
    const articles = await getArticleList(
      {
        term: keyword,
      },
      lang as LOCALES
    );
    const newsAndPromotions = await getNewsAndPromotionsList(
      {
        featured: false,
        term: keyword,
      },
      lang as LOCALES
    );
    const other = await getPageList(
      {
        term: keyword,
      },
      lang as LOCALES
    );

    const { total: totalArticles, edges: articlesEdges } = articles;
    const {
      total: totalNewsAndPromotions,
      edges: newsAndPromotionsEdges,
    } = newsAndPromotions;
    const { total: totalOther, edges: otherEdges } = other;

    setResult({
      total: totalArticles + totalNewsAndPromotions + totalOther,
      totalArticles: articlesEdges,
      totalNewsAndPromotions: newsAndPromotionsEdges,
      totalOther: otherEdges,
    });

    setShowedResult({
      articles: articlesEdges.slice(0, 5),
      newsAndPromotions: newsAndPromotionsEdges.slice(0, 5),
      other: otherEdges.slice(0, 5),
    });

    setActiveTab(1);
  };

  return (
    <div className={searchBox.join(' ')}>
      <div className="bg-white">
        <form
          onSubmit={searchPage}
          className="searchForm 2xl:container 2xl:mx-auto py-1.5 lg:py-2 px-6 lg:px-36 h-20 flex items-center justify-center"
        >
          <input
            placeholder="Type your search here"
            className="inputBox text-base xl:text-base focus:outline-none border border-medium-gray py-2.5 pl-12 pr-3"
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
            autoFocus
          />
          <button
            type="submit"
            className="text-base text-white bg-true-v p-3 focus:outline-none"
          >
            {t('search')}
          </button>
        </form>
      </div>
      <Result
        isScrolled={isScrolled}
        result={result}
        showedResult={showedResult}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setShowedResult={setShowedResult}
        keyword={keyword}
      />
    </div>
  );
};

export default _SearchContent;
