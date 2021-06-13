import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import { formattedDate } from '@utils';
import { IArticleDetails } from '@models';

interface FeatureArticleProps {
  article: IArticleDetails;
}

const FeatureArticle = ({ article }: FeatureArticleProps) => {
  const { lang } = useTranslation();
  return (
    <Link
      href={`/insights/articles/${article.id}/${article.slug}`}
      locale={lang}
    >
      <div className="flex items-center cursor-pointer grid grid-cols-12 gap-4">
        <div className="MainFeatureArticle__sub col-span-3 lg:col-span-4">
          <img
            alt={article.title}
            src={article.featuredImage}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-9 lg:col-span-8">
          <p className="text-md font-medium mb-2 md:text-lg md:font-bold md:line-clamp-2">
            {article.title}
          </p>
          <p className="hidden font-bold text-gray-400 md:block">
            {formattedDate(article.postedAt, 'd LLLL')}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FeatureArticle;
