import { sectionFilter } from '@utils';
import {
  SharedHead,
  Breadcrumb,
  ContactAndForm,
  GoogleMap,
  Form,
} from '@components';

const ContactUs = ({ pageContent }) => {
  const { title, detail, keywords, slug } = pageContent;

  return (
    <>
      <SharedHead
        title={title}
        metaDescription={detail}
        metaKeywords={keywords}
      />
      <Breadcrumb breadcrumbArray={[{ name: title, pathName: `/${slug}` }]} />
      <div className="relative">
        <ContactAndForm contact={pageContent} />
        <GoogleMap
          contents={sectionFilter(pageContent, '03')}
          className="map"
        />
        <Form contact={pageContent} />
      </div>
    </>
  );
};
export default ContactUs;
