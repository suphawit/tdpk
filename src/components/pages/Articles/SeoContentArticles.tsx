import useTranslation from 'next-translate/useTranslation';

const SeoContentArticles = () => {
  const { t } = useTranslation('common');
  return (
    <section className="bg-mid-white">
      <div className="p-6 lg:py-10 lg:px-24 xl:px-36 2xl:container 2xl:mx-auto">
        <h3 className="text-base font-bold lg:text-lg">
          {t('article.descriptionTitle')}
        </h3>
        <p className="text-base mt-2 lg:text-lg">{t('article.description')}</p>
      </div>
    </section>
  );
};

export default SeoContentArticles;
