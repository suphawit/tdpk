import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import { IArticleDetails } from '@models';
import { formattedDate } from '@utils';

interface MainFeatureArticleProps {
  article: IArticleDetails;
}

const MainFeatureArticle = ({ article }: MainFeatureArticleProps) => {
  const { lang } = useTranslation();
  return (
    <Link
      href={`/insights/articles/${article.id}/${article.slug}`}
      locale={lang}
    >
      <div className="shadow-md md:shadow-none cursor-pointer">
        <div className="MainFeatureArticle__main mb-0 md:mb-6">
          <img
            alt={article.title}
            src={article.featuredImage}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-8 py-6 md:px-0 md:py-0">
          <h3 className="mb-4 font-bold text-lg md:text-xl">{article.title}</h3>
          <p className="hidden mb-4 text-md md:block md:text-lg">
            {article.excerpt}
          </p>
          <p className="text-black font-bold md:text-gray-400">
            {formattedDate(article.postedAt, 'd LLLL')}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MainFeatureArticle;
