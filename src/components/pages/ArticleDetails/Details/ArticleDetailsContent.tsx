import { IArticleDetails } from '@models';
import { Container } from '@components';

interface ArticleDetailsContentProps {
  article: IArticleDetails;
}

const ArticleDetailsContent = ({
  article: { featuredImage, title, excerpt, content, tags = [] },
}: ArticleDetailsContentProps) => {
  return (
    <Container extraClasses="lg:py-10">
      <img
        className="w-full float-left mb-6 lg:mr-8 lg:mb-8 lg:max-w-lg"
        src={featuredImage}
        alt={title}
      />
      <div>{excerpt}</div>
      <div className="pb-8">
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="ContentContainer"
        />
      </div>
      <div>
        <p className="font-bold text-xl pb-4">Tags</p>
        <ul className="flex">
          {tags.map((tag) => (
            <li
              key={tag.id}
              className="bg-gray-300 px-2 py-1 font-light text-sm mr-4"
            >
              {tag.title}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default ArticleDetailsContent;
