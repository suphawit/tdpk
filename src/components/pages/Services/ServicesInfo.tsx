import SanitizedHTML from 'react-sanitized-html';
import useTranslation from 'next-translate/useTranslation';

import { Container } from '@components';

const ServicesInfo = ({
  info: { title = '', description = '', videoUrl = '' },
}) => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <article className="col-span-1">
          <h1 className="text-2xl font-extrabold mb-4 lg:text-3xl lg:mb-6">
            <SanitizedHTML html={t(title)} />
          </h1>
          <div>
            <SanitizedHTML html={t(description)} />
          </div>
        </article>
        <div className="col-span-1">
          <iframe
            width="100%"
            height="315"
            src={videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </Container>
  );
};

export default ServicesInfo;
